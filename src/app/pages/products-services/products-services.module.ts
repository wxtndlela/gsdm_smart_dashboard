import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsServicesComponent } from './products-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', component: ProductsServicesComponent }
]

@NgModule({
  declarations: [ProductsServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ProductsServicesModule { }
