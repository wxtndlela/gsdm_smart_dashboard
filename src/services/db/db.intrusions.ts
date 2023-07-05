import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Intrusions {
    private dbPath = '/intrusions';
    public Intrusions: BehaviorSubject<Object>;

    Ref: AngularFirestoreCollection<any>;
    Cont: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Intrusions = new BehaviorSubject<Object[]>([]);
    }
    

    async getAll() {
        this.Ref.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    area_id: c.payload.doc.data().area_id,
                    time: c.payload.doc.data().time,
                    type: c.payload.doc.data().type,
                   
                }))
            )
        ).subscribe(data => {
            //console.log(data)
            this.Intrusions.next(data);
        });
    }

    async getIntrusion(area_id){
        let Data = [];
        this.Cont = this.db.collection(this.dbPath, ref => ref
            .where("area_id", "!=", "")
            
            .orderBy("area_id","asc")
            .orderBy("type","asc")
            .orderBy("time","desc")
        );
        this.Cont.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    area_id: c.payload.doc.data().area_id,
                    time: c.payload.doc.data().time,
                    type: c.payload.doc.data().type,
                   
                }))
            )
        ).subscribe(data => {
            this.Intrusions.next(data);
            //console.log(data)
            //Data.push(data);
        });

        

        return Data
    }

    async get(id) {

        let q1 = this.db
            .collection(this.dbPath, ref => ref
                .where("content_id", "==", id)
            ).valueChanges();

        let q2 = this.db
            .collection(this.dbPath, ref => ref
                .where("user_id", "==", id)
            ).valueChanges();

        return combineLatest(q1, q2).pipe(
            map(([q1, q2]) => q1.length > 0 ? q1[0] : q2[0])
        )

    }

    async update(id: string, data: any): Promise<void> {
        return this.Ref.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.Ref.doc(id).delete();
    }
}