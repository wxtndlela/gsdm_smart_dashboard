import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './media-player.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', component: MediaPlayerComponent }
]

@NgModule({
  declarations: [MediaPlayerComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MediaPlayerModule { }
