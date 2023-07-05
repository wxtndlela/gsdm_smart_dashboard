import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalsComponent } from './proposals.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProposalsComponent }
]

@NgModule({
  declarations: [ProposalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ProposalsModule { }
