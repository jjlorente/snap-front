import { Component, OnInit } from '@angular/core';
import { CardService } from './card.servide';
import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards: any;
  cards$: any;
  myControl = new FormControl('');

  constructor(private cardService: CardService) { }

    ngOnInit() {
      this.cardService.getAllCards().subscribe(data=>{
        this.cards$ = data;
        this.cards = data;
      });

      this.myControl.valueChanges.subscribe(newValue=>{
        this.searchCard(newValue);
      })
    }
  
  searchCard(input: string) {
    this.cards = this.cards$;
    input = input.toUpperCase();
    this.cards = this.cards.filter(data =>{
      if(data.name.toUpperCase()
        .includes(input)){ 
          return true 
        } return false })
        .map(card => { return card });
    
      this.controlTitles();
  }

  controlTitles(){
    let pool1_title = 0;
    let pool2_title = 0;
    let pool3_title = 0;

    const h1Element = document.getElementsByTagName("h1");
     
    this.cards.forEach(card => {
      if (card.pool == "1") { pool1_title++;} 
      else if (card.pool == "2") { pool2_title++; } 
      else if (card.pool == "3") { pool3_title++; }
    });

    h1Element[0].style.display = (pool1_title==0) ? h1Element[0].style.display = "none" : h1Element[0].style.display = "block";
    h1Element[1].style.display = (pool2_title==0) ? h1Element[1].style.display = "none" : h1Element[1].style.display = "block";
    h1Element[2].style.display = (pool3_title==0) ? h1Element[2].style.display = "none" : h1Element[2].style.display = "block";

    if (h1Element[0].innerHTML != "Pool 1" && pool1_title!=0){
      h1Element[0].innerHTML = "Pool 1";
    } else if (pool1_title == 0 && pool2_title == 0 && pool3_title == 0) {
      h1Element[0].style.display = "block";
      h1Element[0].innerHTML = "Prueba con otro nombre!";
    }
  }
}
