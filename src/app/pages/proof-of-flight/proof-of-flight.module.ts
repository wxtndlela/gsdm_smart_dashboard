import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProofOfFlightComponent } from "./proof-of-flight.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: ProofOfFlightComponent }];

@NgModule({
  declarations: [ProofOfFlightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProofOfFlightModule {}
