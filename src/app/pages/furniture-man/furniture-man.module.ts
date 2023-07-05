import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FurnitureManComponent } from "./furniture-man.component";

const routes: Routes = [{ path: "", component: FurnitureManComponent }];

@NgModule({
  declarations: [FurnitureManComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FurnitureManModule {}
