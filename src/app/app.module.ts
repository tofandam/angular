import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ListaComponent } from './lista/lista.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';
import { KONRADComponent } from './konrad/konrad.component';
import { ListaToDoService } from './lista-to-do.service';
import { ListaWykonanaComponent } from './lista-wykonana/lista-wykonana.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ListaComponent,
    KalkulatorComponent,
    KONRADComponent,
    ListaWykonanaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListaToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
