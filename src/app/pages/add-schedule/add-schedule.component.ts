import { Component, ElementRef, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from '../../../services/db/db.addschedule';
import { AddScheduleModal } from '../../../providers/addschedule.modal';
import { PopoverController, ModalController, AlertController,NavController, LoadingController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit {
  isLoading = true;
  @Input('title') title;
  @ViewChild('name') name:ElementRef;
  schedule_name: any;
  scheduleForm: FormGroup;
  file: string | ArrayBuffer;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private db: Schedule,
    private loadingCtrl: LoadingController
  ) {

  }
  ngOnInit(): void {

  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submit() {
    if(!this.name.nativeElement.value){
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'please wait ...'
    })

    loading.present();

    this.schedule_name = this.name.nativeElement.value;


    let _user_id = localStorage.getItem("user_id");

    let addschedule: AddScheduleModal =
    {
      user_id: _user_id,
      name: this.schedule_name,
      enabled: true
    }

    console.log('Addschedule', addschedule);

    await this.db.create(addschedule);
    loading.dismiss();
    //this.db.getAll();
    this.dismiss();
  }


}
