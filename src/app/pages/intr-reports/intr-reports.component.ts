import { Component, OnInit } from "@angular/core";
import * as map_style from "../../../providers/map.styles";
import { Intrusions } from "../../../services/db/db.intrusions";
import { BillboardModal } from "../../../providers";
import {
  PopoverController,
  ModalController,
  ToastController,
  LoadingController,
  AlertController,
  NavController,
} from "@ionic/angular";
import { BookingComponent } from "../../shared/booking/booking.component";
import { FileService } from "../../../services/file.service";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryDocumentSnapshot,
} from "@angular/fire/firestore";
import * as XLSX from "xlsx";

@Component({
  selector: "app-intr-reports",
  templateUrl: "./intr-reports.component.html",
  styleUrls: ["./intr-reports.component.scss"],
})
export class IntrReportsComponent implements OnInit {
  Intr: any;
  ctype: any = "";
  show: boolean = true;

  constructor(
    private modalController: ModalController,
    private db: Intrusions,
    private db_fs: AngularFirestore,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.db.Intrusions.subscribe((val) => {
      this.Intr = val;
      //let polys = this.getArea(this.currItem_id);
      console.log("Intrusions:", this.Intr);
    });

    let user_id = localStorage.getItem("user_id");
    this.db.getIntrusion(user_id);
  }

  shownow() {
    console.log(this.show);
    this.show = !this.show;
  }

  public exportexcel() {
    let fileName = "GSDM: Intrusions.xlsx";

    /* pass here the table id */
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "GSDM: Sections");

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  async presentConfirm(item) {
    this.alertCtrl
      .create({
        header: "Confirm Action",
        subHeader: "Delete Content",
        message: "Are you sure you want to delete this item?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
          {
            text: "Delete",
            handler: () => {
              this.db.delete(item.id);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
