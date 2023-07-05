import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VcReportsComponent } from "./vc-reports.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: VcReportsComponent }];

@NgModule({
  declarations: [VcReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VcReportsModule {}
