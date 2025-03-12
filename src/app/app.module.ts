import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardManagementModule } from './modules/card-management/card-management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
