import { HotelDirectXRouting } from './hoteldirectx.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoteldirectxHomeComponent } from './components/hoteldirectx-home/hoteldirectx-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HoteldirectxHomeComponent
  ],
  imports: [
    BrowserModule,
    HotelDirectXRouting
  ],
  exports: [
    HoteldirectxHomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
