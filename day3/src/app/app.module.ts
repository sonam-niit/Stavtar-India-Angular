import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custompipe';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductformComponent } from './productform/productform.component';
import { ReaderComponent } from './reader/reader.component';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component';
import { LoginComponent } from './login/login.component';
import { CustomersModule } from './customers/customers.module';
import { CustomerComponent } from './customers/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PipesComponent,
    CustomPipe,
    ProductlistComponent,
    ProductdetailsComponent,
    ProductformComponent,
    ReaderComponent,
    UserlistComponent,
    DashboardComponent,
    ChildAComponent,
    ChildBComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
