import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IntrReportsComponent } from "./intr-reports.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: IntrReportsComponent }];

@NgModule({
  declarations: [IntrReportsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IntrReportsModule {}
