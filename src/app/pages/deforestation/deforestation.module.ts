import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DeforestationComponent } from "./deforestation.component";

const routes: Routes = [{ path: "", component: DeforestationComponent }];

@NgModule({
  declarations: [DeforestationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DeforestationModule {}
