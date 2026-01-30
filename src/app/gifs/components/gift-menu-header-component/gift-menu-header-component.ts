import { Component, signal } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gift-side-menu-header-component',
  imports: [],
  templateUrl: './gift-menu-header-component.html',
  styleUrl: './gift-menu-header-component.css',
})
export class GiftMenuHeaderComponent {

  protected envs = signal(environment);
}
