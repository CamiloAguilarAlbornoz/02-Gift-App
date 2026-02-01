import { Component, inject, signal } from '@angular/core';
import { GitListComponent } from "../../components/gif-list-component/gif-list-component";
import { GifsService } from '../../services/gifs-service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GitListComponent],
  templateUrl: './search-page.html',
  styles: ``,
})
export default class SearchPage {

  private gifService = inject(GifsService);
  public gifs = signal<Gif[]>([]);

  public search(query: string) {
    this.gifService.searchGifs(query).subscribe(response => {
      this.gifs.set(response);
    });
  }
}
