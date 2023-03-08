import { Component, OnInit } from '@angular/core';
import { ParcheService } from './parche.service';

@Component({
  selector: 'app-parche',
  templateUrl: './parche.component.html',
  styleUrls: ['./parche.component.css']
})
export class ParcheComponent implements OnInit {
  constructor(private parcheService: ParcheService) { }
  
  pars:any;
  ngOnInit() {
    this.parcheService.getAllNews().subscribe(data =>{
      this.pars = data;
    });
  }
}
