import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Addcontent } from '../../../providers/addcontent.modal';
import { Content  } from '../../../services/db/db.addcontent';
import * as moment from 'moment';
import { FirebaseStorage } from '../../../services/firebase.storage.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { formatDate } from "@angular/common";


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  isLoading = true;
  @Input('title') title;
  @Input('data') data: Addcontent;
  @Input('data_id') data_id;

  contentForm: FormGroup;
  content_type: any;
  content_url: any;
  file: string | ArrayBuffer;
  folderName: any;

  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private db: Content,
    private storage: FirebaseStorage,
    private loadingCtrl: LoadingController
  ) {
    this.contentForm = this.fb.group({
      name: ['', Validators.nullValidator],
      ctype: ['', Validators.nullValidator],
    });
  }
  ngOnInit(): void {
    const dateNow = new Date();
    this.folderName = formatDate(dateNow,'yyyyMMdd','en-ZA');

    if (this.data) {
      console.log(this.data)
      this.content_type = this.data.content_type;
      this.content_url = this.data.content_url;

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
  
    this.content_url = await (await this.storage.pushFileToStorage('sitelive/content/'+this.folderName, this.file)).getDownloadURL();

    

    console.log(this.content_url);

    let _user_id = localStorage.getItem("user_id");

    let content: Addcontent =
    {
      user_id: _user_id,
      content_id: '',
      content_type: ctype,
      name: name,
      content_url: this.content_url,
      enabled: true,
      approved: false
    }

    console.log('Content', content);

    await this.db.create(content);
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
