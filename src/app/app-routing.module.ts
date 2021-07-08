import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { DealsComponent } from './Components/deals/deals.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ViewcartComponent } from './Components/viewcart/viewcart.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
    {path:"deals",component:DealsComponent}
  ]},
  {path:"login",component:LoginComponent},
  {path:"viewcart",component:ViewcartComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"**",component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
