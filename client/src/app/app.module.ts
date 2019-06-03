import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamePipe } from './game.pipe';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
