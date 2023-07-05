import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAccountsComponent } from './service-accounts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ServiceAccountsComponent }
]

@NgModule({
  declarations: [ServiceAccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ServiceAccountModule { }
