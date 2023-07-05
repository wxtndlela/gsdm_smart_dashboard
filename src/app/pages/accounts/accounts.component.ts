import { Component, OnInit } from '@angular/core';
import { Transactions, Users } from '../../../services/db';
import { UserModal, TransactionModal } from '../../../providers';
import { GlobalSettings } from '../../../services/global.service';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})

export class AccountsComponent implements OnInit {
  Transaction: any[] = [];
  active_title: string = 'Transactions';

  constructor(
    private db_transactions: Transactions,
    private db_user: Users,
    private global: GlobalSettings
  ) { }

  async ngOnInit(): Promise<void> {
    this.get_transactions();
  }

  async export_as() {

  }

  navigate_view(title) {
    this.active_title = title;
    switch (title) {
      case 'Transactions':
        this.get_transactions();
        break;
        
      default:
        break;
    }
  }

  async get_transactions() {
    let user_id = localStorage.getItem('uuid');

    (await this.db_transactions.get(user_id))
      .subscribe(async (data: TransactionModal[]) => {
        this.Transaction = data;
        console.log('Transaction:', data)
      })
  }

}
