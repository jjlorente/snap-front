import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  constructor(private noticiaService: NoticiaService) { }
  
  news:any;
  ngOnInit() {
    this.noticiaService.getAllNews().subscribe(data =>{
      this.news = data;
    });
  }
}
