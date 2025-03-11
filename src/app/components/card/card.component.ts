import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardStyle: string = "coral";
  @Input() planType: string = "Simple";
  @Input() price: number = 100;
}
