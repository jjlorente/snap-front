import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ParcheComponent } from './parche/parche.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FooterComponent } from './footer/footer.component';
import { DeckGuideComponent } from './deck-guide/deck-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DeckComponent,
    CardComponent,
    FooterComponent,
    NoticiaComponent,
    DeckGuideComponent,
    ParcheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
