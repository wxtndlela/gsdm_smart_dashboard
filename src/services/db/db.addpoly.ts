import { Injectable } from '@angular/core';
import { AddpolyModal } from '../../providers/addpoly.modal';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
    providedIn: 'root'
})

export class Poly {
    private dbPath = '/polygons';
    public Poly: BehaviorSubject<Object>;

    Ref: AngularFirestoreCollection<any>;
    Cont: AngularFirestoreCollection<any>;

    private itemDoc: AngularFirestoreDocument<Item>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Poly = new BehaviorSubject<Object[]>([]);
    }

    async getAll() {
        this.Ref.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    item_id: c.payload.doc.data().item_id,
                    item_name: c.payload.doc.data().item_name,
                    aX: c.payload.doc.data().aX,
                    aY: c.payload.doc.data().aY,
                    bX: c.payload.doc.data().bX,
                    bY: c.payload.doc.data().bY,
                    cX: c.payload.doc.data().cX,
                    cY: c.payload.doc.data().cY,
                    dX: c.payload.doc.data().dX,
                    dY: c.payload.doc.data().dY
                   
                }))
            )
        ).subscribe(data => {
            //console.log(data)
            this.Poly.next(data);
        });
    }

    async getPoly(item_id){
        let Data = [];
        this.Cont = this.db.collection(this.dbPath, ref => ref
            .where("item_id", "==", item_id)
        );
        this.Cont.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    id: c.payload.doc.id,
                    item_id: c.payload.doc.data().item_id,
                    item_name: c.payload.doc.data().item_name,
                    aX: c.payload.doc.data().aX,
                    aY: c.payload.doc.data().aY,
                    bX: c.payload.doc.data().bX,
                    bY: c.payload.doc.data().bY,
                    cX: c.payload.doc.data().cX,
                    cY: c.payload.doc.data().cY,
                    dX: c.payload.doc.data().dX,
                    dY: c.payload.doc.data().dY,
                   
                }))
            )
        ).subscribe(data => {
            this.Poly.next(data);
            //console.log(data)
            //Data.push(data);
        });

        

        return Data
    }

    async get(id) {

        //this.itemDoc.get()

    }

    async create(poly: AddpolyModal): Promise<any> {
        const id = this.db.createId();
        poly.id = id;
        return this.Ref.doc(id).set(poly);
    }

    async update(id: string, data: any): Promise<void> {
        return this.Ref.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.Ref.doc(id).delete();
    }
}