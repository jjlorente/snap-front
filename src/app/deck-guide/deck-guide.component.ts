import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck/deck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-guide',
  templateUrl: './deck-guide.component.html',
  styleUrls: ['./deck-guide.component.css']
})
export class DeckGuideComponent implements OnInit {
  constructor(private deckService: DeckService, private router: Router) { }
  
  deck:any;
  otherDecks: any;
  deckName: string;
  public href: string = "";
  async ngOnInit() {
    this.windowScroll();
    
    if(history.state){
      this.deck = history.state
    }

    Promise.all([
      this.deckService.getDeck().subscribe(data=>{
        this.deck = data
      })
    ])

    this.deckName = this.deck.name;

    await this.deckService.getAllDecks()
      .then(decks => {
        this.otherDecks = decks
        console.log("Other Decks")
      })
      .catch(err => console.log("Other decks error:"+ err))
  }

  goBack(){
    this.router.navigate(['/deck'])
  }

  async clickOtherDeck(deck){
    this.deckName = deck.name;
    this.windowScroll();
    this.deckService.addDeck(deck);
  }

  async windowScroll() {
    window.scroll({
      top: 0,
      left: 0
    });
  }
}
