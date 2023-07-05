import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SegmentsComponent } from "./segments.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: SegmentsComponent }];

@NgModule({
  declarations: [SegmentsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class SegmentsModule {}
