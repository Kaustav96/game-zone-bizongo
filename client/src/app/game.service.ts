import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import { Game } from './games';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor( private http:Http) { }
    //retrieving Games
  getGames(){
    return this.http.get('http://localhost:3000/api/games').pipe(map(res=>res.json()));
  }

  //addGame method
  addGame(newGame){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/game',newGame,{headers: headers})
    .pipe(map(res=>res.json()));
  }

  //delete method
  deleteGame(id){
    return this.http.delete('http://localhost:3000/api/game/'+id).pipe(map(res=>res.json()));
  }
}