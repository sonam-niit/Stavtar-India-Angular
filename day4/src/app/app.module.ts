import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
