import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GifMapper {

  public static mapGiphyToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }

  public static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyToGif)
  }
}
