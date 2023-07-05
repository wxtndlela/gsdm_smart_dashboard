import { Injectable } from '@angular/core';
import { UserModal } from '../../providers/user.modal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Users {
    private dbPath = '/users';
    public Users: BehaviorSubject<Object>;
    public User: any;

    Ref: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Users = new BehaviorSubject<Object[]>([]);
    }

    async getAll() {
        this.Ref.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.data().id,
                    balance: c.payload.doc.data().balance,
                    displayName: c.payload.doc.data().displayName,
                    email: c.payload.doc.data().email,
                    lastDate: c.payload.doc.data().lastDate,
                    registerDate: c.payload.doc.data().registerDate,
                }))
            )
        ).subscribe(data => {
            console.log('Users', data);
            this.Users.next(data);
        });
    }

    async get(user_id) {
        // return this.db
        //     .collection(this.dbPath, ref => ref
        //         .where("email", "==", user_id)
        //     )
        //     .valueChanges()
        //     .pipe(
        //         tap(docs => console.log('docs', docs)),
        //         map(val => val.length > 0 ? val[0] : null)
        //     )

        let q1 = this.db
            .collection(this.dbPath, ref => ref
                .where("email", "==", user_id)
            ).valueChanges();

        let q2 = this.db
            .collection(this.dbPath, ref => ref
                .where("user_id", "==", user_id)
            ).valueChanges();

        return combineLatest(q1, q2).pipe(
            map(([q1, q2]) => q1.length > 0 ? q1[0] : q2[0])
        )


    }

    async create(user: UserModal): Promise<any> {
        const id = this.db.createId();
        user.user_id = id;
        
        return this.Ref.doc(id).set(user);
    }

    update(id: string, data: any): Promise<void> {
        return this.Ref.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.Ref.doc(id).delete();
    }

}