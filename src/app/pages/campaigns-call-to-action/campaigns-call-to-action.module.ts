import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsCallToActionComponent } from './campaigns-call-to-action.component';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


const routes : Routes = [
  { path: '', component: CampaignsCallToActionComponent }
]


@NgModule({
  declarations: [CampaignsCallToActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CampaignsCallToActionModule { }
