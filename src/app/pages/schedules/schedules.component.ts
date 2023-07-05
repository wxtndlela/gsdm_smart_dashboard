import { Component, OnInit } from '@angular/core';
import {  AddScheduleComponent } from '../../pages/add-schedule/add-schedule.component';
import { Schedule } from '../../../services/db/db.addschedule';
import { AddScheduleModal } from '../../../providers/addschedule.modal';
import { PopoverController, ModalController, AlertController,NavController } from '@ionic/angular';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  Scheds: any;
  call_url: SafeResourceUrl;
  ctype: any = '';

  constructor(
    private modalController: ModalController,
    private db: Schedule,
    public sanitizer:DomSanitizer,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit(): void {

    this.db.Schedule.subscribe(val => {
      this.Scheds = val;
      //console.log('Content', this.Cont);
    })

    let user_id = localStorage.getItem('user_id');
    this.db.getSchedules(user_id);
    
  }

  view_call(type, url){
    this.call_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.ctype = type;
  }

  async presentConfirm(item) {

    this.alertCtrl.create({
      header: 'Confirm Action',
      subHeader: 'Delete Schedule',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
           this.db.delete(item.id);
          }
        }
      ]
    
    }).then(res => {

      res.present();

    });
    
  }

  async add_schedule() {
    const modal = await this.modalController.create({
      component: AddScheduleComponent,
      cssClass: 'modal-full',
      componentProps: {
        title: 'Add Schedule'
      }
    })

    await modal.present();
  }

}
