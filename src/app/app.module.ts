import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

//modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule, ThemeService } from "ng2-charts";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

//Environment secrets
import { environment } from "../environments/environment";

//components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./apps/todo-list/todo/todo.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { TodoListComponent } from "./apps/todo-list/todo-list.component";
import { LoginComponent } from "./user-pages/login/login.component";
import { RegisterComponent } from "./user-pages/register/register.component";
import { BillboardComponent } from "./shared/billboard/billboard.component";
import { ProfileComponent } from "./user-pages/profile/profile.component";
import { BookingComponent } from "./shared/booking/booking.component";
import { DatePickerComponent } from "./apps/date-picker/date-picker.component";
import { BillboardsComponent } from "./pages/billboards/billboards.component";
import { AccountsComponent } from "./pages/accounts/accounts.component";

//services
import { Users } from "../services/db/index";
import { AuthService } from "../services/auth.service";
import { GlobalSettings } from "../services/global.service";
import { PasswordService } from "../services/password.service";
import { AuthGuard } from "../services/guard/auth.guard";
import { BuyerGuard } from "../services/guard/buyer.guard";
import { OwnerGuard } from "../services/guard/owner.gaurd";
import { FileService } from "../services/file.service";
import { ApiService } from "../services/api.service";

import { GeolocationService } from "../services/geolocation.service";
import { GeoMath } from "../services/geomath";
import { FirebaseStorage } from "../services/firebase.storage.service";

//plugins
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation/ngx";
import { DeviceOrientation } from "@ionic-native/device-orientation/ngx";
import { File } from "@ionic-native/file/ngx";
import { AddCreditsComponent } from "./shared/add-credits/add-credits.component";
import { Test1Component } from "./test1/test1.component";
//import { ContentManComponent } from './pages/content-man/content-man.component';
import { AddContentComponent } from "./pages/add-content/add-content.component";
import { AddCallToActionComponent } from "./pages/add-call-to-action/add-call-to-action.component";
import { InspectionComponent } from "./pages/inspection/inspection.component";
import { InspectionPageComponent } from "./pages/inspection-page/inspection-page.component";
import { SegmentRecorderComponent } from "./pages/segment-recorder/segment-recorder.component";

import { IonicStorageModule } from "@ionic/storage-angular";

//Videogular
// import { VgCoreModule } from 'videogular2/compiled/core';
// import { VgControlsModule } from 'videogular2/compiled/controls';
// import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
// import { VgBufferingModule } from 'videogular2/compiled/buffering';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    LoginComponent,
    RegisterComponent,
    BillboardComponent,
    ProfileComponent,
    BookingComponent,
    DatePickerComponent,
    BillboardsComponent,
    AccountsComponent,
    AddCreditsComponent,
    Test1Component,
    //ContentManComponent,
    AddContentComponent,
    AddCallToActionComponent,
    InspectionComponent,
    InspectionPageComponent,
    SegmentRecorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    IonicModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    //SharedModuleModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule
  ],
  providers: [
    ThemeService,
    Users,
    AuthService,
    GlobalSettings,
    PasswordService,
    AuthGuard,
    BuyerGuard,
    Storage,
    OwnerGuard,
    FileService,
    ApiService,
    GeolocationService,
    GeoMath,
    Geolocation,
    BackgroundGeolocation,
    DeviceOrientation,
    File,
    FirebaseStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
