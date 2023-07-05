import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { VciProcessingComponent } from "./vci-processing.component";

const routes: Routes = [{ path: "", component: VciProcessingComponent }];

@NgModule({
  declarations: [VciProcessingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VciProcessingModule {}
