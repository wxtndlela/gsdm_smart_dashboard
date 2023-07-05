import { Component, OnInit, Input } from "@angular/core";
import { BillboardModal, TransactionModal } from "../../../providers";
import {
  AlertController,
  LoadingController,
  ModalController,
  PopoverController,
} from "@ionic/angular";
import * as moment from "moment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatePickerComponent } from "../../apps/date-picker/date-picker.component";
import { Transactions } from "../../../services/db/db.transactions";
import { AddCreditsComponent } from "../../shared/add-credits/add-credits.component";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {
  isLoading = true;
  //map: google.maps.Map;
  duration: any;
  public bookingForm: FormGroup;

  @Input("title") title;
  @Input("data") data: BillboardModal;
  total: any;
  reach: any;
  Balance: Number;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
    private db_transactions: Transactions
  ) {
    this.bookingForm = this.fb.group({
      start_date: [moment().format("D/M/YYYY"), Validators.required],
      end_date: [
        moment().add(30, "day").format("D/M/YYYY"),
        Validators.required,
      ],
    });
  }

  ngOnInit(): void {
    this.load_map();
    this.get_balance();
    this.bookingForm.get("start_date").valueChanges.subscribe(() => {
      this.calculate_estimates();
    });
    this.bookingForm.get("end_date").valueChanges.subscribe(() => {
      this.calculate_estimates();
    });
    this.calculate_estimates();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submit() {
    let loading = this.loadingCtrl.create({
      message: "Please wait ...",
    });

    if (this.total > this.Balance) {
      const alert = this.alertCtrl.create({
        message: "add credits to proceed ?",
        header: "Account balance low!",
        buttons: [
          {
            text: "Ok",
            handler: () => {
              this.add_credits(this.total);
            },
          },
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      });

      (await alert).present();
      return;
    }

    (await loading).present;

    let transaction: TransactionModal = {
      amount: Number(this.total),
      balance: Number(this.Balance) - Number(this.total),
      currency: "ZAR",
      date_created: moment().format("DD/MM/yyyy HH:MM:SS"),
      description: "ad space purchase",
      transaction_id: "",
      user_id: localStorage.getItem("uuid"),
    };

    this.db_transactions.create(transaction).then(async () => {
      // console.log('transaction recorded')
      (await loading).dismiss;
    });
  }
  async add_credits(amt) {
    const modal = this.modalController.create({
      component: AddCreditsComponent,
      componentProps: {
        amt: amt,
      },
    });

    return (await modal).present();
  }

  async get_balance() {
    let user_id = localStorage.getItem("uuid");

    (await this.db_transactions.get(user_id)).subscribe(
      async (data: TransactionModal[]) => {
        this.Balance = data && data[0].balance ? data[0].balance : 0;
        console.log("Balance:", this.Balance);
      }
    );
  }

  /**
   * load_map
   */
  public async load_map() {
    // this.map = new google.maps.Map(document.getElementById('map_canvas_booking'), {
    //   center: { lat: this.data.latitude, lng: this.data.longitude },
    //   zoom: 16,
    //   zoomControl: true,
    //   mapTypeControl: false,
    //   fullscreenControl: true,
    //   streetViewControl: true,
    //   streetViewControlOptions: {
    //     position: google.maps.ControlPosition.RIGHT_BOTTOM
    //   },
    //   zoomControlOptions: {
    //     position: google.maps.ControlPosition.LEFT_BOTTOM
    //   },
    //   fullscreenControlOptions: {
    //     position: google.maps.ControlPosition.BOTTOM_RIGHT
    //   }
    // });
    // //DarkMap by default
    // this.map.setMapTypeId('hybrid');
    // let location = { lat: this.data.latitude, lng: this.data.longitude }
    // this.add_marker(location);
  }

  add_marker(location) {
    // var icon;
    // icon = {
    //   url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    //   strokeColor: "white"
    // }
    // let marker = new google.maps.Marker({
    //   position: location,
    //   map: this.map,
    //   icon: icon
    // });
  }

  async present_date_picker(event, type) {
    let date =
      type == "start_date"
        ? this.bookingForm.get("start_date").value
        : this.bookingForm.get("end_date").value;
    date = String(date).split("/");
    const popover = await this.popoverCtrl.create({
      component: DatePickerComponent,
      event: event,
      componentProps: {
        date: {
          day: Number(date[0]),
          month: Number(date[1]),
          year: Number(date[2]),
        },
      },
    });

    popover.present();
    const data = await popover.onWillDismiss();
    type == "start_date"
      ? this.bookingForm
          .get("start_date")
          .setValue(
            `${data.data.date.day}/${data.data.date.month}/${data.data.date.year}`
          )
      : this.bookingForm
          .get("end_date")
          .setValue(
            `${data.data.date.day}/${data.data.date.month}/${data.data.date.year}`
          );
  }

  calculate_estimates() {
    let start_date = moment(
      this.bookingForm.get("start_date").value + " 00:00:00",
      "D/M/YYYY HH:mm:ss"
    );
    let end_date = moment(
      this.bookingForm.get("end_date").value + " 23:59:59",
      "D/M/YYYY HH:mm:ss"
    );

    let duration = moment.duration(end_date.diff(start_date));
    this.duration = Number(duration.asDays()).toFixed(0);
    this.total = Number(
      (this.duration / 30) * Number(this.data.peak_rate)
    ).toFixed(2);
    this.reach = Number((this.duration / 30) * Number(12345)).toFixed(0);
  }
}
