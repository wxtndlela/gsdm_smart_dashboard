import { Injectable } from "@angular/core";
import { Addcontent } from "../../providers/addcontent.modal";
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
export class Content {
  private dbPath = "/content";
  public Content: BehaviorSubject<Object>;

  Ref: AngularFirestoreCollection<any>;
  Cont: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.Ref = db.collection(this.dbPath);
    this.Content = new BehaviorSubject<Object[]>([]);
  }

  async getAll() {
    this.Ref.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            user_id: c.payload.doc.data().user_id,
            name: c.payload.doc.data().name,
            content_url: c.payload.doc.data().content_url,
            content_type: c.payload.doc.data().content_type,
            content_id: c.payload.doc.data().content_id,
            enabled: c.payload.doc.data().enabled,
            approved: c.payload.doc.data().approved,
          }))
        )
      )
      .subscribe((data) => {
        //console.log(data)
        this.Content.next(data);
      });
  }

  async getContent(user_id) {
    let Data = [];
    this.Cont = this.db.collection(this.dbPath, (ref) =>
      ref.where("user_id", "==", user_id).orderBy("name", "asc")
    );
    this.Cont.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            user_id: c.payload.doc.data().user_id,
            name: c.payload.doc.data().name,
            content_url: c.payload.doc.data().content_url,
            content_type: c.payload.doc.data().content_type,
            content_id: c.payload.doc.data().content_id,
            enabled: c.payload.doc.data().enabled,
            approved: c.payload.doc.data().approved,
          }))
        )
      )
      .subscribe((data) => {
        this.Content.next(data);
        //console.log(data)
        //Data.push(data);
      });

    return Data;
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

  async create(content: Addcontent): Promise<any> {
    const id = this.db.createId();
    content.content_id = id;
    return this.Ref.doc(id).set(content);
  }

  async update(id: string, data: any): Promise<void> {
    return this.Ref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.Ref.doc(id).delete();
  }
}
