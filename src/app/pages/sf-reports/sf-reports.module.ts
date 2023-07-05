import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SfReportsComponent } from "./sf-reports.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: SfReportsComponent }];

@NgModule({
  declarations: [SfReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SfReportsModule {}
