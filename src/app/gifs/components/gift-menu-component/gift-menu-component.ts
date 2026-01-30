import { Component } from '@angular/core';
import { GiftMenuHeaderComponent } from "../gift-menu-header-component/gift-menu-header-component";
import { GiftMenuOptionsComponent } from "../gift-menu-options-component/gift-menu-options-component";

@Component({
  selector: 'gift-menu-component',
  imports: [GiftMenuHeaderComponent, GiftMenuOptionsComponent],
  templateUrl: './gift-menu-component.html',
  styleUrl: './gift-menu-component.css',
})
export class GiftMenuComponent {

}
