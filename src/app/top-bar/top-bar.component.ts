import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  async close(refEl: HTMLElement){
    refEl.style.display = "none";
  }

  async toggleButton(){
    document.getElementsByTagName("mat-icon")[0].innerHTML = (document.getElementsByTagName("mat-icon")[0].innerHTML == 'menu') ? 'close' : 'menu';
    document.getElementsByTagName("nav")[0].style.display = (document.getElementsByTagName("nav")[0].style.display == 'block') ? 'none' : 'block';
  }
}
