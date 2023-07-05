import { Component, OnInit } from '@angular/core';
import { AddCallToActionComponent  } from '../../pages/add-call-to-action/add-call-to-action.component';
import { Calltoaction } from '../../../services/db/db.calltoaction';
import { CalltoactionModal } from '../../../providers/calltoaction.modal';
import { PopoverController, ModalController, AlertController,NavController } from '@ionic/angular';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-campaigns-call-to-action',
  templateUrl: './campaigns-call-to-action.component.html',
  styleUrls: ['./campaigns-call-to-action.component.scss']
})

export class CampaignsCallToActionComponent implements OnInit {
  Cont: any;
  call_url: SafeResourceUrl;
  ctype: any = '';

  constructor(
    private modalController: ModalController,
    private db: Calltoaction,
    public sanitizer:DomSanitizer,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit(): void {

    this.db.Calltoaction.subscribe(val => {
      this.Cont = val;
      //console.log('Content', this.Cont);
    })

    let user_id = localStorage.getItem('user_id');
    this.db.getCalltoactions(user_id);
    
  }

  view_call(type, url){
    this.call_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.ctype = type;
  }

  async presentConfirm(item) {

    this.alertCtrl.create({
      header: 'Confirm Action',
      subHeader: 'Delete Call to action',
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

  async add_calltoaction() {
    const modal = await this.modalController.create({
      component: AddCallToActionComponent,
      cssClass: 'modal-full',
      componentProps: {
        title: 'Add Call To Action'
      }
    })

    await modal.present();
  }

}
