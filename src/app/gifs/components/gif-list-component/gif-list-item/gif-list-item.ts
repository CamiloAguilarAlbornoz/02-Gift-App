import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css',
})
export class GifListItem {

  public image = input.required<String>();
}
