import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  standalone: true,
  imports: [MatCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent {

@Input() header: string | undefined;
@Input() content: string | undefined;
@Input() imagen: string | undefined;
@Input() actions: string | undefined;
@Input() footer: string | undefined;


}
