import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-loaction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exteriro photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}</p>
    </section>
  `,
  styleUrls: ['./housing-loaction.component.css'],
})
export class HousingLoactionComponent {
  @Input() housingLocation!: HousingLocation;
}
