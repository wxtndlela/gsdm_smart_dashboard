import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import * as moment from "moment";
import { AddSegment, SegmentEdit } from "../../../providers";
import { Segments } from "../../../services/db";
import { GlobalSettings } from "../../../services/global.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-inspection",
  templateUrl: "./inspection.component.html",
  styleUrls: ["./inspection.component.scss"],
})
export class InspectionComponent implements OnInit {
  @Input("title") title;
  @Input("segrec_id") segrec_id;
  @Input("roadid") roadid;
  @Input("mid") mid;
  @Input("mtype") mtype;
  @Input("murl") murl;
  @Input("offline") offline;
  @Input("segment") segment;
  final_url: any;
  vidSrc: SafeResourceUrl;
  showSecondaryIframe = true;
  inspectiontype: any = "";
  surfacetype: any;
  SegmentArray: any;
  _MasterData: any[] = [];
  public User: any;
  public host = "192.168.1.100"
  // roadid: any = "MPGSDI00363011";
  // inspectiontype: any = "";
  // surfacetype: any;
  MEASURE_DATE: any;
  SURFACE: any = "";
  TEXTURE: any = "";
  VOIDS: any = "";
  SURFACE_FAILURE_DEG: any = "";
  SURFACE_FAILURE_EXT: any = "";
  SURFACE_PATCHING_DEG: any = "";
  SURFACE_PATCHING_EXT: any = "";
  SURFACE_CRACK_DEG: any = "";
  SURFACE_CRACK_EXT: any = "";
  AGGR_LOSS_DEG: any = "";
  AGGR_LOSS_EXT: any = "";
  AGGR_LOSS_ACT: any = "";
  BINDER_CONDITION_DEG: any = "";
  BINDER_CONDITION_EXT: any = "";
  BLEEDING_DEG: any = "";
  BLEEDING_EXT: any = "";
  SURF_DEFORM_DEG: any = "";
  SUR_DEFORM_EXT: any = "";
  BLOCK_CRACK_DEG: any = "";
  BLOCK_CRACK_EXT: any = "";
  LONG_CRACK_DEG: any = "";
  LONG_CRACK_EXT: any = "";
  LONG_CRACK_TYPE: any = "";
  TRANSVERSE_CRACK_DEG: any = "";
  TRANSVERSE_CRACK_EXT: any = "";
  CROCODILE_CRACK_DEG: any = "";
  CROCODILE_CRACK_EXT: any = "";
  PUMPING_DEG: any = "";
  PUMPING_EXT: any = "";
  RUTTING_DEG: any = "";
  RUTTING_EXT: any = "";
  UNDULATION_DEG: any = "";
  UNDULATION_EXT: any = "";
  PATCHING_DEG: any = "";
  PATCHING_EXT: any = "";
  POTHOLE_DEG: any = "";
  POTHOLE_EXT: any = "";
  FAILURES_DEG: any = "";
  FAILURES_EXT: any = "";
  RIDING_QUAL_DEG: any = "";
  RQUAL_PROB_HOLE: any = "";
  RQUAL_PROP_PATCH: any = "";
  RQUAL_PROB_UNDUL: any = "";
  RQUAL_PROB_UNEVEN: any = "";
  RQUAL_PROB_CORR: any = "";
  SKID_RESISTANCE_DEG: any = "";
  SKID_PROB_BLEED: any = "";
  SKID_PROB_POLISH: any = "";
  DRAINAGE_SURF: any = "";
  DRAIN_PROB_RUT: any = "";
  DRAIN_PRB_SHOULD: any = "";
  DRAIN_PROB_ALIGN: any = "";
  DRAIN_PROB_SIDE: any = "";
  UNPAVED_SHOULDER: any = "";
  UNPAVED_PROB_ERODED: any = "";
  UNPAVED_PROB_OGROWN: any = "";
  UNPAVED_PROB_INCLINED: any = "";
  UNPAVED_PROB_2HIGH: any = "";
  UNPAVED_PROB_2NARROW: any = "";
  EDGE_BREAK_DEG: any = "";
  EDGE_BREAK_EXT: any = "";
  EDGE_CRACKS_DEG: any = "";
  EDGE_CRACKS_EXT: any = "";
  EDGE_DROPOFF_DEG: any = "";
  EDGE_DROPOFF_EXT: any = "";
  OPC: any = "";
  OTHER_PROB_CROSSINGS: any = "";
  OTHER_PROB_TREES: any = "";
  OTHER_PROB_MOLES: any = "";
  OTHER_PROB_DAMAGE: any = "";
  ENGINEER_COMMENTS: any = "";
  ENGINEER_NAME: any = "";
  ENGINEER_USERNAME: any = "";
  SURFACE_DEFORM_DEG: any = "";
  SURFACE_DEFORM_EXT: any = "";
  ROAD_TYPE: any = "";
  MOISTURE: any = "";
  GRAVEL_QUALITY: any = "";
  GQUAL_OVERSIZE: any = "";
  GQUAL_CLAY: any = "";
  GQUAL_LOOSE: any = "";
  MAX_SIZE: any = "";
  GRADING: any = "";
  PLASTICITY: any = "";
  GRAVEL_QUANTITY: any = "";
  EXPOSED_SUBGRADE: any = "";
  SUBGRADE_QUALITY: any = "";
  CORRUGATION_DEG: any = "";
  CORRUGATION_EXT: any = "";
  LOOSE_MATERIAL_DEG: any = "";
  LOOSE_MATERIAL_EXT: any = "";
  STONINESS_FIX_DEG: any = "";
  STONINESS_FIX_EXT: any = "";
  STONINESS_LOOSE_DEG: any = "";
  STONINESS_LOOSE_EXT: any = "";
  EROSION_LONG_DEG: any = "";
  EROSION_LONG_EXT: any = "";
  EROSION_TRANS_DEG: any = "";
  EROSION_TRANS_EXT: any = "";
  RIDING_QUAL_EXT: any = "";
  RQUAL_PROB_DFORM: any = "";
  RQUAL_PROB_STONINESS: any = "";
  RQUAL_PROB_ROCKS: any = "";
  RQUAL_PROB_RUTS: any = "";
  RQUAL_PROB_EROSION: any = "";
  TRAFFICABILITY_DEG: any = "";
  TRAFFIC_PROB_STEEP: any = "";
  TRAFFIC_PROB_ROCKS: any = "";
  TRAFFIC_PROB_VEGETATION: any = "";
  TRAFFIC_PROB_DRAINAGE: any = "";
  SAFETY_DEG: any = "";
  SAFETY_PROB_DUST: any = "";
  SAFETY_PROB_SLIP: any = "";
  SAFETY_PROB_SKID: any = "";
  SAFETY_PROB_DRAINAGE: any = "";
  TRANSVERSE_PROFILE: any = "";
  PROFILE_PROB_WINDROWS: any = "";
  PROFILE_PROB_RUTTING: any = "";
  PROFILE_PROB_SHAPE: any = "";
  PROFILE_PROB_LEVEL: any = "";
  DRAINAGE_SIDE: any = "";
  DRAIN_PROB_CULVERTS: any = "";
  DRAIN_PROB_MITRE: any = "";
  DRAIN_PROB_LEVEL: any = "";
  TERR_CLASS: any = "";
  GRADIENT: any = "";
  BLOCK_TYPE: any = "";
  BLOCK_LAY: any = "";
  BLOCK_THICK: any = "";
  CHAMFERS: any = "";
  SPALLED_CRACK_DEG: any = "";
  SPALLED_CRACK_EXT: any = "";
  SURF_INTEGRITY_DEG: any = "";
  SURF_INTEGRITY_EXT: any = "";
  JOINT_LOSS_DEG: any = "";
  JOINT_LOSS_EXT: any = "";
  EDGE_DAMAGE_DEG: any = "";
  EDGE_DAMAGE_EXT: any = "";
  POT_PATCH_DEG: any = "";
  POT_PATCH_EXT: any = "";
  DRAINAGE_SURG: any = "";
  DRAIN_PROB_PROFILE: any = "";
  DRAIN_PROB_SHOULD: any = "";
  DRAIN_PROB_FAIL: any = "";
  COMMENTS: any = "";
  NAME: any = "";
  USERNAME: any = "";
  MODIFIEDONDATETIME: any = "";

  CNT_SURFACE: any = 0;
  CNT_TEXTURE: any = 0;
  CNT_VOIDS: any = 0;
  CNT_SURFACE_FAILURE_DEG: any = 0;
  CNT_SURFACE_FAILURE_EXT: any = 0;
  CNT_SURFACE_PATCHING_DEG: any = 0;
  CNT_SURFACE_PATCHING_EXT: any = 0;
  CNT_SURFACE_CRACK_DEG: any = 0;
  CNT_SURFACE_CRACK_EXT: any = 0;
  CNT_AGGR_LOSS_DEG: any = 0;
  CNT_AGGR_LOSS_EXT: any = 0;
  CNT_AGGR_LOSS_ACT: any = 0;
  CNT_BINDER_CONDITION_DEG: any = 0;
  CNT_BINDER_CONDITION_EXT: any = 0;
  CNT_BLEEDING_DEG: any = 0;
  CNT_BLEEDING_EXT: any = 0;
  CNT_SURF_DEFORM_DEG: any = 0;
  CNT_SUR_DEFORM_EXT: any = 0;
  CNT_BLOCK_CRACK_DEG: any = 0;
  CNT_BLOCK_CRACK_EXT: any = 0;
  CNT_LONG_CRACK_DEG: any = 0;
  CNT_LONG_CRACK_EXT: any = 0;
  CNT_LONG_CRACK_TYPE: any = 0;
  CNT_TRANSVERSE_CRACK_DEG: any = 0;
  CNT_TRANSVERSE_CRACK_EXT: any = 0;
  CNT_CROCODILE_CRACK_DEG: any = 0;
  CNT_CROCODILE_CRACK_EXT: any = 0;
  CNT_PUMPING_DEG: any = 0;
  CNT_PUMPING_EXT: any = 0;
  CNT_RUTTING_DEG: any = 0;
  CNT_RUTTING_EXT: any = 0;
  CNT_UNDULATION_DEG: any = 0;
  CNT_UNDULATION_EXT: any = 0;
  CNT_PATCHING_DEG: any = 0;
  CNT_PATCHING_EXT: any = 0;
  CNT_POTHOLE_DEG: any = 0;
  CNT_POTHOLE_EXT: any = 0;
  CNT_FAILURES_DEG: any = 0;
  CNT_FAILURES_EXT: any = 0;
  CNT_RIDING_QUAL_DEG: any = 0;
  CNT_RQUAL_PROB_HOLE: any = 0;
  CNT_RQUAL_PROP_PATCH: any = 0;
  CNT_RQUAL_PROB_UNDUL: any = 0;
  CNT_RQUAL_PROB_UNEVEN: any = 0;
  CNT_RQUAL_PROB_CORR: any = 0;
  CNT_SKID_RESISTANCE_DEG: any = 0;
  CNT_SKID_PROB_BLEED: any = 0;
  CNT_SKID_PROB_POLISH: any = 0;
  CNT_DRAINAGE_SURF: any = 0;
  CNT_DRAIN_PROB_RUT: any = 0;
  CNT_DRAIN_PRB_SHOULD: any = 0;
  CNT_DRAIN_PROB_ALIGN: any = 0;
  CNT_DRAIN_PROB_SIDE: any = 0;
  CNT_UNPAVED_SHOULDER: any = 0;
  CNT_UNPAVED_PROB_ERODED: any = 0;
  CNT_UNPAVED_PROB_OGROWN: any = 0;
  CNT_UNPAVED_PROB_INCLINED: any = 0;
  CNT_UNPAVED_PROB_2HIGH: any = 0;
  CNT_UNPAVED_PROB_2NARROW: any = 0;
  CNT_EDGE_BREAK_DEG: any = 0;
  CNT_EDGE_BREAK_EXT: any = 0;
  CNT_EDGE_CRACKS_DEG: any = 0;
  CNT_EDGE_CRACKS_EXT: any = 0;
  CNT_EDGE_DROPOFF_DEG: any = 0;
  CNT_EDGE_DROPOFF_EXT: any = 0;
  CNT_OPC: any = 0;
  CNT_OTHER_PROB_CROSSINGS: any = 0;
  CNT_OTHER_PROB_TREES: any = 0;
  CNT_OTHER_PROB_MOLES: any = 0;
  CNT_OTHER_PROB_DAMAGE: any = 0;
  CNT_ENGINEER_COMMENTS: any = 0;
  CNT_ENGINEER_NAME: any = 0;
  CNT_ENGINEER_USERNAME: any = 0;
  CNT_surface: any = 0;
  CNT_Texture: any = 0;
  CNT_voids: any = 0;
  CNT_SURFACE_DEFORM_DEG: any = 0;
  CNT_SURFACE_DEFORM_EXT: any = 0;
  CNT_ROAD_TYPE: any = 0;
  CNT_MOISTURE: any = 0;
  CNT_GRAVEL_QUALITY: any = 0;
  CNT_GQUAL_OVERSIZE: any = 0;
  CNT_GQUAL_CLAY: any = 0;
  CNT_GQUAL_LOOSE: any = 0;
  CNT_MAX_SIZE: any = 0;
  CNT_GRADING: any = 0;
  CNT_PLASTICITY: any = 0;
  CNT_GRAVEL_QUANTITY: any = 0;
  CNT_EXPOSED_SUBGRADE: any = 0;
  CNT_SUBGRADE_QUALITY: any = 0;
  CNT_CORRUGATION_DEG: any = 0;
  CNT_CORRUGATION_EXT: any = 0;
  CNT_LOOSE_MATERIAL_DEG: any = 0;
  CNT_LOOSE_MATERIAL_EXT: any = 0;
  CNT_STONINESS_FIX_DEG: any = 0;
  CNT_STONINESS_FIX_EXT: any = 0;
  CNT_STONINESS_LOOSE_DEG: any = 0;
  CNT_STONINESS_LOOSE_EXT: any = 0;
  CNT_EROSION_LONG_DEG: any = 0;
  CNT_EROSION_LONG_EXT: any = 0;
  CNT_EROSION_TRANS_DEG: any = 0;
  CNT_EROSION_TRANS_EXT: any = 0;
  CNT_RIDING_QUAL_EXT: any = 0;
  CNT_RQUAL_PROB_DFORM: any = 0;
  CNT_RQUAL_PROB_STONINESS: any = 0;
  CNT_RQUAL_PROB_ROCKS: any = 0;
  CNT_RQUAL_PROB_RUTS: any = 0;
  CNT_RQUAL_PROB_EROSION: any = 0;
  CNT_TRAFFICABILITY_DEG: any = 0;
  CNT_TRAFFIC_PROB_STEEP: any = 0;
  CNT_TRAFFIC_PROB_ROCKS: any = 0;
  CNT_TRAFFIC_PROB_VEGETATION: any = 0;
  CNT_TRAFFIC_PROB_DRAINAGE: any = 0;
  CNT_SAFETY_DEG: any = 0;
  CNT_SAFETY_PROB_DUST: any = 0;
  CNT_SAFETY_PROB_SLIP: any = 0;
  CNT_SAFETY_PROB_SKID: any = 0;
  CNT_SAFETY_PROB_DRAINAGE: any = 0;
  CNT_TRANSVERSE_PROFILE: any = 0;
  CNT_PROFILE_PROB_WINDROWS: any = 0;
  CNT_PROFILE_PROB_RUTTING: any = 0;
  CNT_PROFILE_PROB_SHAPE: any = 0;
  CNT_PROFILE_PROB_LEVEL: any = 0;
  CNT_DRAINAGE_SIDE: any = 0;
  CNT_DRAIN_PROB_CULVERTS: any = 0;
  CNT_DRAIN_PROB_MITRE: any = 0;
  CNT_DRAIN_PROB_LEVEL: any = 0;
  CNT_TERR_CLASS: any = 0;
  CNT_GRADIENT: any = 0;
  CNT_BLOCK_TYPE: any = 0;
  CNT_BLOCK_LAY: any = 0;
  CNT_BLOCK_THICK: any = 0;
  CNT_CHAMFERS: any = 0;
  CNT_SPALLED_CRACK_DEG: any = 0;
  CNT_SPALLED_CRACK_EXT: any = 0;
  CNT_SURF_INTEGRITY_DEG: any = 0;
  CNT_SURF_INTEGRITY_EXT: any = 0;
  CNT_JOINT_LOSS_DEG: any = 0;
  CNT_JOINT_LOSS_EXT: any = 0;
  CNT_EDGE_DAMAGE_DEG: any = 0;
  CNT_EDGE_DAMAGE_EXT: any = 0;
  CNT_POT_PATCH_DEG: any = 0;
  CNT_POT_PATCH_EXT: any = 0;
  CNT_DRAINAGE_SURG: any = 0;
  CNT_DRAIN_PROB_PROFILE: any = 0;
  CNT_DRAIN_PROB_SHOULD: any = 0;
  CNT_DRAIN_PROB_FAIL: any = 0;

  constructor(
    private modalController: ModalController,
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    private global: GlobalSettings,
    public Offline: Storage,
    private db: Segments
  ) {}

  async Reset() {
    this.SURFACE = "";
    this.TEXTURE = "";
    this.VOIDS = "";
    this.SURFACE_FAILURE_DEG = "";
    this.SURFACE_FAILURE_EXT = "";
    this.SURFACE_PATCHING_DEG = "";
    this.SURFACE_PATCHING_EXT = "";
    this.SURFACE_CRACK_DEG = "";
    this.SURFACE_CRACK_EXT = "";
    this.AGGR_LOSS_DEG = "";
    this.AGGR_LOSS_EXT = "";
    this.AGGR_LOSS_ACT = "";

    this.BINDER_CONDITION_DEG = "";
    this.BINDER_CONDITION_EXT = "";
    this.BLEEDING_DEG = "";
    this.BLEEDING_EXT = "";
    this.SURF_DEFORM_DEG = "";
    this.SUR_DEFORM_EXT = "";
    this.BLOCK_CRACK_DEG = "";
    this.BLOCK_CRACK_EXT = "";
    this.LONG_CRACK_DEG = "";
    this.LONG_CRACK_EXT = "";
    this.LONG_CRACK_TYPE = "";
    this.TRANSVERSE_CRACK_DEG = "";
    this.TRANSVERSE_CRACK_EXT = "";
    this.CROCODILE_CRACK_DEG = "";
    this.CROCODILE_CRACK_EXT = "";
    this.PUMPING_DEG = "";
    this.PUMPING_EXT = "";
    this.RUTTING_DEG = "";
    this.RUTTING_EXT = "";
    this.UNDULATION_DEG = "";
    this.UNDULATION_EXT = "";
    this.PATCHING_DEG = "";
    this.PATCHING_EXT = "";
    this.POTHOLE_DEG = "";
    this.POTHOLE_EXT = "";
    this.FAILURES_DEG = "";
    this.FAILURES_EXT = "";
    this.RIDING_QUAL_DEG = "";
    this.RQUAL_PROB_HOLE = "";
    this.RQUAL_PROP_PATCH = "";
    this.RQUAL_PROB_UNDUL = "";
    this.RQUAL_PROB_UNEVEN = "";
    this.RQUAL_PROB_CORR = "";
    this.SKID_RESISTANCE_DEG = "";
    this.SKID_PROB_BLEED = "";
    this.SKID_PROB_POLISH = "";
    this.DRAINAGE_SURF = "";
    this.DRAIN_PROB_RUT = "";
    this.DRAIN_PRB_SHOULD = "";
    this.DRAIN_PROB_ALIGN = "";
    this.DRAIN_PROB_SIDE = "";
    this.UNPAVED_SHOULDER = "";
    this.UNPAVED_PROB_ERODED = "";
    this.UNPAVED_PROB_OGROWN = "";
    this.UNPAVED_PROB_INCLINED = "";
    this.UNPAVED_PROB_2HIGH = "";
    this.UNPAVED_PROB_2NARROW = "";
    this.EDGE_BREAK_DEG = "";
    this.EDGE_BREAK_EXT = "";
    this.EDGE_CRACKS_DEG = "";
    this.EDGE_CRACKS_EXT = "";
    this.EDGE_DROPOFF_DEG = "";
    this.EDGE_DROPOFF_EXT = "";
    this.OPC = "";
    this.OTHER_PROB_CROSSINGS = "";
    this.OTHER_PROB_TREES = "";
    this.OTHER_PROB_MOLES = "";
    this.OTHER_PROB_DAMAGE = "";
    this.ENGINEER_COMMENTS = "";
    this.ENGINEER_NAME = "";
    this.ENGINEER_USERNAME = "";
    this.SURFACE_DEFORM_DEG = "";
    this.SURFACE_DEFORM_EXT = "";
    this.ROAD_TYPE = "";
    this.MOISTURE = "";
    this.GRAVEL_QUALITY = "";
    this.GQUAL_OVERSIZE = "";
    this.GQUAL_CLAY = "";
    this.GQUAL_LOOSE = "";
    this.MAX_SIZE = "";
    this.GRADING = "";
    this.PLASTICITY = "";
    this.GRAVEL_QUANTITY = "";
    this.EXPOSED_SUBGRADE = "";
    this.SUBGRADE_QUALITY = "";
    this.CORRUGATION_DEG = "";
    this.CORRUGATION_EXT = "";
    this.LOOSE_MATERIAL_DEG = "";
    this.LOOSE_MATERIAL_EXT = "";
    this.STONINESS_FIX_DEG = "";
    this.STONINESS_FIX_EXT = "";
    this.STONINESS_LOOSE_DEG = "";
    this.STONINESS_LOOSE_EXT = "";
    this.EROSION_LONG_DEG = "";
    this.EROSION_LONG_EXT = "";
    this.EROSION_TRANS_DEG = "";
    this.EROSION_TRANS_EXT = "";
    this.RIDING_QUAL_EXT = "";
    this.RQUAL_PROB_DFORM = "";
    this.RQUAL_PROB_STONINESS = "";
    this.RQUAL_PROB_ROCKS = "";
    this.RQUAL_PROB_RUTS = "";
    this.RQUAL_PROB_EROSION = "";
    this.TRAFFICABILITY_DEG = "";
    this.TRAFFIC_PROB_STEEP = "";
    this.TRAFFIC_PROB_ROCKS = "";
    this.TRAFFIC_PROB_VEGETATION = "";
    this.TRAFFIC_PROB_DRAINAGE = "";
    this.SAFETY_DEG = "";
    this.SAFETY_PROB_DUST = "";
    this.SAFETY_PROB_SLIP = "";
    this.SAFETY_PROB_SKID = "";
    this.SAFETY_PROB_DRAINAGE = "";
    this.TRANSVERSE_PROFILE = "";
    this.PROFILE_PROB_WINDROWS = "";
    this.PROFILE_PROB_RUTTING = "";
    this.PROFILE_PROB_SHAPE = "";
    this.PROFILE_PROB_LEVEL = "";
    this.DRAINAGE_SIDE = "";
    this.DRAIN_PROB_CULVERTS = "";
    this.DRAIN_PROB_MITRE = "";
    this.DRAIN_PROB_LEVEL = "";
    this.TERR_CLASS = "";
    this.GRADIENT = "";
    this.BLOCK_TYPE = "";
    this.BLOCK_LAY = "";
    this.BLOCK_THICK = "";
    this.CHAMFERS = "";
    this.SPALLED_CRACK_DEG = "";
    this.SPALLED_CRACK_EXT = "";
    this.SURF_INTEGRITY_DEG = "";
    this.SURF_INTEGRITY_EXT = "";
    this.JOINT_LOSS_DEG = "";
    this.JOINT_LOSS_EXT = "";
    this.EDGE_DAMAGE_DEG = "";
    this.EDGE_DAMAGE_EXT = "";
    this.POT_PATCH_DEG = "";
    this.POT_PATCH_EXT = "";
    this.DRAINAGE_SURG = "";
    this.DRAIN_PROB_PROFILE = "";
    this.DRAIN_PROB_SHOULD = "";
    this.DRAIN_PROB_FAIL = "";
    this.COMMENTS = "";
    this.NAME = "";
    this.USERNAME = "";
  }

  ngOnInit(): void {
    //console.log("RES:", this.mtype);

    this.global.get_User().subscribe((val) => {
      this.User = val;
      console.log('User', this.User)
    });

    //Retrieve Offline MasterData
    this.Offline.get("MasterData").then((_data) => {
      this._MasterData = []; // Change the type declaration to an array

      if (_data !== null) {
        this._MasterData = _data;
      }

      console.log("Master Data:", this._MasterData);
    });
    // this.final_url =
    //   "https://gsdm-virtual-inspection-page.onrender.com/?segmentmedia=" +
    //   this.mid;
    this.final_url =
      "https://"+this.host+":3000/?segmentmedia=" +
      this.mid +
      "&offline=" +
      this.offline;
    console.log("URL:",this.final_url)
    this.vidSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.final_url);

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const datetimeStamp = `${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
    console.log(datetimeStamp);
    this.MEASURE_DATE = datetimeStamp;

    //Populate
    this.SURFACE = this.segment.SURFACE;
    this.TEXTURE = this.segment.TEXTURE;
    this.VOIDS = this.segment.VOIDS;
    this.SURFACE_FAILURE_DEG = this.segment.SURFACE_FAILURE_DEG;
    this.SURFACE_FAILURE_EXT = this.segment.SURFACE_FAILURE_EXT;
    this.SURFACE_PATCHING_DEG = this.segment.SURFACE_PATCHING_DEG;
    this.SURFACE_PATCHING_EXT = this.segment.SURFACE_PATCHING_EXT;
    this.SURFACE_CRACK_DEG = this.segment.SURFACE_CRACK_DEG;
    this.SURFACE_CRACK_EXT = this.segment.SURFACE_CRACK_EXT;
    this.AGGR_LOSS_DEG = this.segment.AGGR_LOSS_DEG;
    this.AGGR_LOSS_EXT = this.segment.AGGR_LOSS_EXT;
    this.AGGR_LOSS_ACT = this.segment.AGGR_LOSS_ACT;
    this.surfacetype = this.segment.surfacetype;
    this.inspectiontype = this.segment.surfacetype;
    this.BINDER_CONDITION_DEG = this.segment.BINDER_CONDITION_DEG;
    this.BINDER_CONDITION_EXT = this.segment.BINDER_CONDITION_EXT;
    this.BLEEDING_DEG = this.segment.BLEEDING_DEG;
    this.BLEEDING_EXT = this.segment.BLEEDING_EXT;
    this.SURF_DEFORM_DEG = this.segment.SURF_DEFORM_DEG;
    this.SUR_DEFORM_EXT = this.segment.SUR_DEFORM_EXT;
    this.BLOCK_CRACK_DEG = this.segment.BLOCK_CRACK_DEG;
    this.BLOCK_CRACK_EXT = this.segment.BLOCK_CRACK_EXT;
    this.LONG_CRACK_DEG = this.segment.LONG_CRACK_DEG;
    this.LONG_CRACK_EXT = this.segment.LONG_CRACK_EXT;
    this.LONG_CRACK_TYPE = this.segment.LONG_CRACK_TYPE;
    this.TRANSVERSE_CRACK_DEG = this.segment.TRANSVERSE_CRACK_DEG;
    this.TRANSVERSE_CRACK_EXT = this.segment.TRANSVERSE_CRACK_EXT;
    this.CROCODILE_CRACK_DEG = this.segment.CROCODILE_CRACK_DEG;
    this.CROCODILE_CRACK_EXT = this.segment.CROCODILE_CRACK_EXT;
    this.PUMPING_DEG = this.segment.PUMPING_DEG;
    this.PUMPING_EXT = this.segment.PUMPING_EXT;
    this.RUTTING_DEG = this.segment.RUTTING_DEG;
    this.RUTTING_EXT = this.segment.RUTTING_EXT;
    this.UNDULATION_DEG = this.segment.UNDULATION_DEG;
    this.UNDULATION_EXT = this.segment.UNDULATION_EXT;
    this.PATCHING_DEG = this.segment.PATCHING_DEG;
    this.PATCHING_EXT = this.segment.PATCHING_EXT;
    this.POTHOLE_DEG = this.segment.POTHOLE_DEG;
    this.POTHOLE_EXT = this.segment.POTHOLE_EXT;
    this.FAILURES_DEG = this.segment.FAILURES_DEG;
    this.FAILURES_EXT = this.segment.FAILURES_EXT;
    this.RIDING_QUAL_DEG = this.segment.RIDING_QUAL_DEG;
    this.RQUAL_PROB_HOLE = this.segment.RQUAL_PROB_HOLE;
    this.RQUAL_PROP_PATCH = this.segment.RQUAL_PROP_PATCH;
    this.RQUAL_PROB_UNDUL = this.segment.RQUAL_PROB_UNDUL;
    this.RQUAL_PROB_UNEVEN = this.segment.RQUAL_PROB_UNEVEN;
    this.RQUAL_PROB_CORR = this.segment.RQUAL_PROB_CORR;
    this.SKID_RESISTANCE_DEG = this.segment.SKID_RESISTANCE_DEG;
    this.SKID_PROB_BLEED = this.segment.SKID_PROB_BLEED;
    this.SKID_PROB_POLISH = this.segment.SKID_PROB_POLISH;
    this.DRAINAGE_SURF = this.segment.DRAINAGE_SURF;
    this.DRAIN_PROB_RUT = this.segment.DRAIN_PROB_RUT;
    this.DRAIN_PRB_SHOULD = this.segment.DRAIN_PRB_SHOULD;
    this.DRAIN_PROB_ALIGN = this.segment.DRAIN_PROB_ALIGN;
    this.DRAIN_PROB_SIDE = this.segment.DRAIN_PROB_SIDE;
    this.UNPAVED_SHOULDER = this.segment.UNPAVED_SHOULDER;
    this.UNPAVED_PROB_ERODED = this.segment.UNPAVED_PROB_ERODED;
    this.UNPAVED_PROB_OGROWN = this.segment.UNPAVED_PROB_OGROWN;
    this.UNPAVED_PROB_INCLINED = this.segment.UNPAVED_PROB_INCLINED;
    this.UNPAVED_PROB_2HIGH = this.segment.UNPAVED_PROB_2HIGH;
    this.UNPAVED_PROB_2NARROW = this.segment.UNPAVED_PROB_2NARROW;
    this.EDGE_BREAK_DEG = this.segment.EDGE_BREAK_DEG;
    this.EDGE_BREAK_EXT = this.segment.EDGE_BREAK_EXT;
    this.EDGE_CRACKS_DEG = this.segment.EDGE_CRACKS_DEG;
    this.EDGE_CRACKS_EXT = this.segment.EDGE_CRACKS_EXT;
    this.EDGE_DROPOFF_DEG = this.segment.EDGE_DROPOFF_DEG;
    this.EDGE_DROPOFF_EXT = this.segment.EDGE_DROPOFF_EXT;
    this.OPC = this.segment.OPC;
    this.OTHER_PROB_CROSSINGS = this.segment.OTHER_PROB_CROSSINGS;
    this.OTHER_PROB_TREES = this.segment.OTHER_PROB_TREES;
    this.OTHER_PROB_MOLES = this.segment.OTHER_PROB_MOLES;
    this.OTHER_PROB_DAMAGE = this.segment.OTHER_PROB_DAMAGE;
    this.ENGINEER_COMMENTS = this.segment.ENGINEER_COMMENTS;
    this.ENGINEER_NAME = this.segment.ENGINEER_NAME;
    this.ENGINEER_USERNAME = this.segment.ENGINEER_USERNAME;
    this.SURFACE_DEFORM_DEG = this.segment.SURFACE_DEFORM_DEG;
    this.SURFACE_DEFORM_EXT = this.segment.SURFACE_DEFORM_EXT;
    this.ROAD_TYPE = this.segment.ROAD_TYPE;
    this.MOISTURE = this.segment.MOISTURE;
    this.GRAVEL_QUALITY = this.segment.GRAVEL_QUALITY;
    this.GQUAL_OVERSIZE = this.segment.GQUAL_OVERSIZE;
    this.GQUAL_CLAY = this.segment.GQUAL_CLAY;
    this.GQUAL_LOOSE = this.segment.GQUAL_LOOSE;
    this.MAX_SIZE = this.segment.MAX_SIZE;
    this.GRADING = this.segment.GRADING;
    this.PLASTICITY = this.segment.PLASTICITY;
    this.GRAVEL_QUANTITY = this.segment.GRAVEL_QUANTITY;
    this.EXPOSED_SUBGRADE = this.segment.EXPOSED_SUBGRADE;
    this.SUBGRADE_QUALITY = this.segment.SUBGRADE_QUALITY;
    this.CORRUGATION_DEG = this.segment.CORRUGATION_DEG;
    this.CORRUGATION_EXT = this.segment.CORRUGATION_EXT;
    this.LOOSE_MATERIAL_DEG = this.segment.LOOSE_MATERIAL_DEG;
    this.LOOSE_MATERIAL_EXT = this.segment.LOOSE_MATERIAL_EXT;
    this.STONINESS_FIX_DEG = this.segment.STONINESS_FIX_DEG;
    this.STONINESS_FIX_EXT = this.segment.STONINESS_FIX_EXT;
    this.STONINESS_LOOSE_DEG = this.segment.STONINESS_LOOSE_DEG;
    this.STONINESS_LOOSE_EXT = this.segment.STONINESS_LOOSE_EXT;
    this.EROSION_LONG_DEG = this.segment.EROSION_LONG_DEG;
    this.EROSION_LONG_EXT = this.segment.EROSION_LONG_EXT;
    this.EROSION_TRANS_DEG = this.segment.EROSION_TRANS_DEG;
    this.EROSION_TRANS_EXT = this.segment.EROSION_TRANS_EXT;
    this.RIDING_QUAL_EXT = this.segment.RIDING_QUAL_EXT;
    this.RQUAL_PROB_DFORM = this.segment.RQUAL_PROB_DFORM;
    this.RQUAL_PROB_STONINESS = this.segment.RQUAL_PROB_STONINESS;
    this.RQUAL_PROB_ROCKS = this.segment.RQUAL_PROB_ROCKS;
    this.RQUAL_PROB_RUTS = this.segment.RQUAL_PROB_RUTS;
    this.RQUAL_PROB_EROSION = this.segment.RQUAL_PROB_EROSION;
    this.TRAFFICABILITY_DEG = this.segment.TRAFFICABILITY_DEG;
    this.TRAFFIC_PROB_STEEP = this.segment.TRAFFIC_PROB_STEEP;
    this.TRAFFIC_PROB_ROCKS = this.segment.TRAFFIC_PROB_ROCKS;
    this.TRAFFIC_PROB_VEGETATION = this.segment.TRAFFIC_PROB_VEGETATION;
    this.TRAFFIC_PROB_DRAINAGE = this.segment.TRAFFIC_PROB_DRAINAGE;
    this.SAFETY_DEG = this.segment.SAFETY_DEG;
    this.SAFETY_PROB_DUST = this.segment.SAFETY_PROB_DUST;
    this.SAFETY_PROB_SLIP = this.segment.SAFETY_PROB_SLIP;
    this.SAFETY_PROB_SKID = this.segment.SAFETY_PROB_SKID;
    this.SAFETY_PROB_DRAINAGE = this.segment.SAFETY_PROB_DRAINAGE;
    this.TRANSVERSE_PROFILE = this.segment.TRANSVERSE_PROFILE;
    this.PROFILE_PROB_WINDROWS = this.segment.PROFILE_PROB_WINDROWS;
    this.PROFILE_PROB_RUTTING = this.segment.PROFILE_PROB_RUTTING;
    this.PROFILE_PROB_SHAPE = this.segment.PROFILE_PROB_SHAPE;
    this.PROFILE_PROB_LEVEL = this.segment.PROFILE_PROB_LEVEL;
    this.DRAINAGE_SIDE = this.segment.DRAINAGE_SIDE;
    this.DRAIN_PROB_CULVERTS = this.segment.DRAIN_PROB_CULVERTS;
    this.DRAIN_PROB_MITRE = this.segment.DRAIN_PROB_MITRE;
    this.DRAIN_PROB_LEVEL = this.segment.DRAIN_PROB_LEVEL;
    this.TERR_CLASS = this.segment.TERR_CLASS;
    this.GRADIENT = this.segment.GRADIENT;
    this.BLOCK_TYPE = this.segment.BLOCK_TYPE;
    this.BLOCK_LAY = this.segment.BLOCK_LAY;
    this.BLOCK_THICK = this.segment.BLOCK_THICK;
    this.CHAMFERS = this.segment.CHAMFERS;
    this.SPALLED_CRACK_DEG = this.segment.SPALLED_CRACK_DEG;
    this.SPALLED_CRACK_EXT = this.segment.SPALLED_CRACK_EXT;
    this.SURF_INTEGRITY_DEG = this.segment.SURF_INTEGRITY_DEG;
    this.SURF_INTEGRITY_EXT = this.segment.SURF_INTEGRITY_EXT;
    this.JOINT_LOSS_DEG = this.segment.JOINT_LOSS_DEG;
    this.JOINT_LOSS_EXT = this.segment.JOINT_LOSS_EXT;
    this.EDGE_DAMAGE_DEG = this.segment.EDGE_DAMAGE_DEG;
    this.EDGE_DAMAGE_EXT = this.segment.EDGE_DAMAGE_EXT;
    this.POT_PATCH_DEG = this.segment.POT_PATCH_DEG;
    this.POT_PATCH_EXT = this.segment.POT_PATCH_EXT;
    this.DRAINAGE_SURG = this.segment.DRAINAGE_SURG;
    this.DRAIN_PROB_PROFILE = this.segment.DRAIN_PROB_PROFILE;
    this.DRAIN_PROB_SHOULD = this.segment.DRAIN_PROB_SHOULD;
    this.DRAIN_PROB_FAIL = this.segment.DRAIN_PROB_FAIL;
    this.COMMENTS = this.segment.COMMENTS;
    this.NAME = this.segment.NAME;
    this.USERNAME = this.User.username;//this.segment.USERNAME;
    this.MODIFIEDONDATETIME = this.segment.MODIFIEDONDATETIME;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  change(event) {
    this.inspectiontype = event.detail.value;
    this.Reset();
  }

  toggleSecondaryIframe() {
    this.showSecondaryIframe = !this.showSecondaryIframe;
  }

  addDegExt(defect, value) {
    let av = 0;
    let defect_cnt = "CNT_" + defect;
    if (this[defect_cnt] < 2) {
      this[defect_cnt] += 1;
    }

    this[defect] += value;
    av = this[defect] / this[defect_cnt];
    //console.log("DEF:" + value);
    this[defect] = Math.ceil(av);
  }

  clearDegExt(defect) {
    let cnt = "CNT_" + defect;
    this[defect] = 0;
    this[cnt] = 0;
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: "please wait ...",
    });

    loading.present();

    // //Check MasterData

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const datetimeStamp = `${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;

    this.MODIFIEDONDATETIME = datetimeStamp;

    let _mData = await this.returnRecordForMasterData(this.roadid);

    const recordIndex = this._MasterData.findIndex(
      (record) => this.roadid in record
    );

    console.log("_mData:", recordIndex);

    if (recordIndex !== -1) {
      this._MasterData.splice(recordIndex, 1);
    }

    this._MasterData.push(_mData[0]);

    this.Offline.set("MasterData", this._MasterData);

    if (this.offline == false) {
      let segment: AddSegment = null;
      let segmentEdit: SegmentEdit = null;

      segmentEdit = {
        ASSESSED: true,
        VCI: "0",
        RCI: "0",
        MNI: "0",
        SCI: "0",
        STCI: "0",
        FCI: "0",
        CCI: "0",
        SURFACE: this.SURFACE,
        TEXTURE: this.TEXTURE,
        VOIDS: this.VOIDS,
        SURFACE_FAILURE_DEG: this.SURFACE_FAILURE_DEG,
        SURFACE_FAILURE_EXT: this.SURFACE_FAILURE_EXT,
        SURFACE_PATCHING_DEG: this.SURFACE_PATCHING_DEG,
        SURFACE_PATCHING_EXT: this.SURFACE_PATCHING_EXT,
        SURFACE_CRACK_DEG: this.SURFACE_CRACK_DEG,
        SURFACE_CRACK_EXT: this.SURFACE_CRACK_EXT,
        AGGR_LOSS_DEG: this.AGGR_LOSS_DEG,
        AGGR_LOSS_EXT: this.AGGR_LOSS_EXT,
        AGGR_LOSS_ACT: this.AGGR_LOSS_ACT,
        BINDER_CONDITION_DEG: this.BINDER_CONDITION_DEG,
        BINDER_CONDITION_EXT: this.BINDER_CONDITION_EXT,
        BLEEDING_DEG: this.BLEEDING_DEG,
        BLEEDING_EXT: this.BLEEDING_EXT,
        SURF_DEFORM_DEG: this.SURF_DEFORM_DEG,
        SUR_DEFORM_EXT: this.SUR_DEFORM_EXT,
        BLOCK_CRACK_DEG: this.BLOCK_CRACK_DEG,
        BLOCK_CRACK_EXT: this.BLOCK_CRACK_EXT,
        LONG_CRACK_DEG: this.LONG_CRACK_DEG,
        LONG_CRACK_EXT: this.LONG_CRACK_EXT,
        LONG_CRACK_TYPE: this.LONG_CRACK_TYPE,
        TRANSVERSE_CRACK_DEG: this.TRANSVERSE_CRACK_DEG,
        TRANSVERSE_CRACK_EXT: this.TRANSVERSE_CRACK_EXT,
        CROCODILE_CRACK_DEG: this.CROCODILE_CRACK_DEG,
        CROCODILE_CRACK_EXT: this.CROCODILE_CRACK_EXT,
        PUMPING_DEG: this.PUMPING_DEG,
        PUMPING_EXT: this.PUMPING_EXT,
        RUTTING_DEG: this.RUTTING_DEG,
        RUTTING_EXT: this.RUTTING_EXT,
        UNDULATION_DEG: this.UNDULATION_DEG,
        UNDULATION_EXT: this.UNDULATION_EXT,
        PATCHING_DEG: this.PATCHING_DEG,
        PATCHING_EXT: this.PATCHING_EXT,
        POTHOLE_DEG: this.POTHOLE_DEG,
        POTHOLE_EXT: this.POTHOLE_EXT,
        FAILURES_DEG: this.FAILURES_DEG,
        FAILURES_EXT: this.FAILURES_EXT,
        RIDING_QUAL_DEG: this.RIDING_QUAL_DEG,
        RQUAL_PROB_HOLE: this.RQUAL_PROB_HOLE,
        RQUAL_PROP_PATCH: this.RQUAL_PROP_PATCH,
        RQUAL_PROB_UNDUL: this.RQUAL_PROB_UNDUL,
        RQUAL_PROB_UNEVEN: this.RQUAL_PROB_UNEVEN,
        RQUAL_PROB_CORR: this.RQUAL_PROB_CORR,
        SKID_RESISTANCE_DEG: this.SKID_RESISTANCE_DEG,
        SKID_PROB_BLEED: this.SKID_PROB_BLEED,
        SKID_PROB_POLISH: this.SKID_PROB_POLISH,
        DRAINAGE_SURF: this.DRAINAGE_SURF,
        DRAIN_PROB_RUT: this.DRAIN_PROB_RUT,
        DRAIN_PRB_SHOULD: this.DRAIN_PRB_SHOULD,
        DRAIN_PROB_ALIGN: this.DRAIN_PROB_ALIGN,
        DRAIN_PROB_SIDE: this.DRAIN_PROB_SIDE,
        UNPAVED_SHOULDER: this.UNPAVED_SHOULDER,
        UNPAVED_PROB_ERODED: this.UNPAVED_PROB_ERODED,
        UNPAVED_PROB_OGROWN: this.UNPAVED_PROB_OGROWN,
        UNPAVED_PROB_INCLINED: this.UNPAVED_PROB_INCLINED,
        UNPAVED_PROB_2HIGH: this.UNPAVED_PROB_2HIGH,
        UNPAVED_PROB_2NARROW: this.UNPAVED_PROB_2NARROW,
        EDGE_BREAK_DEG: this.EDGE_BREAK_DEG,
        EDGE_BREAK_EXT: this.EDGE_BREAK_EXT,
        EDGE_CRACKS_DEG: this.EDGE_CRACKS_DEG,
        EDGE_CRACKS_EXT: this.EDGE_CRACKS_EXT,
        EDGE_DROPOFF_DEG: this.EDGE_DROPOFF_DEG,
        EDGE_DROPOFF_EXT: this.EDGE_DROPOFF_EXT,
        OPC: this.OPC,
        OTHER_PROB_CROSSINGS: this.OTHER_PROB_CROSSINGS,
        OTHER_PROB_TREES: this.OTHER_PROB_TREES,
        OTHER_PROB_MOLES: this.OTHER_PROB_MOLES,
        OTHER_PROB_DAMAGE: this.OTHER_PROB_DAMAGE,
        ENGINEER_COMMENTS: this.ENGINEER_COMMENTS,
        ENGINEER_NAME: this.ENGINEER_NAME,
        ENGINEER_USERNAME: this.ENGINEER_USERNAME,
        surfacetype: this.surfacetype,
        SURFACE_DEFORM_DEG: this.SURFACE_DEFORM_DEG,
        SURFACE_DEFORM_EXT: this.SURFACE_DEFORM_EXT,
        ROAD_TYPE: this.ROAD_TYPE,
        MOISTURE: this.MOISTURE,
        GRAVEL_QUALITY: this.GRAVEL_QUALITY,
        GQUAL_OVERSIZE: this.GQUAL_OVERSIZE,
        GQUAL_CLAY: this.GQUAL_CLAY,
        GQUAL_LOOSE: this.GQUAL_LOOSE,
        MAX_SIZE: this.MAX_SIZE,
        GRADING: this.GRADING,
        PLASTICITY: this.PLASTICITY,
        GRAVEL_QUANTITY: this.GRAVEL_QUANTITY,
        EXPOSED_SUBGRADE: this.EXPOSED_SUBGRADE,
        SUBGRADE_QUALITY: this.SUBGRADE_QUALITY,
        CORRUGATION_DEG: this.CORRUGATION_DEG,
        CORRUGATION_EXT: this.CORRUGATION_EXT,
        LOOSE_MATERIAL_DEG: this.LOOSE_MATERIAL_DEG,
        LOOSE_MATERIAL_EXT: this.LOOSE_MATERIAL_EXT,
        STONINESS_FIX_DEG: this.STONINESS_FIX_DEG,
        STONINESS_FIX_EXT: this.STONINESS_FIX_EXT,
        STONINESS_LOOSE_DEG: this.STONINESS_LOOSE_DEG,
        STONINESS_LOOSE_EXT: this.STONINESS_LOOSE_EXT,
        EROSION_LONG_DEG: this.EROSION_LONG_DEG,
        EROSION_LONG_EXT: this.EROSION_LONG_EXT,
        EROSION_TRANS_DEG: this.EROSION_TRANS_DEG,
        EROSION_TRANS_EXT: this.EROSION_TRANS_EXT,
        RIDING_QUAL_EXT: this.RIDING_QUAL_EXT,
        RQUAL_PROB_DFORM: this.RQUAL_PROB_DFORM,
        RQUAL_PROB_STONINESS: this.RQUAL_PROB_STONINESS,
        RQUAL_PROB_ROCKS: this.RQUAL_PROB_ROCKS,
        RQUAL_PROB_RUTS: this.RQUAL_PROB_RUTS,
        RQUAL_PROB_EROSION: this.RQUAL_PROB_EROSION,
        TRAFFICABILITY_DEG: this.TRAFFICABILITY_DEG,
        TRAFFIC_PROB_STEEP: this.TRAFFIC_PROB_STEEP,
        TRAFFIC_PROB_ROCKS: this.TRAFFIC_PROB_ROCKS,
        TRAFFIC_PROB_VEGETATION: this.TRAFFIC_PROB_VEGETATION,
        TRAFFIC_PROB_DRAINAGE: this.TRAFFIC_PROB_DRAINAGE,
        SAFETY_DEG: this.SAFETY_DEG,
        SAFETY_PROB_DUST: this.SAFETY_PROB_DUST,
        SAFETY_PROB_SLIP: this.SAFETY_PROB_SLIP,
        SAFETY_PROB_SKID: this.SAFETY_PROB_SKID,
        SAFETY_PROB_DRAINAGE: this.SAFETY_PROB_DRAINAGE,
        TRANSVERSE_PROFILE: this.TRANSVERSE_PROFILE,
        PROFILE_PROB_WINDROWS: this.PROFILE_PROB_WINDROWS,
        PROFILE_PROB_RUTTING: this.PROFILE_PROB_RUTTING,
        PROFILE_PROB_SHAPE: this.PROFILE_PROB_SHAPE,
        PROFILE_PROB_LEVEL: this.PROFILE_PROB_LEVEL,
        DRAINAGE_SIDE: this.DRAINAGE_SIDE,
        DRAIN_PROB_CULVERTS: this.DRAIN_PROB_CULVERTS,
        DRAIN_PROB_MITRE: this.DRAIN_PROB_MITRE,
        DRAIN_PROB_LEVEL: this.DRAIN_PROB_LEVEL,
        TERR_CLASS: this.TERR_CLASS,
        GRADIENT: this.GRADIENT,
        BLOCK_TYPE: this.BLOCK_TYPE,
        BLOCK_LAY: this.BLOCK_LAY,
        BLOCK_THICK: this.BLOCK_THICK,
        CHAMFERS: this.CHAMFERS,
        SPALLED_CRACK_DEG: this.SPALLED_CRACK_DEG,
        SPALLED_CRACK_EXT: this.SPALLED_CRACK_EXT,
        SURF_INTEGRITY_DEG: this.SURF_INTEGRITY_DEG,
        SURF_INTEGRITY_EXT: this.SURF_INTEGRITY_EXT,
        JOINT_LOSS_DEG: this.JOINT_LOSS_DEG,
        JOINT_LOSS_EXT: this.JOINT_LOSS_EXT,
        EDGE_DAMAGE_DEG: this.EDGE_DAMAGE_DEG,
        EDGE_DAMAGE_EXT: this.EDGE_DAMAGE_EXT,
        POT_PATCH_DEG: this.POT_PATCH_DEG,
        POT_PATCH_EXT: this.POT_PATCH_EXT,
        DRAINAGE_SURG: this.DRAINAGE_SURG,
        DRAIN_PROB_PROFILE: this.DRAIN_PROB_PROFILE,
        DRAIN_PROB_SHOULD: this.DRAIN_PROB_SHOULD,
        DRAIN_PROB_FAIL: this.DRAIN_PROB_FAIL,
        COMMENTS: this.COMMENTS,
        NAME: this.NAME,
        USERNAME: this.USERNAME,
        MODIFIEDONDATETIME: this.MODIFIEDONDATETIME,
      };

      await this.db.update(this.segrec_id, segmentEdit);

      this.db.getAll();

      //Reload
      //This gets the rest of the segment data
      await this.db.Segments.subscribe((val) => {
        this.SegmentArray = val;
      });
      await this.db.getSegment(this.roadid);

      this.segment = this.SegmentArray[0];
    }

    loading.dismiss();

    this.dismiss();
  }

  async returnRecordForMasterData(roadID) {
    let record = [
      {
        roadid: {
          ASSESSED: true,
          VCI: "0",
          RCI: "0",
          MNI: "0",
          SCI: "0",
          STCI: "0",
          FCI: "0",
          CCI: "0",
          SURFACE: this.SURFACE,
          TEXTURE: this.TEXTURE,
          VOIDS: this.VOIDS,
          SURFACE_FAILURE_DEG: this.SURFACE_FAILURE_DEG,
          SURFACE_FAILURE_EXT: this.SURFACE_FAILURE_EXT,
          SURFACE_PATCHING_DEG: this.SURFACE_PATCHING_DEG,
          SURFACE_PATCHING_EXT: this.SURFACE_PATCHING_EXT,
          SURFACE_CRACK_DEG: this.SURFACE_CRACK_DEG,
          SURFACE_CRACK_EXT: this.SURFACE_CRACK_EXT,
          AGGR_LOSS_DEG: this.AGGR_LOSS_DEG,
          AGGR_LOSS_EXT: this.AGGR_LOSS_EXT,
          AGGR_LOSS_ACT: this.AGGR_LOSS_ACT,
          BINDER_CONDITION_DEG: this.BINDER_CONDITION_DEG,
          BINDER_CONDITION_EXT: this.BINDER_CONDITION_EXT,
          BLEEDING_DEG: this.BLEEDING_DEG,
          BLEEDING_EXT: this.BLEEDING_EXT,
          SURF_DEFORM_DEG: this.SURF_DEFORM_DEG,
          SUR_DEFORM_EXT: this.SUR_DEFORM_EXT,
          BLOCK_CRACK_DEG: this.BLOCK_CRACK_DEG,
          BLOCK_CRACK_EXT: this.BLOCK_CRACK_EXT,
          LONG_CRACK_DEG: this.LONG_CRACK_DEG,
          LONG_CRACK_EXT: this.LONG_CRACK_EXT,
          LONG_CRACK_TYPE: this.LONG_CRACK_TYPE,
          TRANSVERSE_CRACK_DEG: this.TRANSVERSE_CRACK_DEG,
          TRANSVERSE_CRACK_EXT: this.TRANSVERSE_CRACK_EXT,
          CROCODILE_CRACK_DEG: this.CROCODILE_CRACK_DEG,
          CROCODILE_CRACK_EXT: this.CROCODILE_CRACK_EXT,
          PUMPING_DEG: this.PUMPING_DEG,
          PUMPING_EXT: this.PUMPING_EXT,
          RUTTING_DEG: this.RUTTING_DEG,
          RUTTING_EXT: this.RUTTING_EXT,
          UNDULATION_DEG: this.UNDULATION_DEG,
          UNDULATION_EXT: this.UNDULATION_EXT,
          PATCHING_DEG: this.PATCHING_DEG,
          PATCHING_EXT: this.PATCHING_EXT,
          POTHOLE_DEG: this.POTHOLE_DEG,
          POTHOLE_EXT: this.POTHOLE_EXT,
          FAILURES_DEG: this.FAILURES_DEG,
          FAILURES_EXT: this.FAILURES_EXT,
          RIDING_QUAL_DEG: this.RIDING_QUAL_DEG,
          RQUAL_PROB_HOLE: this.RQUAL_PROB_HOLE,
          RQUAL_PROP_PATCH: this.RQUAL_PROP_PATCH,
          RQUAL_PROB_UNDUL: this.RQUAL_PROB_UNDUL,
          RQUAL_PROB_UNEVEN: this.RQUAL_PROB_UNEVEN,
          RQUAL_PROB_CORR: this.RQUAL_PROB_CORR,
          SKID_RESISTANCE_DEG: this.SKID_RESISTANCE_DEG,
          SKID_PROB_BLEED: this.SKID_PROB_BLEED,
          SKID_PROB_POLISH: this.SKID_PROB_POLISH,
          DRAINAGE_SURF: this.DRAINAGE_SURF,
          DRAIN_PROB_RUT: this.DRAIN_PROB_RUT,
          DRAIN_PRB_SHOULD: this.DRAIN_PRB_SHOULD,
          DRAIN_PROB_ALIGN: this.DRAIN_PROB_ALIGN,
          DRAIN_PROB_SIDE: this.DRAIN_PROB_SIDE,
          UNPAVED_SHOULDER: this.UNPAVED_SHOULDER,
          UNPAVED_PROB_ERODED: this.UNPAVED_PROB_ERODED,
          UNPAVED_PROB_OGROWN: this.UNPAVED_PROB_OGROWN,
          UNPAVED_PROB_INCLINED: this.UNPAVED_PROB_INCLINED,
          UNPAVED_PROB_2HIGH: this.UNPAVED_PROB_2HIGH,
          UNPAVED_PROB_2NARROW: this.UNPAVED_PROB_2NARROW,
          EDGE_BREAK_DEG: this.EDGE_BREAK_DEG,
          EDGE_BREAK_EXT: this.EDGE_BREAK_EXT,
          EDGE_CRACKS_DEG: this.EDGE_CRACKS_DEG,
          EDGE_CRACKS_EXT: this.EDGE_CRACKS_EXT,
          EDGE_DROPOFF_DEG: this.EDGE_DROPOFF_DEG,
          EDGE_DROPOFF_EXT: this.EDGE_DROPOFF_EXT,
          OPC: this.OPC,
          OTHER_PROB_CROSSINGS: this.OTHER_PROB_CROSSINGS,
          OTHER_PROB_TREES: this.OTHER_PROB_TREES,
          OTHER_PROB_MOLES: this.OTHER_PROB_MOLES,
          OTHER_PROB_DAMAGE: this.OTHER_PROB_DAMAGE,
          ENGINEER_COMMENTS: this.ENGINEER_COMMENTS,
          ENGINEER_NAME: this.ENGINEER_NAME,
          ENGINEER_USERNAME: this.ENGINEER_USERNAME,
          surfacetype: this.surfacetype,
          SURFACE_DEFORM_DEG: this.SURFACE_DEFORM_DEG,
          SURFACE_DEFORM_EXT: this.SURFACE_DEFORM_EXT,
          ROAD_TYPE: this.ROAD_TYPE,
          MOISTURE: this.MOISTURE,
          GRAVEL_QUALITY: this.GRAVEL_QUALITY,
          GQUAL_OVERSIZE: this.GQUAL_OVERSIZE,
          GQUAL_CLAY: this.GQUAL_CLAY,
          GQUAL_LOOSE: this.GQUAL_LOOSE,
          MAX_SIZE: this.MAX_SIZE,
          GRADING: this.GRADING,
          PLASTICITY: this.PLASTICITY,
          GRAVEL_QUANTITY: this.GRAVEL_QUANTITY,
          EXPOSED_SUBGRADE: this.EXPOSED_SUBGRADE,
          SUBGRADE_QUALITY: this.SUBGRADE_QUALITY,
          CORRUGATION_DEG: this.CORRUGATION_DEG,
          CORRUGATION_EXT: this.CORRUGATION_EXT,
          LOOSE_MATERIAL_DEG: this.LOOSE_MATERIAL_DEG,
          LOOSE_MATERIAL_EXT: this.LOOSE_MATERIAL_EXT,
          STONINESS_FIX_DEG: this.STONINESS_FIX_DEG,
          STONINESS_FIX_EXT: this.STONINESS_FIX_EXT,
          STONINESS_LOOSE_DEG: this.STONINESS_LOOSE_DEG,
          STONINESS_LOOSE_EXT: this.STONINESS_LOOSE_EXT,
          EROSION_LONG_DEG: this.EROSION_LONG_DEG,
          EROSION_LONG_EXT: this.EROSION_LONG_EXT,
          EROSION_TRANS_DEG: this.EROSION_TRANS_DEG,
          EROSION_TRANS_EXT: this.EROSION_TRANS_EXT,
          RIDING_QUAL_EXT: this.RIDING_QUAL_EXT,
          RQUAL_PROB_DFORM: this.RQUAL_PROB_DFORM,
          RQUAL_PROB_STONINESS: this.RQUAL_PROB_STONINESS,
          RQUAL_PROB_ROCKS: this.RQUAL_PROB_ROCKS,
          RQUAL_PROB_RUTS: this.RQUAL_PROB_RUTS,
          RQUAL_PROB_EROSION: this.RQUAL_PROB_EROSION,
          TRAFFICABILITY_DEG: this.TRAFFICABILITY_DEG,
          TRAFFIC_PROB_STEEP: this.TRAFFIC_PROB_STEEP,
          TRAFFIC_PROB_ROCKS: this.TRAFFIC_PROB_ROCKS,
          TRAFFIC_PROB_VEGETATION: this.TRAFFIC_PROB_VEGETATION,
          TRAFFIC_PROB_DRAINAGE: this.TRAFFIC_PROB_DRAINAGE,
          SAFETY_DEG: this.SAFETY_DEG,
          SAFETY_PROB_DUST: this.SAFETY_PROB_DUST,
          SAFETY_PROB_SLIP: this.SAFETY_PROB_SLIP,
          SAFETY_PROB_SKID: this.SAFETY_PROB_SKID,
          SAFETY_PROB_DRAINAGE: this.SAFETY_PROB_DRAINAGE,
          TRANSVERSE_PROFILE: this.TRANSVERSE_PROFILE,
          PROFILE_PROB_WINDROWS: this.PROFILE_PROB_WINDROWS,
          PROFILE_PROB_RUTTING: this.PROFILE_PROB_RUTTING,
          PROFILE_PROB_SHAPE: this.PROFILE_PROB_SHAPE,
          PROFILE_PROB_LEVEL: this.PROFILE_PROB_LEVEL,
          DRAINAGE_SIDE: this.DRAINAGE_SIDE,
          DRAIN_PROB_CULVERTS: this.DRAIN_PROB_CULVERTS,
          DRAIN_PROB_MITRE: this.DRAIN_PROB_MITRE,
          DRAIN_PROB_LEVEL: this.DRAIN_PROB_LEVEL,
          TERR_CLASS: this.TERR_CLASS,
          GRADIENT: this.GRADIENT,
          BLOCK_TYPE: this.BLOCK_TYPE,
          BLOCK_LAY: this.BLOCK_LAY,
          BLOCK_THICK: this.BLOCK_THICK,
          CHAMFERS: this.CHAMFERS,
          SPALLED_CRACK_DEG: this.SPALLED_CRACK_DEG,
          SPALLED_CRACK_EXT: this.SPALLED_CRACK_EXT,
          SURF_INTEGRITY_DEG: this.SURF_INTEGRITY_DEG,
          SURF_INTEGRITY_EXT: this.SURF_INTEGRITY_EXT,
          JOINT_LOSS_DEG: this.JOINT_LOSS_DEG,
          JOINT_LOSS_EXT: this.JOINT_LOSS_EXT,
          EDGE_DAMAGE_DEG: this.EDGE_DAMAGE_DEG,
          EDGE_DAMAGE_EXT: this.EDGE_DAMAGE_EXT,
          POT_PATCH_DEG: this.POT_PATCH_DEG,
          POT_PATCH_EXT: this.POT_PATCH_EXT,
          DRAINAGE_SURG: this.DRAINAGE_SURG,
          DRAIN_PROB_PROFILE: this.DRAIN_PROB_PROFILE,
          DRAIN_PROB_SHOULD: this.DRAIN_PROB_SHOULD,
          DRAIN_PROB_FAIL: this.DRAIN_PROB_FAIL,
          COMMENTS: this.COMMENTS,
          NAME: this.NAME,
          USERNAME: this.USERNAME,
          MODIFIEDONDATETIME: this.MODIFIEDONDATETIME,
        },
      },
    ];

    await this.roadIDInArray(record, this.roadid);

    //console.log("Master Data:", record);

    return record;
  }

  async roadIDInArray(arr, newRID: string) {
    return arr.map((record) => {
      if ("roadid" in record) {
        record[newRID] = record["roadid"];
        delete record["roadid"];
      }
      return record;
    });
  }
}
