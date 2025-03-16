import { Component, Input } from '@angular/core';
import { Plan } from '../../models/plan.type';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() plan: Plan = {
    infos: {
      cardStyle: "coral",
      planType: "Simple",
      price: 100
    }
  }
}
