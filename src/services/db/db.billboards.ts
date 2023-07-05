import { Injectable } from "@angular/core";
import { BillboardModal } from "../../providers";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class Billboards {
  private dbPath = "/billboards";
  public Billboards: BehaviorSubject<Object>;

  Ref: AngularFirestoreCollection<any>;
  Cont: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.Ref = db.collection(this.dbPath);
    this.Billboards = new BehaviorSubject<Object[]>([]);
  }

  async getAll() {
    this.Cont = this.db.collection(this.dbPath, (ref) =>
      ref.orderBy("name", "asc")
    );
    this.Cont.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            uuid: c.payload.doc.data().uuid,
            name: c.payload.doc.data().name,
            photo_url: c.payload.doc.data().photo_url,

            // province: c.payload.doc.data().province,
            // city: c.payload.doc.data().city,
            // surburb: c.payload.doc.data().surburb,
            // // postalCode: c.payload.doc.data().postalCode,

            // date_created: c.payload.doc.data().date_created,
            // date_modified: c.payload.doc.data().date_modified,

            // latitude: c.payload.doc.data().latitude,
            // longitude: c.payload.doc.data().longitude,
            // screen_width: c.payload.doc.data().screen_width,
            // screen_height: c.payload.doc.data().screen_height,

            // peak_rate: c.payload.doc.data().peak_rate,
            // offpeak_rate: c.payload.doc.data().offpeak_rate,
            // special_rate: c.payload.doc.data().special_rate,
            // billboard_id: c.payload.doc.data().billboard_id,
            // orientation: c.payload.doc.data().orientation,
            // mdptype: c.payload.doc.data().mdptype,
            // mdplocation: c.payload.doc.data().mdplocation,
            // content_url: c.payload.doc.data().content_url,
            // schedule_id: c.payload.doc.data().schedule_id,
            // calltoaction: c.payload.doc.data().calltoaction,
          }))
        )
      )
      .subscribe((data) => {
        this.Billboards.next(data);
      });
  }

  async get(id) {
    let q1 = this.db
      .collection(this.dbPath, (ref) => ref.where("billboard_id", "==", id))
      .valueChanges();

    let q2 = this.db
      .collection(this.dbPath, (ref) => ref.where("user_id", "==", id))
      .valueChanges();

    return combineLatest(q1, q2).pipe(
      map(([q1, q2]) => (q1.length > 0 ? q1[0] : q2[0]))
    );
  }

  async create(billboard: BillboardModal): Promise<any> {
    const id = this.db.createId();
    billboard.billboard_id = id;
    return this.Ref.doc(id).set(billboard);
  }

  async update(id: string, data: any): Promise<void> {
    return this.Ref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.Ref.doc(id).delete();
  }
}
