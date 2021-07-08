import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewcartComponent } from './Components/viewcart/viewcart.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeDetailsComponent } from './Components/home-details/home-details.component';
import { DealsComponent } from './Components/deals/deals.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ViewcartComponent,
    ContactusComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    HomeDetailsComponent,
    DealsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
