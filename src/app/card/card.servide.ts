import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CardService {
    constructor(private http: HttpClient){ }

    getAllCards() {
        return this.http.get('http://localhost:3000/api/cards/all');
    }

    getById(id) {
        return this.http.get('http://localhost:3000/api/cards/'+id);
    }
}