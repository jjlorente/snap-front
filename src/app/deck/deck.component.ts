import { Component, OnInit } from '@angular/core';
import { DeckService } from './deck.service';
import { CardService } from '../card/card.servide';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  constructor(private deckService: DeckService) { }
  
  decks: any;
  async ngOnInit() {
    this.deckService.getAllDecks()
      .then(decks=>{
        this.decks = decks,
        this.decks.sort((a, b) => (a.pool - b.pool));
      }).catch(err => {
        console.log(err)
      })
  }

  clickDeck(deck){
    this.deckService.addDeck(deck);
  }
}
