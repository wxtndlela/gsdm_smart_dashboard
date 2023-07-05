import { Injectable } from "@angular/core";
import { AddVCIModal } from "../../providers/addvci.modal";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryDocumentSnapshot,
} from "@angular/fire/firestore";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class Vci {
  private dbPath = "/vci";
  public Vci: BehaviorSubject<Object>;

  Ref: AngularFirestoreCollection<any>;
  Cont: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.Ref = db.collection(this.dbPath);
    this.Vci = new BehaviorSubject<Object[]>([]);
  }

  async getAll() {
    this.Ref.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            file_url: c.payload.doc.data().file_url,
            processed: c.payload.doc.data().processed,
            processed_date: c.payload.doc.data().processed_date,
            state: c.payload.doc.data().state,
          }))
        )
      )
      .subscribe((data) => {
        //console.log(data)
        this.Vci.next(data);
      });
  }

  async get(id) {
    let q1 = this.db
      .collection(this.dbPath, (ref) => ref.where("content_id", "==", id))
      .valueChanges();

    let q2 = this.db
      .collection(this.dbPath, (ref) => ref.where("user_id", "==", id))
      .valueChanges();

    return combineLatest(q1, q2).pipe(
      map(([q1, q2]) => (q1.length > 0 ? q1[0] : q2[0]))
    );
  }

  async update(id: string, data: any): Promise<void> {
    return this.Ref.doc(id).update(data);
  }
}
