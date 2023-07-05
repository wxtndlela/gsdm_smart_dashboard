import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calltoaction } from '../../../services/db/db.calltoaction';
import { CalltoactionModal } from '../../../providers/calltoaction.modal';
import { PopoverController, ModalController, AlertController,NavController, LoadingController } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-add-call-to-action',
  templateUrl: './add-call-to-action.component.html',
  styleUrls: ['./add-call-to-action.component.scss']
})
export class AddCallToActionComponent implements OnInit {
  isLoading = true;
  @Input('title') title;
  @Input('data') data: CalltoactionModal;
  @Input('data_id') data_id;

  contentForm: FormGroup;
  file: string | ArrayBuffer;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private db: Calltoaction,
    private loadingCtrl: LoadingController
  ) {
    this.contentForm = this.fb.group({
      name: ['', Validators.nullValidator],
      ctype: ['', Validators.nullValidator],
      curl: ['', Validators.nullValidator],
    });
  }
  ngOnInit(): void {

    if (this.data) {
      console.log(this.data)
      //this.call_url = this.data.call_url;

    } 

  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: 'please wait ...'
    })

    loading.present();


    let name = this.contentForm.get('name').value;
    let ctype = this.contentForm.get('ctype').value;
    let call_url = this.contentForm.get('curl').value;

    let _user_id = localStorage.getItem("user_id");

    let calltoaction: CalltoactionModal =
    {
      user_id: _user_id,
      name: name,
      call_type: ctype,
      call_url: call_url,
      enabled: true
    }

    console.log('calltoaction', calltoaction);

    await this.db.create(calltoaction);
    loading.dismiss();
    //this.db.getAll();
    this.dismiss();
  }

  public select_file(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // this.video = reader.result;
      console.log(reader.result);
      this.file = reader.result;
    };
  }

}
