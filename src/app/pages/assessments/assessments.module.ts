import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AssessmentsComponent } from "./assessments.component";

const routes: Routes = [{ path: "", component: AssessmentsComponent }];

@NgModule({
  declarations: [AssessmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AssessmentsModule {}
