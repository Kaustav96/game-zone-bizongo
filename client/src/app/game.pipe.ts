import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './games';
@Pipe({
  name: 'game',
  pure: false
})
export class GamePipe implements PipeTransform {

  transform(items: Game[], filter: Game): Game[] {
    if(!items || !filter){
    return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Game) => this.applyFilter(item, filter));
  }
  applyFilter(game: Game, filter: Game): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (game[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (game[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
