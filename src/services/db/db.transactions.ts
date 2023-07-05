import { Injectable } from '@angular/core';
import { TransactionModal } from '../../providers';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Transactions {
    private dbPath = '/transactions';
    public Transactions: BehaviorSubject<Object>;

    Ref: AngularFirestoreCollection<any>;

    constructor(
        private db: AngularFirestore,
    ) {
        this.Ref = db.collection(this.dbPath);
        this.Transactions = new BehaviorSubject<Object[]>([]);
    }

    async getAll() {
        this.Ref.snapshotChanges().pipe(
            map(changes =>
                changes.map(c =>
                ({
                    user_id: c.payload.doc.data().user_id,
                    transaction_id: c.payload.doc.data().transaction_id,
                    date_created: c.payload.doc.data().date_created,
                    amount: c.payload.doc.data().amount,
                    balance: c.payload.doc.data().balance,
                    currency: c.payload.doc.data().currency,
                }))
            )
        ).subscribe(data => {
            this.Transactions.next(data);
        });
    }

    async get(user_id) {

        let q1 = this.db
            .collection(this.dbPath, ref => ref
                .where("user_id", "==", user_id).orderBy('date_created','desc')
            ).valueChanges();

        let q2 = this.db
            .collection(this.dbPath, ref => ref
                .where("transaction_id", "==", user_id)
            ).valueChanges();

        return combineLatest(q1, q2).pipe(
            map(([q1, q2]) => q1.length > 0 ? q1 : q2)
        )
    }

    async create(billboard: TransactionModal): Promise<any> {
        const id = this.db.createId();
        billboard.transaction_id = id;
        return this.Ref.doc(id).set(billboard);
    }

    update(id: string, data: any): Promise<void> {
        return this.Ref.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.Ref.doc(id).delete();
    }
}