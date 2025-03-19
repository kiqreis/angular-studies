import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { CardButtonComponent } from '../../components/card-button/card-button.component';
import { CardPageComponent } from '../../components/card-page/card-page.component';
import { CardButtonCancelComponent } from '../../components/card-button-cancel/card-button-cancel.component';



@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardPageComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardPageComponent,
    CardButtonCancelComponent
  ]
})
export class CardManagementModule { }
