import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  icon: string,
  label: string,
  subLabel: string,
  router: string
}

@Component({
  selector: 'gift-side-menu-options-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gift-menu-options-component.html',
  styleUrl: './gift-menu-options-component.css',
})
export class GiftMenuOptionsComponent {

  protected menuOptions = signal<MenuOption[]>([
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      router: '/dashboard/search'
    }
  ]);
}
