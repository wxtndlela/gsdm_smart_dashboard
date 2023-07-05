import { Injectable } from "@angular/core";
import { AddSegmentMediaModal } from "../../providers/addsegmentmedia.modal";
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
export class SegmentMedia {
  private dbPath = "/segment-media";
  public SegmentMedia: BehaviorSubject<Object>;

  Ref: AngularFirestoreCollection<any>;
  Cont: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.Ref = db.collection(this.dbPath);
    this.SegmentMedia = new BehaviorSubject<Object[]>([]);
  }

  async getAll() {
    this.Ref.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            user_id: c.payload.doc.data().user_id,
            road_id: c.payload.doc.data().road_id,
            media_name: c.payload.doc.data().media_name,
            media_type: c.payload.doc.data().media_type,
            media_url: c.payload.doc.data().media_url,
            addedondatetime: c.payload.doc.data().addedondatetime,
            enabled: c.payload.doc.data().enabled,
            approved: c.payload.doc.data().approved,
          }))
        )
      )
      .subscribe((data) => {
        //console.log(data)
        this.SegmentMedia.next(data);
      });
  }

  async getSegmentMedia(road_id) {
    let Data = [];
    this.Cont = this.db.collection(this.dbPath, (ref) =>
      ref.where("road_id", "==", road_id).orderBy("addedondatetime", "desc")
    );
    this.Cont.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            user_id: c.payload.doc.data().user_id,
            road_id: c.payload.doc.data().road_id,
            media_name: c.payload.doc.data().media_name,
            media_type: c.payload.doc.data().media_type,
            media_url: c.payload.doc.data().media_url,
            addedondatetime: c.payload.doc.data().addedondatetime,
            enabled: c.payload.doc.data().enabled,
            approved: c.payload.doc.data().approved,
          }))
        )
      )
      .subscribe((data) => {
        this.SegmentMedia.next(data);
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

  async create(media: AddSegmentMediaModal): Promise<any> {
    const id = this.db.createId();
    return this.Ref.doc(id).set(media);
  }

  async update(id: string, data: any): Promise<void> {
    return this.Ref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.Ref.doc(id).delete();
  }
}
