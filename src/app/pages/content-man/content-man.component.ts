import { Component, OnInit } from '@angular/core';
import { AddContentComponent  } from '../../pages/add-content/add-content.component';
import { Content } from '../../../services/db/db.addcontent';
import { Addcontent } from '../../../providers/addcontent.modal';
import { PopoverController, ModalController, AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-content-man',
  templateUrl: './content-man.component.html',
  styleUrls: ['./content-man.component.scss']
})
export class ContentManComponent implements OnInit {

  Cont: any;
  content_url: any;
  ctype: any = '';

  constructor(
    private modalController: ModalController,
    private db: Content,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit(): void {

    this.db.Content.subscribe(val => {
      this.Cont = val;
      //console.log('Content', this.Cont);
    })

    let user_id = localStorage.getItem('user_id');
    this.db.getContent(user_id);
    
  }

  view_content(type, url){

    
    this.ctype = '';
    this.content_url = '';

    const timer = setTimeout(() => {
      this.ctype = type;
      this.content_url = url;
    }, 500)
    
    
  }

  async presentConfirm(item) {

    this.alertCtrl.create({
      header: 'Confirm Action',
      subHeader: 'Delete Content',
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

  async add_content() {
    const modal = await this.modalController.create({
      component: AddContentComponent,
      cssClass: 'modal-full',
      componentProps: {
        title: 'Add Content'
      }
    })

    await modal.present();
  }

}
