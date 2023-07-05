import { Component, OnInit } from "@angular/core";
import { BuyerGuard, OwnerGuard } from "../../../services/guard";
import { Storage } from "@ionic/storage-angular";
import { threadId } from "worker_threads";
import { GlobalSettings } from "../../../services/global.service";
import {
  LoadingController,
  ModalController,
  AlertController,
} from "@ionic/angular";
import { Segments } from "../../../services/db";
import { AddSegment, SegmentEdit } from "../../../providers";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  public user_role: any = "";
  public _MasterData: any[] = [];
  public loading: any;
  SegmentArray: any;
  _segments: any;
  showsyncBTN: boolean = false;
  public isInternetAvailable = false;

  constructor(
    public OwnerGuard: OwnerGuard,
    public BuyerGuard: BuyerGuard,
    public global: GlobalSettings,
    private alertCtrl: AlertController,
    public storage: Storage,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    public Offline: Storage,
    private db: Segments
  ) {
    this.checkInternetAvailability();

    setInterval(() => {
      this.checkInternetAvailability();
    }, 2000);
  }

  ngOnInit() {
    const body = document.querySelector("body");

    this.storage.get("User").then(async (res) => {
      this.user_role = res.user_role;
      this.global.userRole = res.user_role;
      //console.log(res);
      //console.log(this.user_role);
      // await this.loadDetails();
      // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
      document.querySelectorAll(".sidebar .nav-item").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          if (body.classList.contains("sidebar-icon-only")) {
            el.classList.add("hover-open");
          }
        });
        el.addEventListener("mouseout", function () {
          if (body.classList.contains("sidebar-icon-only")) {
            el.classList.remove("hover-open");
          }
        });
      });

      //console.log("SHOW BTN:", this.global.showSync);
    });
  }

  // async loadDetails() {
  //   this.db.Segments.subscribe((val) => {
  //     this._segments = val;
  //   });
  //   this.db.getAll();
  // }

  async startSync() {
    let alert = this.alertCtrl.create({
      message:
        "This action will sync all records updated while you were OFFLINE!<br> Do you wish to proceed",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Proceed",
          handler: async () => {
            console.log("Proceed clicked");

            this.loading = await this.loadingCtrl.create({
              message: "Wait while data is being synced ...",
            });

            this.loading.present();
            await this.startSyncProcess();
            // setTimeout(() => {
            //   loading.dismiss();
            // }, 5000);
          },
        },
      ],
    });
    (await alert).present();
  }

  async startSyncProcess() {
    this.Offline.get("MasterData").then((_data) => {
      this._MasterData = []; // Change the type declaration to an array
      let _roadid_list_fin: any[];

      this._MasterData = _data;
      this.extractRids(_data).then(async (res) => {
        _roadid_list_fin = res;
        for (const _roadid of _roadid_list_fin) {
          // console.log("Road ID:", _roadid);
          const recordIndex = this._MasterData.findIndex(
            (record) => _roadid in record
          );

          let _data_rec = this._MasterData[recordIndex][_roadid];
          //console.log("Road Data:", _data_rec.MODIFIEDONDATETIME);
          await this.syncRecord(
            _roadid,
            _data_rec.MODIFIEDONDATETIME,
            _data_rec
          );
        }
      });

      this.loading.dismiss();
    });
  }

  async extractRids(arr) {
    let _roadid_list = [];

    for (const record of arr) {
      const keys = Object.keys(record);

      for (const key of keys) {
        _roadid_list.push(key);
      }
    }

    return _roadid_list;
  }

  async extractRidData(arr, roadid) {
    let value = [];

    for (const record of arr) {
      const keys = Object.keys(record);

      for (const key of keys) {
        value = record[roadid];
      }
    }

    return value;
  }

  async syncRecord(roadid, modifieddatetime, data_rec) {
    await this.getModifiedDatetime(roadid, modifieddatetime, data_rec).then(
      async (res) => {
        // console.log("DB:", res);
        // console.log("SNYC:", modifieddatetime);
      }
    );
  }

  async getModifiedDatetime(roadid, modifieddatetime, data_rec) {
    let Data = "";

    (await this.db.getIndSegment(roadid)).subscribe(async (data) => {
      // console.log("NEW DATE:", modifieddatetime);
      // console.log("OLD DATE:", data[0].MODIFIEDONDATETIME);
      // console.log("REC ID:", data[0].id);
      if (data[0].MODIFIEDONDATETIME < modifieddatetime) {
        console.log(roadid + " Record Synced!");

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
          SURFACE: data_rec.SURFACE,
          TEXTURE: data_rec.TEXTURE,
          VOIDS: data_rec.VOIDS,
          SURFACE_FAILURE_DEG: data_rec.SURFACE_FAILURE_DEG,
          SURFACE_FAILURE_EXT: data_rec.SURFACE_FAILURE_EXT,
          SURFACE_PATCHING_DEG: data_rec.SURFACE_PATCHING_DEG,
          SURFACE_PATCHING_EXT: data_rec.SURFACE_PATCHING_EXT,
          SURFACE_CRACK_DEG: data_rec.SURFACE_CRACK_DEG,
          SURFACE_CRACK_EXT: data_rec.SURFACE_CRACK_EXT,
          AGGR_LOSS_DEG: data_rec.AGGR_LOSS_DEG,
          AGGR_LOSS_EXT: data_rec.AGGR_LOSS_EXT,
          AGGR_LOSS_ACT: data_rec.AGGR_LOSS_ACT,
          BINDER_CONDITION_DEG: data_rec.BINDER_CONDITION_DEG,
          BINDER_CONDITION_EXT: data_rec.BINDER_CONDITION_EXT,
          BLEEDING_DEG: data_rec.BLEEDING_DEG,
          BLEEDING_EXT: data_rec.BLEEDING_EXT,
          SURF_DEFORM_DEG: data_rec.SURF_DEFORM_DEG,
          SUR_DEFORM_EXT: data_rec.SUR_DEFORM_EXT,
          BLOCK_CRACK_DEG: data_rec.BLOCK_CRACK_DEG,
          BLOCK_CRACK_EXT: data_rec.BLOCK_CRACK_EXT,
          LONG_CRACK_DEG: data_rec.LONG_CRACK_DEG,
          LONG_CRACK_EXT: data_rec.LONG_CRACK_EXT,
          LONG_CRACK_TYPE: data_rec.LONG_CRACK_TYPE,
          TRANSVERSE_CRACK_DEG: data_rec.TRANSVERSE_CRACK_DEG,
          TRANSVERSE_CRACK_EXT: data_rec.TRANSVERSE_CRACK_EXT,
          CROCODILE_CRACK_DEG: data_rec.CROCODILE_CRACK_DEG,
          CROCODILE_CRACK_EXT: data_rec.CROCODILE_CRACK_EXT,
          PUMPING_DEG: data_rec.PUMPING_DEG,
          PUMPING_EXT: data_rec.PUMPING_EXT,
          RUTTING_DEG: data_rec.RUTTING_DEG,
          RUTTING_EXT: data_rec.RUTTING_EXT,
          UNDULATION_DEG: data_rec.UNDULATION_DEG,
          UNDULATION_EXT: data_rec.UNDULATION_EXT,
          PATCHING_DEG: data_rec.PATCHING_DEG,
          PATCHING_EXT: data_rec.PATCHING_EXT,
          POTHOLE_DEG: data_rec.POTHOLE_DEG,
          POTHOLE_EXT: data_rec.POTHOLE_EXT,
          FAILURES_DEG: data_rec.FAILURES_DEG,
          FAILURES_EXT: data_rec.FAILURES_EXT,
          RIDING_QUAL_DEG: data_rec.RIDING_QUAL_DEG,
          RQUAL_PROB_HOLE: data_rec.RQUAL_PROB_HOLE,
          RQUAL_PROP_PATCH: data_rec.RQUAL_PROP_PATCH,
          RQUAL_PROB_UNDUL: data_rec.RQUAL_PROB_UNDUL,
          RQUAL_PROB_UNEVEN: data_rec.RQUAL_PROB_UNEVEN,
          RQUAL_PROB_CORR: data_rec.RQUAL_PROB_CORR,
          SKID_RESISTANCE_DEG: data_rec.SKID_RESISTANCE_DEG,
          SKID_PROB_BLEED: data_rec.SKID_PROB_BLEED,
          SKID_PROB_POLISH: data_rec.SKID_PROB_POLISH,
          DRAINAGE_SURF: data_rec.DRAINAGE_SURF,
          DRAIN_PROB_RUT: data_rec.DRAIN_PROB_RUT,
          DRAIN_PRB_SHOULD: data_rec.DRAIN_PRB_SHOULD,
          DRAIN_PROB_ALIGN: data_rec.DRAIN_PROB_ALIGN,
          DRAIN_PROB_SIDE: data_rec.DRAIN_PROB_SIDE,
          UNPAVED_SHOULDER: data_rec.UNPAVED_SHOULDER,
          UNPAVED_PROB_ERODED: data_rec.UNPAVED_PROB_ERODED,
          UNPAVED_PROB_OGROWN: data_rec.UNPAVED_PROB_OGROWN,
          UNPAVED_PROB_INCLINED: data_rec.UNPAVED_PROB_INCLINED,
          UNPAVED_PROB_2HIGH: data_rec.UNPAVED_PROB_2HIGH,
          UNPAVED_PROB_2NARROW: data_rec.UNPAVED_PROB_2NARROW,
          EDGE_BREAK_DEG: data_rec.EDGE_BREAK_DEG,
          EDGE_BREAK_EXT: data_rec.EDGE_BREAK_EXT,
          EDGE_CRACKS_DEG: data_rec.EDGE_CRACKS_DEG,
          EDGE_CRACKS_EXT: data_rec.EDGE_CRACKS_EXT,
          EDGE_DROPOFF_DEG: data_rec.EDGE_DROPOFF_DEG,
          EDGE_DROPOFF_EXT: data_rec.EDGE_DROPOFF_EXT,
          OPC: data_rec.OPC,
          OTHER_PROB_CROSSINGS: data_rec.OTHER_PROB_CROSSINGS,
          OTHER_PROB_TREES: data_rec.OTHER_PROB_TREES,
          OTHER_PROB_MOLES: data_rec.OTHER_PROB_MOLES,
          OTHER_PROB_DAMAGE: data_rec.OTHER_PROB_DAMAGE,
          ENGINEER_COMMENTS: data_rec.ENGINEER_COMMENTS,
          ENGINEER_NAME: data_rec.ENGINEER_NAME,
          ENGINEER_USERNAME: data_rec.ENGINEER_USERNAME,
          surfacetype: data_rec.surfacetype,
          SURFACE_DEFORM_DEG: data_rec.SURFACE_DEFORM_DEG,
          SURFACE_DEFORM_EXT: data_rec.SURFACE_DEFORM_EXT,
          ROAD_TYPE: data_rec.ROAD_TYPE,
          MOISTURE: data_rec.MOISTURE,
          GRAVEL_QUALITY: data_rec.GRAVEL_QUALITY,
          GQUAL_OVERSIZE: data_rec.GQUAL_OVERSIZE,
          GQUAL_CLAY: data_rec.GQUAL_CLAY,
          GQUAL_LOOSE: data_rec.GQUAL_LOOSE,
          MAX_SIZE: data_rec.MAX_SIZE,
          GRADING: data_rec.GRADING,
          PLASTICITY: data_rec.PLASTICITY,
          GRAVEL_QUANTITY: data_rec.GRAVEL_QUANTITY,
          EXPOSED_SUBGRADE: data_rec.EXPOSED_SUBGRADE,
          SUBGRADE_QUALITY: data_rec.SUBGRADE_QUALITY,
          CORRUGATION_DEG: data_rec.CORRUGATION_DEG,
          CORRUGATION_EXT: data_rec.CORRUGATION_EXT,
          LOOSE_MATERIAL_DEG: data_rec.LOOSE_MATERIAL_DEG,
          LOOSE_MATERIAL_EXT: data_rec.LOOSE_MATERIAL_EXT,
          STONINESS_FIX_DEG: data_rec.STONINESS_FIX_DEG,
          STONINESS_FIX_EXT: data_rec.STONINESS_FIX_EXT,
          STONINESS_LOOSE_DEG: data_rec.STONINESS_LOOSE_DEG,
          STONINESS_LOOSE_EXT: data_rec.STONINESS_LOOSE_EXT,
          EROSION_LONG_DEG: data_rec.EROSION_LONG_DEG,
          EROSION_LONG_EXT: data_rec.EROSION_LONG_EXT,
          EROSION_TRANS_DEG: data_rec.EROSION_TRANS_DEG,
          EROSION_TRANS_EXT: data_rec.EROSION_TRANS_EXT,
          RIDING_QUAL_EXT: data_rec.RIDING_QUAL_EXT,
          RQUAL_PROB_DFORM: data_rec.RQUAL_PROB_DFORM,
          RQUAL_PROB_STONINESS: data_rec.RQUAL_PROB_STONINESS,
          RQUAL_PROB_ROCKS: data_rec.RQUAL_PROB_ROCKS,
          RQUAL_PROB_RUTS: data_rec.RQUAL_PROB_RUTS,
          RQUAL_PROB_EROSION: data_rec.RQUAL_PROB_EROSION,
          TRAFFICABILITY_DEG: data_rec.TRAFFICABILITY_DEG,
          TRAFFIC_PROB_STEEP: data_rec.TRAFFIC_PROB_STEEP,
          TRAFFIC_PROB_ROCKS: data_rec.TRAFFIC_PROB_ROCKS,
          TRAFFIC_PROB_VEGETATION: data_rec.TRAFFIC_PROB_VEGETATION,
          TRAFFIC_PROB_DRAINAGE: data_rec.TRAFFIC_PROB_DRAINAGE,
          SAFETY_DEG: data_rec.SAFETY_DEG,
          SAFETY_PROB_DUST: data_rec.SAFETY_PROB_DUST,
          SAFETY_PROB_SLIP: data_rec.SAFETY_PROB_SLIP,
          SAFETY_PROB_SKID: data_rec.SAFETY_PROB_SKID,
          SAFETY_PROB_DRAINAGE: data_rec.SAFETY_PROB_DRAINAGE,
          TRANSVERSE_PROFILE: data_rec.TRANSVERSE_PROFILE,
          PROFILE_PROB_WINDROWS: data_rec.PROFILE_PROB_WINDROWS,
          PROFILE_PROB_RUTTING: data_rec.PROFILE_PROB_RUTTING,
          PROFILE_PROB_SHAPE: data_rec.PROFILE_PROB_SHAPE,
          PROFILE_PROB_LEVEL: data_rec.PROFILE_PROB_LEVEL,
          DRAINAGE_SIDE: data_rec.DRAINAGE_SIDE,
          DRAIN_PROB_CULVERTS: data_rec.DRAIN_PROB_CULVERTS,
          DRAIN_PROB_MITRE: data_rec.DRAIN_PROB_MITRE,
          DRAIN_PROB_LEVEL: data_rec.DRAIN_PROB_LEVEL,
          TERR_CLASS: data_rec.TERR_CLASS,
          GRADIENT: data_rec.GRADIENT,
          BLOCK_TYPE: data_rec.BLOCK_TYPE,
          BLOCK_LAY: data_rec.BLOCK_LAY,
          BLOCK_THICK: data_rec.BLOCK_THICK,
          CHAMFERS: data_rec.CHAMFERS,
          SPALLED_CRACK_DEG: data_rec.SPALLED_CRACK_DEG,
          SPALLED_CRACK_EXT: data_rec.SPALLED_CRACK_EXT,
          SURF_INTEGRITY_DEG: data_rec.SURF_INTEGRITY_DEG,
          SURF_INTEGRITY_EXT: data_rec.SURF_INTEGRITY_EXT,
          JOINT_LOSS_DEG: data_rec.JOINT_LOSS_DEG,
          JOINT_LOSS_EXT: data_rec.JOINT_LOSS_EXT,
          EDGE_DAMAGE_DEG: data_rec.EDGE_DAMAGE_DEG,
          EDGE_DAMAGE_EXT: data_rec.EDGE_DAMAGE_EXT,
          POT_PATCH_DEG: data_rec.POT_PATCH_DEG,
          POT_PATCH_EXT: data_rec.POT_PATCH_EXT,
          DRAINAGE_SURG: data_rec.DRAINAGE_SURG,
          DRAIN_PROB_PROFILE: data_rec.DRAIN_PROB_PROFILE,
          DRAIN_PROB_SHOULD: data_rec.DRAIN_PROB_SHOULD,
          DRAIN_PROB_FAIL: data_rec.DRAIN_PROB_FAIL,
          COMMENTS: data_rec.COMMENTS,
          NAME: data_rec.NAME,
          USERNAME: data_rec.USERNAME,
          MODIFIEDONDATETIME: modifieddatetime,
        };
        await this.db.update(data[0].id, segmentEdit);
      }
    });
  }

  checkInternetAvailability() {
    console.log("Checking internet...");

        // Try to fetch a resource from the internet
    fetch("https://www.google.com", {
      mode: 'no-cors', // 'no-cors' mode to avoid CORS issues
      // The server may not respond, so set a timeout
    }).then(() => {
      console.log("--[DASH] Online--");
      this.isInternetAvailable = true;
    }).catch(() => {
      console.log("--[DASH] No Internet--");
      this.isInternetAvailable = false;
    });
   
  }
}
