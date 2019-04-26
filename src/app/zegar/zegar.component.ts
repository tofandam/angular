import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zegar',
  templateUrl: './zegar.component.html',
  styleUrls: ['./zegar.component.less']
})
export class ZegarComponent implements OnInit {

  constructor() { }

  czas: Date = new Date();

  ngOnInit() {
    setInterval( () => {
      this.czas = new Date(); 
    }, 1  );
    
  }

}
