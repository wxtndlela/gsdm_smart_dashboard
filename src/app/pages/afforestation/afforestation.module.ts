import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AfforestationComponent } from "./afforestation.component";

const routes: Routes = [{ path: "", component: AfforestationComponent }];

@NgModule({
  declarations: [AfforestationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AfforestationModule {}
