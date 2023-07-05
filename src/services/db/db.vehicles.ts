import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Vehicles {
    private dbPath = '/vehicles';
    public Vehicles: BehaviorSubject<Object>;

    Ref: AngularFirestoreCollection<any>;
    Cont: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Vehicles = new BehaviorSubject<Object[]>([]);
    }

    async getAll() {

        this.Cont = this.db.collection(this.dbPath, ref => ref
            .orderBy("datetime","desc")
            // .limit(10)
        );
        this.Cont.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    uuid: c.payload.doc.data().id,
                    date: c.payload.doc.data().date,
                    time: c.payload.doc.data().time,

                    datetime: c.payload.doc.data().datetime,
                    index: c.payload.doc.data().index,
                    path: c.payload.doc.data().path,
                    siteid: c.payload.doc.data().siteid,

                    vclass: c.payload.doc.data().vclass,
                    vspeed: c.payload.doc.data().vspeed,


                }))
            )
        ).subscribe(data => {
            this.Vehicles.next(data);
        });
    }

    async getbyvclass(siteid, vclass) {

        let q1 = this.db
            .collection(this.dbPath, ref => ref
                .where("vclass", "==", vclass)
                .where("name", ">=", siteid)
                .where("name", "<=", siteid + "\uf8ff")
            ).valueChanges();

        return combineLatest(q1).pipe(
            map(([q1]) => q1.length > 0)
        )

    }


}