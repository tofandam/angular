import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface elementToDo {
  nazwa: string;
  dataWykonania: Date;
  Wykonane: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ListaToDoService {
lista: Array<elementToDo> = new Array<elementToDo>();
obs = new BehaviorSubject<Array<elementToDo>>([]);

dodajElement(opis: string): elementToDo
{
  let nowyElement: elementToDo = {nazwa: opis, Wykonane: false, dataWykonania: null};
  this.lista.push(nowyElement);
  this. obs.next(this.lista);
  return nowyElement;
}

usun(item)
{
  this.lista = this.lista.filter(e => e!= item);
  this.obs.next(this.lista);
}


wykonane(item: elementToDo)
{
item.Wykonane = true;
item.dataWykonania = new Date;
this.obs.next(this.lista);

}
getList()
{
  return this.obs.asObservable();
}

  constructor() {
    let lista = localStorage.getItem("listaTodo");

    if(lista != undefined && lista != "")
    this.lista = JSON.parse(lista);
    else this.lista = [];

    this. obs.next(this.lista);
    console.log(this.lista);
    this. getList().subscribe( (item) => {
      localStorage.setItem("listaToDo", JSON.stringify(this.lista));
    });
   }
}
