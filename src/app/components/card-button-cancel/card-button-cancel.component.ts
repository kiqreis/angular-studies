import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  standalone: false,
  templateUrl: './card-button-cancel.component.html',
  styleUrl: './card-button-cancel.component.scss'
})
export class CardButtonCancelComponent {
  @Input() cardStyle: string = "coral";
}
