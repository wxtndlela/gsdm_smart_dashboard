import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ConstructionComponent } from "./construction.component";

const routes: Routes = [{ path: "", component: ConstructionComponent }];

@NgModule({
  declarations: [ConstructionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ConstructionModule {}
