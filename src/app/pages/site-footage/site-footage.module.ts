import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SiteFootageComponent } from "./site-footage.component";

const routes: Routes = [{ path: "", component: SiteFootageComponent }];

@NgModule({
  declarations: [SiteFootageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SiteFootageModule {}
