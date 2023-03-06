import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DeckService {
    deck$: Subject<any>;

    constructor(private http: HttpClient){ 
        this.deck$ = new Subject();
    }
    
    getAllDecks() {
        return this.http.get('http://localhost:3000/api/decks/all').toPromise();
    }

    addDeck(deck){
        this.deck$.next(deck);
    }

    getDeck(){
        return this.deck$.asObservable();
    }

}