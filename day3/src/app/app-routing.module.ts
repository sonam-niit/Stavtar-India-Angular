import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductformComponent } from './productform/productform.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TestGuard } from './test.guard';

const routes: Routes = [
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'list',component:ProductlistComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'form',component:ProductformComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    canDeactivate:[TestGuard],
    children:[
    {path:'childa',component:ChildAComponent},
    {path:'childb',component:ChildBComponent},
  ]},
  {path:'customer', loadChildren:()=>import('./customers/customers.module')
    .then(m=>m.CustomersModule).catch(err=>err) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
