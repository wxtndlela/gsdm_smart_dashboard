import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { VcountManComponent } from "./vcount-man.component";

const routes: Routes = [{ path: "", component: VcountManComponent }];

@NgModule({
  declarations: [VcountManComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VcountManModule {}
