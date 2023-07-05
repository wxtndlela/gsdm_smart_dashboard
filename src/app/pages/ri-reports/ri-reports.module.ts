import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RiReportsComponent } from "./ri-reports.component";

const routes: Routes = [{ path: "", component: RiReportsComponent }];

@NgModule({
  declarations: [RiReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RiReportsModule {}
