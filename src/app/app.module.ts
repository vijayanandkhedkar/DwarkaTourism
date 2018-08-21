import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { DisplayComponent } from './display/display.component';
import {RouterModule} from '@angular/router';
import {DisplayServices} from './services/display.services';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginDetailsComponent } from './login-details/login-details.component';
import {LoginService} from './services/login.service';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MedicalStoresComponent } from './medical-stores/medical-stores.component';
import {MedicalstoreService} from './services/medicalstore.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    DisplayComponent,
    LoginDetailsComponent,
    AdminhomeComponent,
    ErrorComponent,
    HomeComponent,
    MedicalStoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  FormsModule,
	  ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'content/home', component: HomeComponent},
      {path: 'content/medicalstore', component: MedicalStoresComponent},
      {path: 'content/:display', component: ContentComponent},
      //{path: 'home/update', component: LoginDetailsComponent},
      //{path: 'admin/login', component: LoginDetailsComponent},
      //{path: 'admin/home', component: AdminhomeComponent},
      //{path: 'admin/home/:update', component: AdminhomeComponent},
      {path: 'medicalstores', component: MedicalStoresComponent},
      {path: 'error', component: ErrorComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [
    DisplayServices,
    LoginService,
    MedicalstoreService,
    { provide: ErrorHandler, useClass: ErrorComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
