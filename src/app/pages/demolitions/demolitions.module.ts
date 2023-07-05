import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemolitionsComponent } from "./demolitions.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: DemolitionsComponent }];

@NgModule({
  declarations: [DemolitionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DemolitionsModule {}
