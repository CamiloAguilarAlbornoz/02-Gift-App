import { Component, input, signal } from '@angular/core';
import { GifListItem } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'git-list-component',
  imports: [GifListItem],
  templateUrl: './gif-list-component.html',
  styleUrl: './gif-list-component.css',
})
export class GitListComponent {

  public images = input.required<Gif[]>();
}
