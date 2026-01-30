import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftMenuComponent } from "../../components/gift-menu-component/gift-menu-component";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, GiftMenuComponent],
  templateUrl: './dashboard-pages.html',
})
export default class DashboardPages {

}
