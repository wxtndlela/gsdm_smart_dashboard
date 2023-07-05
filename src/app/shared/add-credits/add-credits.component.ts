import { Component, OnInit, Input } from '@angular/core';
import { Transactions, Users } from '../../../services/db';
import { BillboardModal, TransactionModal, UserModal } from '../../../providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-credits',
  templateUrl: './add-credits.component.html',
  styleUrls: ['./add-credits.component.scss']
})
export class AddCreditsComponent implements OnInit {
  Balance: Number;
  public creditsForm: FormGroup;
  @Input('amt') amt;

  constructor(
    private db_transactions: Transactions,
    private db_users: Users,
    private fb: FormBuilder,
    private modalController: ModalController,
    private api: ApiService,
    private alertCtrl: AlertController
  ) {
    this.creditsForm = this.fb.group({
      amt: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.get_balance();
    if (this.amt) {
      this.creditsForm.get('amt').setValue(this.amt)
    }
  }

  async get_balance() {
    let user_id = localStorage.getItem('uuid');

    (await this.db_transactions.get(user_id))
      .subscribe(async (data: TransactionModal[]) => {
        this.Balance = data && data[0].balance ? data[0].balance : 0;
        console.log('Balance:', this.Balance)
      })
  }

  async submit() {
    (await this.db_users.get(localStorage.getItem('uuid'))).subscribe((u: UserModal) => {
      let amount = this.creditsForm.get('amt').value;
      console.log('Amt:', amount)
      this.api.init_transaction(u.email, Number(amount)).subscribe(async (res: any) => {
        console.log(res)
        if (res.data && res.data.authorization_url) {
          window.open(res.data.authorization_url, "_blank");
        } else {
          const alert = await this.alertCtrl.create({
            message: res.status
          })

          alert.present();
        }
      })
    })

  }

  async dismiss() {
    this.modalController.dismiss();
  }

}
