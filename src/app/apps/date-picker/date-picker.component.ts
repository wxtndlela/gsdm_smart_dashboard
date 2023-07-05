import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap'
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, AfterViewInit {
  @Input('date') date;
  @ViewChild('dp') datepicker: NgbDatepicker;
  d;

  constructor(
    private popoverCtrl: PopoverController,
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.date)
    this.datepicker.navigateTo(this.date);
  }

  date_changed() {
    console.log('date:', this.date)
    // this.datepicker.navigateTo(this.d);
    this.popoverCtrl.dismiss({ date: this.date })
  }

}
