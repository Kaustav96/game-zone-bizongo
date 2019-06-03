import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../games';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [ GameService]
})
export class GamesComponent implements OnInit {

  games: Game[];
  game: Game;
  Rank: Number;
  Name: string;
  Platform: string;
  Year: Number;
  Genre: string;
  Publisher: string;
  Global_Sales: Number;
  Date: string;
  filter: Game = new Game();
  constructor(private gameservice: GameService) { }
  //adding the game
  addGame(){
    const newGame={
    Rank: this.Rank,
    Name: this.Name,
    Platform: this.Platform,
    Year: this.Year,
    Genre: this.Genre,
    Publisher: this.Publisher,
    Global_Sales: this.Global_Sales
    }
    this.gameservice.addGame(newGame).subscribe(game =>{
      this.games.push(game);
      this.gameservice.getGames().subscribe(games=>this.games=games);
    });
    
  }
  //deleting the contact
  deleteGame(id: any){
    var games = this.games;
    this.gameservice.deleteGame(id).subscribe(data =>{
      if(data.n==1){
        for(var i=0;i<games.length;i++){
          if(games[i]._id == id){
            games.splice(i,1);
          }
        }
      }
    });
  }
  ngOnInit() {
    //get data logic here as when we load the component we need to see the data
    this.gameservice.getGames().subscribe(games=>this.games=games);
  }
  show(){
    this.gameservice.getGames().subscribe(games=>this.games=games);
  }
  SearchByName(){
    this.games = this.games.filter(res=>{
      return res.Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
    });
  }

}
