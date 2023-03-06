import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class NoticiaService {
    constructor(private http: HttpClient){ }
    
    getAllNews() {
        return this.http.get('http://localhost:3000/api/news/all');
    }
}