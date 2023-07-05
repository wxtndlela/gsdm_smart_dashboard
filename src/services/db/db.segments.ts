import { Injectable } from "@angular/core";
import { AddSegment } from "../../providers/addsegment.modal";
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
export class Segments {
  private dbPath = "/gsdm-road-inspection-segments";
  public Segments: BehaviorSubject<Object>;

  Ref: AngularFirestoreCollection<any>;
  Cont: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.Ref = db.collection(this.dbPath);
    this.Segments = new BehaviorSubject<Object[]>([]);
  }

  async getAll() {
    let Data = [];
    //this.Segments = new BehaviorSubject<Object[]>([]);
    this.Ref = this.db.collection(this.dbPath);
    this.Ref.snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            road_id: c.payload.doc.data().road_id,
            street_name: c.payload.doc.data().street_name,
            route_seq: c.payload.doc.data().route_seq,
            start_km: c.payload.doc.data().start_km,
            end_km: c.payload.doc.data().end_km,
            municipality: c.payload.doc.data().municipality,
            road_len: c.payload.doc.data().road_len,
            st_length: c.payload.doc.data().st_length,
            geometry: c.payload.doc.data().geometry,
            MEASURE_DATE: c.payload.doc.data().MEASURE_DATE,
            VCI: c.payload.doc.data().VCI,
            RCI: c.payload.doc.data().RCI,
            MNI: c.payload.doc.data().MNI,
            SCI: c.payload.doc.data().SCI,
            STCI: c.payload.doc.data().STCI,
            FCI: c.payload.doc.data().FCI,
            CCI: c.payload.doc.data().CCI,
            SURFACE: c.payload.doc.data().SURFACE,
            TEXTURE: c.payload.doc.data().TEXTURE,
            VOIDS: c.payload.doc.data().VOIDS,
            SURFACE_FAILURE_DEG: c.payload.doc.data().SURFACE_FAILURE_DEG,
            SURFACE_FAILURE_EXT: c.payload.doc.data().SURFACE_FAILURE_EXT,
            SURFACE_PATCHING_DEG: c.payload.doc.data().SURFACE_PATCHING_DEG,
            SURFACE_PATCHING_EXT: c.payload.doc.data().SURFACE_PATCHING_EXT,
            SURFACE_CRACK_DEG: c.payload.doc.data().SURFACE_CRACK_DEG,
            SURFACE_CRACK_EXT: c.payload.doc.data().SURFACE_CRACK_EXT,
            AGGR_LOSS_DEG: c.payload.doc.data().AGGR_LOSS_DEG,
            AGGR_LOSS_EXT: c.payload.doc.data().AGGR_LOSS_EXT,
            AGGR_LOSS_ACT: c.payload.doc.data().AGGR_LOSS_ACT,
            BINDER_CONDITION_DEG: c.payload.doc.data().BINDER_CONDITION_DEG,
            BINDER_CONDITION_EXT: c.payload.doc.data().BINDER_CONDITION_EXT,
            BLEEDING_DEG: c.payload.doc.data().BLEEDING_DEG,
            BLEEDING_EXT: c.payload.doc.data().BLEEDING_EXT,
            SURF_DEFORM_DEG: c.payload.doc.data().SURF_DEFORM_DEG,
            SUR_DEFORM_EXT: c.payload.doc.data().SUR_DEFORM_EXT,
            BLOCK_CRACK_DEG: c.payload.doc.data().BLOCK_CRACK_DEG,
            BLOCK_CRACK_EXT: c.payload.doc.data().BLOCK_CRACK_EXT,
            LONG_CRACK_DEG: c.payload.doc.data().LONG_CRACK_DEG,
            LONG_CRACK_EXT: c.payload.doc.data().LONG_CRACK_EXT,
            LONG_CRACK_TYPE: c.payload.doc.data().LONG_CRACK_TYPE,
            TRANSVERSE_CRACK_DEG: c.payload.doc.data().TRANSVERSE_CRACK_DEG,
            TRANSVERSE_CRACK_EXT: c.payload.doc.data().TRANSVERSE_CRACK_EXT,
            CROCODILE_CRACK_DEG: c.payload.doc.data().CROCODILE_CRACK_DEG,
            CROCODILE_CRACK_EXT: c.payload.doc.data().CROCODILE_CRACK_EXT,
            PUMPING_DEG: c.payload.doc.data().PUMPING_DEG,
            PUMPING_EXT: c.payload.doc.data().PUMPING_EXT,
            RUTTING_DEG: c.payload.doc.data().RUTTING_DEG,
            RUTTING_EXT: c.payload.doc.data().RUTTING_EXT,
            UNDULATION_DEG: c.payload.doc.data().UNDULATION_DEG,
            UNDULATION_EXT: c.payload.doc.data().UNDULATION_EXT,
            PATCHING_DEG: c.payload.doc.data().PATCHING_DEG,
            PATCHING_EXT: c.payload.doc.data().PATCHING_EXT,
            POTHOLE_DEG: c.payload.doc.data().POTHOLE_DEG,
            POTHOLE_EXT: c.payload.doc.data().POTHOLE_EXT,
            FAILURES_DEG: c.payload.doc.data().FAILURES_DEG,
            FAILURES_EXT: c.payload.doc.data().FAILURES_EXT,
            RIDING_QUAL_DEG: c.payload.doc.data().RIDING_QUAL_DEG,
            RQUAL_PROB_HOLE: c.payload.doc.data().RQUAL_PROB_HOLE,
            RQUAL_PROP_PATCH: c.payload.doc.data().RQUAL_PROP_PATCH,
            RQUAL_PROB_UNDUL: c.payload.doc.data().RQUAL_PROB_UNDUL,
            RQUAL_PROB_UNEVEN: c.payload.doc.data().RQUAL_PROB_UNEVEN,
            RQUAL_PROB_CORR: c.payload.doc.data().RQUAL_PROB_CORR,
            SKID_RESISTANCE_DEG: c.payload.doc.data().SKID_RESISTANCE_DEG,
            SKID_PROB_BLEED: c.payload.doc.data().SKID_PROB_BLEED,
            SKID_PROB_POLISH: c.payload.doc.data().SKID_PROB_POLISH,
            DRAINAGE_SURF: c.payload.doc.data().DRAINAGE_SURF,
            DRAIN_PROB_RUT: c.payload.doc.data().DRAIN_PROB_RUT,
            DRAIN_PRB_SHOULD: c.payload.doc.data().DRAIN_PRB_SHOULD,
            DRAIN_PROB_ALIGN: c.payload.doc.data().DRAIN_PROB_ALIGN,
            DRAIN_PROB_SIDE: c.payload.doc.data().DRAIN_PROB_SIDE,
            UNPAVED_SHOULDER: c.payload.doc.data().UNPAVED_SHOULDER,
            UNPAVED_PROB_ERODED: c.payload.doc.data().UNPAVED_PROB_ERODED,
            UNPAVED_PROB_OGROWN: c.payload.doc.data().UNPAVED_PROB_OGROWN,
            UNPAVED_PROB_INCLINED: c.payload.doc.data().UNPAVED_PROB_INCLINED,
            UNPAVED_PROB_2HIGH: c.payload.doc.data().UNPAVED_PROB_2HIGH,
            UNPAVED_PROB_2NARROW: c.payload.doc.data().UNPAVED_PROB_2NARROW,
            EDGE_BREAK_DEG: c.payload.doc.data().EDGE_BREAK_DEG,
            EDGE_BREAK_EXT: c.payload.doc.data().EDGE_BREAK_EXT,
            EDGE_CRACKS_DEG: c.payload.doc.data().EDGE_CRACKS_DEG,
            EDGE_CRACKS_EXT: c.payload.doc.data().EDGE_CRACKS_EXT,
            EDGE_DROPOFF_DEG: c.payload.doc.data().EDGE_DROPOFF_DEG,
            EDGE_DROPOFF_EXT: c.payload.doc.data().EDGE_DROPOFF_EXT,
            OPC: c.payload.doc.data().OPC,
            OTHER_PROB_CROSSINGS: c.payload.doc.data().OTHER_PROB_CROSSINGS,
            OTHER_PROB_TREES: c.payload.doc.data().OTHER_PROB_TREES,
            OTHER_PROB_MOLES: c.payload.doc.data().OTHER_PROB_MOLES,
            OTHER_PROB_DAMAGE: c.payload.doc.data().OTHER_PROB_DAMAGE,
            ENGINEER_COMMENTS: c.payload.doc.data().ENGINEER_COMMENTS,
            ENGINEER_NAME: c.payload.doc.data().ENGINEER_NAME,
            ENGINEER_USERNAME: c.payload.doc.data().ENGINEER_USERNAME,
            surfacetype: c.payload.doc.data().surfacetype,
            surface: c.payload.doc.data().surface,
            Texture: c.payload.doc.data().Texture,
            voids: c.payload.doc.data().voids,
            SURFACE_DEFORM_DEG: c.payload.doc.data().SURFACE_DEFORM_DEG,
            SURFACE_DEFORM_EXT: c.payload.doc.data().SURFACE_DEFORM_EXT,
            ROAD_TYPE: c.payload.doc.data().ROAD_TYPE,
            MOISTURE: c.payload.doc.data().MOISTURE,
            GRAVEL_QUALITY: c.payload.doc.data().GRAVEL_QUALITY,
            GQUAL_OVERSIZE: c.payload.doc.data().GQUAL_OVERSIZE,
            GQUAL_CLAY: c.payload.doc.data().GQUAL_CLAY,
            GQUAL_LOOSE: c.payload.doc.data().GQUAL_LOOSE,
            MAX_SIZE: c.payload.doc.data().MAX_SIZE,
            GRADING: c.payload.doc.data().GRADING,
            PLASTICITY: c.payload.doc.data().PLASTICITY,
            GRAVEL_QUANTITY: c.payload.doc.data().GRAVEL_QUANTITY,
            EXPOSED_SUBGRADE: c.payload.doc.data().EXPOSED_SUBGRADE,
            SUBGRADE_QUALITY: c.payload.doc.data().SUBGRADE_QUALITY,
            CORRUGATION_DEG: c.payload.doc.data().CORRUGATION_DEG,
            CORRUGATION_EXT: c.payload.doc.data().CORRUGATION_EXT,
            LOOSE_MATERIAL_DEG: c.payload.doc.data().LOOSE_MATERIAL_DEG,
            LOOSE_MATERIAL_EXT: c.payload.doc.data().LOOSE_MATERIAL_EXT,
            STONINESS_FIX_DEG: c.payload.doc.data().STONINESS_FIX_DEG,
            STONINESS_FIX_EXT: c.payload.doc.data().STONINESS_FIX_EXT,
            STONINESS_LOOSE_DEG: c.payload.doc.data().STONINESS_LOOSE_DEG,
            STONINESS_LOOSE_EXT: c.payload.doc.data().STONINESS_LOOSE_EXT,
            EROSION_LONG_DEG: c.payload.doc.data().EROSION_LONG_DEG,
            EROSION_LONG_EXT: c.payload.doc.data().EROSION_LONG_EXT,
            EROSION_TRANS_DEG: c.payload.doc.data().EROSION_TRANS_DEG,
            EROSION_TRANS_EXT: c.payload.doc.data().EROSION_TRANS_EXT,
            RIDING_QUAL_EXT: c.payload.doc.data().RIDING_QUAL_EXT,
            RQUAL_PROB_DFORM: c.payload.doc.data().RQUAL_PROB_DFORM,
            RQUAL_PROB_STONINESS: c.payload.doc.data().RQUAL_PROB_STONINESS,
            RQUAL_PROB_ROCKS: c.payload.doc.data().RQUAL_PROB_ROCKS,
            RQUAL_PROB_RUTS: c.payload.doc.data().RQUAL_PROB_RUTS,
            RQUAL_PROB_EROSION: c.payload.doc.data().RQUAL_PROB_EROSION,
            TRAFFICABILITY_DEG: c.payload.doc.data().TRAFFICABILITY_DEG,
            TRAFFIC_PROB_STEEP: c.payload.doc.data().TRAFFIC_PROB_STEEP,
            TRAFFIC_PROB_ROCKS: c.payload.doc.data().TRAFFIC_PROB_ROCKS,
            TRAFFIC_PROB_VEGETATION:
              c.payload.doc.data().TRAFFIC_PROB_VEGETATION,
            TRAFFIC_PROB_DRAINAGE: c.payload.doc.data().TRAFFIC_PROB_DRAINAGE,
            SAFETY_DEG: c.payload.doc.data().SAFETY_DEG,
            SAFETY_PROB_DUST: c.payload.doc.data().SAFETY_PROB_DUST,
            SAFETY_PROB_SLIP: c.payload.doc.data().SAFETY_PROB_SLIP,
            SAFETY_PROB_SKID: c.payload.doc.data().SAFETY_PROB_SKID,
            SAFETY_PROB_DRAINAGE: c.payload.doc.data().SAFETY_PROB_DRAINAGE,
            TRANSVERSE_PROFILE: c.payload.doc.data().TRANSVERSE_PROFILE,
            PROFILE_PROB_WINDROWS: c.payload.doc.data().PROFILE_PROB_WINDROWS,
            PROFILE_PROB_RUTTING: c.payload.doc.data().PROFILE_PROB_RUTTING,
            PROFILE_PROB_SHAPE: c.payload.doc.data().PROFILE_PROB_SHAPE,
            PROFILE_PROB_LEVEL: c.payload.doc.data().PROFILE_PROB_LEVEL,
            DRAINAGE_SIDE: c.payload.doc.data().DRAINAGE_SIDE,
            DRAIN_PROB_CULVERTS: c.payload.doc.data().DRAIN_PROB_CULVERTS,
            DRAIN_PROB_MITRE: c.payload.doc.data().DRAIN_PROB_MITRE,
            DRAIN_PROB_LEVEL: c.payload.doc.data().DRAIN_PROB_LEVEL,
            TERR_CLASS: c.payload.doc.data().TERR_CLASS,
            GRADIENT: c.payload.doc.data().GRADIENT,
            BLOCK_TYPE: c.payload.doc.data().BLOCK_TYPE,
            ASSESSED: c.payload.doc.data().ASSESSED,
            BLOCK_LAY: c.payload.doc.data().BLOCK_LAY,
            BLOCK_THICK: c.payload.doc.data().BLOCK_THICK,
            CHAMFERS: c.payload.doc.data().CHAMFERS,
            SPALLED_CRACK_DEG: c.payload.doc.data().SPALLED_CRACK_DEG,
            SPALLED_CRACK_EXT: c.payload.doc.data().SPALLED_CRACK_EXT,
            SURF_INTEGRITY_DEG: c.payload.doc.data().SURF_INTEGRITY_DEG,
            SURF_INTEGRITY_EXT: c.payload.doc.data().SURF_INTEGRITY_EXT,
            JOINT_LOSS_DEG: c.payload.doc.data().JOINT_LOSS_DEG,
            JOINT_LOSS_EXT: c.payload.doc.data().JOINT_LOSS_EXT,
            EDGE_DAMAGE_DEG: c.payload.doc.data().EDGE_DAMAGE_DEG,
            EDGE_DAMAGE_EXT: c.payload.doc.data().EDGE_DAMAGE_EXT,
            POT_PATCH_DEG: c.payload.doc.data().POT_PATCH_DEG,
            POT_PATCH_EXT: c.payload.doc.data().POT_PATCH_EXT,
            DRAINAGE_SURG: c.payload.doc.data().DRAINAGE_SURG,
            DRAIN_PROB_PROFILE: c.payload.doc.data().DRAIN_PROB_PROFILE,
            DRAIN_PROB_SHOULD: c.payload.doc.data().DRAIN_PROB_SHOULD,
            DRAIN_PROB_FAIL: c.payload.doc.data().DRAIN_PROB_FAIL,
            COMMENTS: c.payload.doc.data().COMMENTS,
            NAME: c.payload.doc.data().NAME,
            USERNAME: c.payload.doc.data().USERNAME,
            MODIFIEDONDATETIME: c.payload.doc.data().MODIFIEDONDATETIME,
          }))
        )
      )
      .subscribe((data) => {
        //console.log("GET ALL SEGMENTS:", data);
        this.Segments.next(data);
        //Data.push(data);
      });

    //return Data;
  }

  async getIndSegment(segment_id: string) {
    let Data = [];
    this.Cont = this.db.collection(this.dbPath, (ref) =>
      ref.where("road_id", "==", segment_id)
    );

    return this.Cont.get().pipe(
      map((snapshot) =>
        snapshot.docs.map((doc) => ({
          id: doc.id,
          MODIFIEDONDATETIME: doc.data().MODIFIEDONDATETIME,
        }))
      )
    );
  }

  // async getIndSegment(segment_id) {
  //   // let Data = [];
  //   // this.Cont = this.db.collection(this.dbPath, (ref) =>
  //   //   ref.where("road_id", "==", segment_id)
  //   // );
  //   // this.Cont.doc()
  // }

  async getSegment(segment_id) {
    let Data = [];
    this.Cont = this.db.collection(this.dbPath, (ref) =>
      ref.where("road_id", "==", segment_id)
    );

    return this.Cont.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({
          id: c.payload.doc.id,
          road_id: c.payload.doc.data().road_id,
          street_name: c.payload.doc.data().street_name,
          route_seq: c.payload.doc.data().route_seq,
          start_km: c.payload.doc.data().start_km,
          end_km: c.payload.doc.data().end_km,
          municipality: c.payload.doc.data().municipality,
          road_len: c.payload.doc.data().road_len,
          st_length: c.payload.doc.data().st_length,
          geometry: c.payload.doc.data().geometry,
          MEASURE_DATE: c.payload.doc.data().MEASURE_DATE,
          VCI: c.payload.doc.data().VCI,
          RCI: c.payload.doc.data().RCI,
          MNI: c.payload.doc.data().MNI,
          SCI: c.payload.doc.data().SCI,
          STCI: c.payload.doc.data().STCI,
          FCI: c.payload.doc.data().FCI,
          CCI: c.payload.doc.data().CCI,
          SURFACE: c.payload.doc.data().SURFACE,
          TEXTURE: c.payload.doc.data().TEXTURE,
          VOIDS: c.payload.doc.data().VOIDS,
          SURFACE_FAILURE_DEG: c.payload.doc.data().SURFACE_FAILURE_DEG,
          SURFACE_FAILURE_EXT: c.payload.doc.data().SURFACE_FAILURE_EXT,
          SURFACE_PATCHING_DEG: c.payload.doc.data().SURFACE_PATCHING_DEG,
          SURFACE_PATCHING_EXT: c.payload.doc.data().SURFACE_PATCHING_EXT,
          SURFACE_CRACK_DEG: c.payload.doc.data().SURFACE_CRACK_DEG,
          SURFACE_CRACK_EXT: c.payload.doc.data().SURFACE_CRACK_EXT,
          AGGR_LOSS_DEG: c.payload.doc.data().AGGR_LOSS_DEG,
          AGGR_LOSS_EXT: c.payload.doc.data().AGGR_LOSS_EXT,
          AGGR_LOSS_ACT: c.payload.doc.data().AGGR_LOSS_ACT,
          BINDER_CONDITION_DEG: c.payload.doc.data().BINDER_CONDITION_DEG,
          BINDER_CONDITION_EXT: c.payload.doc.data().BINDER_CONDITION_EXT,
          BLEEDING_DEG: c.payload.doc.data().BLEEDING_DEG,
          BLEEDING_EXT: c.payload.doc.data().BLEEDING_EXT,
          SURF_DEFORM_DEG: c.payload.doc.data().SURF_DEFORM_DEG,
          SUR_DEFORM_EXT: c.payload.doc.data().SUR_DEFORM_EXT,
          BLOCK_CRACK_DEG: c.payload.doc.data().BLOCK_CRACK_DEG,
          BLOCK_CRACK_EXT: c.payload.doc.data().BLOCK_CRACK_EXT,
          LONG_CRACK_DEG: c.payload.doc.data().LONG_CRACK_DEG,
          LONG_CRACK_EXT: c.payload.doc.data().LONG_CRACK_EXT,
          LONG_CRACK_TYPE: c.payload.doc.data().LONG_CRACK_TYPE,
          TRANSVERSE_CRACK_DEG: c.payload.doc.data().TRANSVERSE_CRACK_DEG,
          TRANSVERSE_CRACK_EXT: c.payload.doc.data().TRANSVERSE_CRACK_EXT,
          CROCODILE_CRACK_DEG: c.payload.doc.data().CROCODILE_CRACK_DEG,
          CROCODILE_CRACK_EXT: c.payload.doc.data().CROCODILE_CRACK_EXT,
          PUMPING_DEG: c.payload.doc.data().PUMPING_DEG,
          PUMPING_EXT: c.payload.doc.data().PUMPING_EXT,
          RUTTING_DEG: c.payload.doc.data().RUTTING_DEG,
          RUTTING_EXT: c.payload.doc.data().RUTTING_EXT,
          UNDULATION_DEG: c.payload.doc.data().UNDULATION_DEG,
          UNDULATION_EXT: c.payload.doc.data().UNDULATION_EXT,
          PATCHING_DEG: c.payload.doc.data().PATCHING_DEG,
          PATCHING_EXT: c.payload.doc.data().PATCHING_EXT,
          POTHOLE_DEG: c.payload.doc.data().POTHOLE_DEG,
          POTHOLE_EXT: c.payload.doc.data().POTHOLE_EXT,
          FAILURES_DEG: c.payload.doc.data().FAILURES_DEG,
          FAILURES_EXT: c.payload.doc.data().FAILURES_EXT,
          RIDING_QUAL_DEG: c.payload.doc.data().RIDING_QUAL_DEG,
          RQUAL_PROB_HOLE: c.payload.doc.data().RQUAL_PROB_HOLE,
          RQUAL_PROP_PATCH: c.payload.doc.data().RQUAL_PROP_PATCH,
          RQUAL_PROB_UNDUL: c.payload.doc.data().RQUAL_PROB_UNDUL,
          RQUAL_PROB_UNEVEN: c.payload.doc.data().RQUAL_PROB_UNEVEN,
          RQUAL_PROB_CORR: c.payload.doc.data().RQUAL_PROB_CORR,
          SKID_RESISTANCE_DEG: c.payload.doc.data().SKID_RESISTANCE_DEG,
          SKID_PROB_BLEED: c.payload.doc.data().SKID_PROB_BLEED,
          SKID_PROB_POLISH: c.payload.doc.data().SKID_PROB_POLISH,
          DRAINAGE_SURF: c.payload.doc.data().DRAINAGE_SURF,
          DRAIN_PROB_RUT: c.payload.doc.data().DRAIN_PROB_RUT,
          DRAIN_PRB_SHOULD: c.payload.doc.data().DRAIN_PRB_SHOULD,
          DRAIN_PROB_ALIGN: c.payload.doc.data().DRAIN_PROB_ALIGN,
          DRAIN_PROB_SIDE: c.payload.doc.data().DRAIN_PROB_SIDE,
          UNPAVED_SHOULDER: c.payload.doc.data().UNPAVED_SHOULDER,
          UNPAVED_PROB_ERODED: c.payload.doc.data().UNPAVED_PROB_ERODED,
          UNPAVED_PROB_OGROWN: c.payload.doc.data().UNPAVED_PROB_OGROWN,
          UNPAVED_PROB_INCLINED: c.payload.doc.data().UNPAVED_PROB_INCLINED,
          UNPAVED_PROB_2HIGH: c.payload.doc.data().UNPAVED_PROB_2HIGH,
          UNPAVED_PROB_2NARROW: c.payload.doc.data().UNPAVED_PROB_2NARROW,
          EDGE_BREAK_DEG: c.payload.doc.data().EDGE_BREAK_DEG,
          EDGE_BREAK_EXT: c.payload.doc.data().EDGE_BREAK_EXT,
          EDGE_CRACKS_DEG: c.payload.doc.data().EDGE_CRACKS_DEG,
          EDGE_CRACKS_EXT: c.payload.doc.data().EDGE_CRACKS_EXT,
          EDGE_DROPOFF_DEG: c.payload.doc.data().EDGE_DROPOFF_DEG,
          EDGE_DROPOFF_EXT: c.payload.doc.data().EDGE_DROPOFF_EXT,
          OPC: c.payload.doc.data().OPC,
          OTHER_PROB_CROSSINGS: c.payload.doc.data().OTHER_PROB_CROSSINGS,
          OTHER_PROB_TREES: c.payload.doc.data().OTHER_PROB_TREES,
          OTHER_PROB_MOLES: c.payload.doc.data().OTHER_PROB_MOLES,
          OTHER_PROB_DAMAGE: c.payload.doc.data().OTHER_PROB_DAMAGE,
          ENGINEER_COMMENTS: c.payload.doc.data().ENGINEER_COMMENTS,
          ENGINEER_NAME: c.payload.doc.data().ENGINEER_NAME,
          ENGINEER_USERNAME: c.payload.doc.data().ENGINEER_USERNAME,
          surfacetype: c.payload.doc.data().surfacetype,
          surface: c.payload.doc.data().surface,
          Texture: c.payload.doc.data().Texture,
          voids: c.payload.doc.data().voids,
          SURFACE_DEFORM_DEG: c.payload.doc.data().SURFACE_DEFORM_DEG,
          SURFACE_DEFORM_EXT: c.payload.doc.data().SURFACE_DEFORM_EXT,
          ROAD_TYPE: c.payload.doc.data().ROAD_TYPE,
          MOISTURE: c.payload.doc.data().MOISTURE,
          GRAVEL_QUALITY: c.payload.doc.data().GRAVEL_QUALITY,
          GQUAL_OVERSIZE: c.payload.doc.data().GQUAL_OVERSIZE,
          GQUAL_CLAY: c.payload.doc.data().GQUAL_CLAY,
          GQUAL_LOOSE: c.payload.doc.data().GQUAL_LOOSE,
          MAX_SIZE: c.payload.doc.data().MAX_SIZE,
          GRADING: c.payload.doc.data().GRADING,
          PLASTICITY: c.payload.doc.data().PLASTICITY,
          GRAVEL_QUANTITY: c.payload.doc.data().GRAVEL_QUANTITY,
          EXPOSED_SUBGRADE: c.payload.doc.data().EXPOSED_SUBGRADE,
          SUBGRADE_QUALITY: c.payload.doc.data().SUBGRADE_QUALITY,
          CORRUGATION_DEG: c.payload.doc.data().CORRUGATION_DEG,
          CORRUGATION_EXT: c.payload.doc.data().CORRUGATION_EXT,
          LOOSE_MATERIAL_DEG: c.payload.doc.data().LOOSE_MATERIAL_DEG,
          LOOSE_MATERIAL_EXT: c.payload.doc.data().LOOSE_MATERIAL_EXT,
          STONINESS_FIX_DEG: c.payload.doc.data().STONINESS_FIX_DEG,
          STONINESS_FIX_EXT: c.payload.doc.data().STONINESS_FIX_EXT,
          STONINESS_LOOSE_DEG: c.payload.doc.data().STONINESS_LOOSE_DEG,
          STONINESS_LOOSE_EXT: c.payload.doc.data().STONINESS_LOOSE_EXT,
          EROSION_LONG_DEG: c.payload.doc.data().EROSION_LONG_DEG,
          EROSION_LONG_EXT: c.payload.doc.data().EROSION_LONG_EXT,
          EROSION_TRANS_DEG: c.payload.doc.data().EROSION_TRANS_DEG,
          EROSION_TRANS_EXT: c.payload.doc.data().EROSION_TRANS_EXT,
          RIDING_QUAL_EXT: c.payload.doc.data().RIDING_QUAL_EXT,
          RQUAL_PROB_DFORM: c.payload.doc.data().RQUAL_PROB_DFORM,
          RQUAL_PROB_STONINESS: c.payload.doc.data().RQUAL_PROB_STONINESS,
          RQUAL_PROB_ROCKS: c.payload.doc.data().RQUAL_PROB_ROCKS,
          RQUAL_PROB_RUTS: c.payload.doc.data().RQUAL_PROB_RUTS,
          RQUAL_PROB_EROSION: c.payload.doc.data().RQUAL_PROB_EROSION,
          TRAFFICABILITY_DEG: c.payload.doc.data().TRAFFICABILITY_DEG,
          TRAFFIC_PROB_STEEP: c.payload.doc.data().TRAFFIC_PROB_STEEP,
          TRAFFIC_PROB_ROCKS: c.payload.doc.data().TRAFFIC_PROB_ROCKS,
          TRAFFIC_PROB_VEGETATION: c.payload.doc.data().TRAFFIC_PROB_VEGETATION,
          TRAFFIC_PROB_DRAINAGE: c.payload.doc.data().TRAFFIC_PROB_DRAINAGE,
          SAFETY_DEG: c.payload.doc.data().SAFETY_DEG,
          SAFETY_PROB_DUST: c.payload.doc.data().SAFETY_PROB_DUST,
          SAFETY_PROB_SLIP: c.payload.doc.data().SAFETY_PROB_SLIP,
          SAFETY_PROB_SKID: c.payload.doc.data().SAFETY_PROB_SKID,
          SAFETY_PROB_DRAINAGE: c.payload.doc.data().SAFETY_PROB_DRAINAGE,
          TRANSVERSE_PROFILE: c.payload.doc.data().TRANSVERSE_PROFILE,
          PROFILE_PROB_WINDROWS: c.payload.doc.data().PROFILE_PROB_WINDROWS,
          PROFILE_PROB_RUTTING: c.payload.doc.data().PROFILE_PROB_RUTTING,
          PROFILE_PROB_SHAPE: c.payload.doc.data().PROFILE_PROB_SHAPE,
          PROFILE_PROB_LEVEL: c.payload.doc.data().PROFILE_PROB_LEVEL,
          DRAINAGE_SIDE: c.payload.doc.data().DRAINAGE_SIDE,
          DRAIN_PROB_CULVERTS: c.payload.doc.data().DRAIN_PROB_CULVERTS,
          DRAIN_PROB_MITRE: c.payload.doc.data().DRAIN_PROB_MITRE,
          DRAIN_PROB_LEVEL: c.payload.doc.data().DRAIN_PROB_LEVEL,
          TERR_CLASS: c.payload.doc.data().TERR_CLASS,
          GRADIENT: c.payload.doc.data().GRADIENT,
          BLOCK_TYPE: c.payload.doc.data().BLOCK_TYPE,
          ASSESSED: c.payload.doc.data().ASSESSED,
          BLOCK_LAY: c.payload.doc.data().BLOCK_LAY,
          BLOCK_THICK: c.payload.doc.data().BLOCK_THICK,
          CHAMFERS: c.payload.doc.data().CHAMFERS,
          SPALLED_CRACK_DEG: c.payload.doc.data().SPALLED_CRACK_DEG,
          SPALLED_CRACK_EXT: c.payload.doc.data().SPALLED_CRACK_EXT,
          SURF_INTEGRITY_DEG: c.payload.doc.data().SURF_INTEGRITY_DEG,
          SURF_INTEGRITY_EXT: c.payload.doc.data().SURF_INTEGRITY_EXT,
          JOINT_LOSS_DEG: c.payload.doc.data().JOINT_LOSS_DEG,
          JOINT_LOSS_EXT: c.payload.doc.data().JOINT_LOSS_EXT,
          EDGE_DAMAGE_DEG: c.payload.doc.data().EDGE_DAMAGE_DEG,
          EDGE_DAMAGE_EXT: c.payload.doc.data().EDGE_DAMAGE_EXT,
          POT_PATCH_DEG: c.payload.doc.data().POT_PATCH_DEG,
          POT_PATCH_EXT: c.payload.doc.data().POT_PATCH_EXT,
          DRAINAGE_SURG: c.payload.doc.data().DRAINAGE_SURG,
          DRAIN_PROB_PROFILE: c.payload.doc.data().DRAIN_PROB_PROFILE,
          DRAIN_PROB_SHOULD: c.payload.doc.data().DRAIN_PROB_SHOULD,
          DRAIN_PROB_FAIL: c.payload.doc.data().DRAIN_PROB_FAIL,
          COMMENTS: c.payload.doc.data().COMMENTS,
          NAME: c.payload.doc.data().NAME,
          USERNAME: c.payload.doc.data().USERNAME,
          MODIFIEDONDATETIME: c.payload.doc.data().MODIFIEDONDATETIME,
        }))
      )
    );
    // .subscribe((data) => {
    //   this.Segments.next(data);
    //   //console.log("OUTER:", data[0]);
    //   //Data.push(data);
    // });

    //return Data;
  }

  async get(roadid) {
    let q1 = this.db
      .collection(this.dbPath, (ref) => ref.where("road_id", "==", roadid))
      .valueChanges();

    return combineLatest(q1).pipe(map(([q1]) => q1));
  }

  async create(segment: AddSegment): Promise<any> {
    const id = this.db.createId();
    return this.Ref.doc(id).set(segment);
  }

  async update(id: string, data: any): Promise<void> {
    console.log(id);
    return this.Ref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.Ref.doc(id).delete();
  }
}
