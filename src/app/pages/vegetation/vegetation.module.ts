import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VegetationComponent } from "./vegetation.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: VegetationComponent }];

@NgModule({
  declarations: [VegetationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VegetationModule {}
