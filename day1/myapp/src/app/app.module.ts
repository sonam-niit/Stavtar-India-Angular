import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeCoverComponent } from './home-cover/home-cover.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { EmsComponent } from './ems/ems.component';
import { ChildComponent } from './child/child.component';
import { DemoviewchildComponent } from './demoviewchild/demoviewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCoverComponent,
    DataBindingComponent,
    DirectiveComponent,
    TodoappComponent,
    EmsComponent,
    ChildComponent,
    DemoviewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
