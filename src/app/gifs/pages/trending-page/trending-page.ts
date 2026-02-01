import { Component, inject, signal } from '@angular/core';
import { GitListComponent } from "../../components/gif-list-component/gif-list-component";
import { GifsService } from '../../services/gifs-service';

@Component({
  selector: 'app-trending-page',
  imports: [GitListComponent],
  templateUrl: './trending-page.html',
  styles: ``,
})
export default class TrendingPage {

  public gifsService = inject(GifsService);
  public images = signal(this.gifsService.trendingGifs());
}
