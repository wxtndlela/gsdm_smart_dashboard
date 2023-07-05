import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RiUploadMediaComponent } from "./ri-upload-media.component";

const routes: Routes = [{ path: "", component: RiUploadMediaComponent }];

@NgModule({
  declarations: [RiUploadMediaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RiUploadMediaModule {}
