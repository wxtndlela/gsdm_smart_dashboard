import { Injectable } from '@angular/core';
import { AddScheduleModal } from '../../providers/addschedule.modal';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Schedule {
    private dbPath = '/schedules';
    public Schedule: BehaviorSubject<Object>;

    Ref: AngularFirestoreCollection<any>;
    Cont: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Schedule = new BehaviorSubject<Object[]>([]);
    }

    async getAll() {
        this.Ref.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    user_id: c.payload.doc.data().user_id,
                    name: c.payload.doc.data().name,
                    enabled: c.payload.doc.data().enabled
                   
                }))
            )
        ).subscribe(data => {
            //console.log(data)
            this.Schedule.next(data);
        });
    }

    async getSchedules(user_id){
        let Data = [];
        this.Cont = this.db.collection(this.dbPath, ref => ref
            .where("user_id", "==", user_id)
            .orderBy("name","asc")
        );
        this.Cont.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    user_id: c.payload.doc.data().user_id,
                    name: c.payload.doc.data().name,
                    enabled: c.payload.doc.data().enabled
                   
                }))
            )
        ).subscribe(data => {
            this.Schedule.next(data);
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

    async create(schedule: AddScheduleModal): Promise<any> {
        const id = this.db.createId();
        return this.Ref.doc(id).set(schedule);
    }

    async update(id: string, data: any): Promise<void> {
        return this.Ref.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.Ref.doc(id).delete();
    }
}