import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DeckComponent } from './deck/deck.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { GuiaComponent } from './guia/guia.component';
import { ParcheComponent } from './parche/parche.component';
import { CardComponent } from './card/card.component';
import { DeckGuideComponent } from './deck-guide/deck-guide.component';

const routes: Routes = [
  { path: '', redirectTo: 'deck', pathMatch: 'full' },
  { 
    path: 'deck/:name', 
    component: DeckGuideComponent 
  },
  { 
    path: 'deck', 
    component: DeckComponent
  },
  { 
    path: 'noticia', 
    component: NoticiaComponent 
  },
  { 
    path: 'parche', 
    component: ParcheComponent 
  },
  { 
    path: 'guia', 
    component: GuiaComponent 
  },
  { 
    path: 'card', 
    component: CardComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
