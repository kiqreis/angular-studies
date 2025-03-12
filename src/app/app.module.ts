import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardButtonComponent } from './components/card-button/card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardPageComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
