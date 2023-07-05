import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManComponent } from './content-man.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', component: ContentManComponent }
]

@NgModule({
  declarations: [ContentManComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContentManModule { }
