import { CommonModule } from "@angular/common";
import { SiteManComponent } from "./site-man.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

const routes: Routes = [{ path: "", component: SiteManComponent }];

@NgModule({
  declarations: [SiteManComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SiteManModule {}
