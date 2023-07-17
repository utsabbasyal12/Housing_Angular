import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLoactionComponent } from '../housing-loaction/housing-loaction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLoactionComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-loaction></app-housing-loaction>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
