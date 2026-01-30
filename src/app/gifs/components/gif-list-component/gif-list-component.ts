import { Component, input, signal } from '@angular/core';
import { Gif } from '../../interfaces/gif';
import { GifListItem } from "./gif-list-item/gif-list-item";

@Component({
  selector: 'git-list-component',
  imports: [GifListItem],
  templateUrl: './gif-list-component.html',
  styleUrl: './gif-list-component.css',
})
export class GitListComponent {

  public images = input.required<String[]>();
}
