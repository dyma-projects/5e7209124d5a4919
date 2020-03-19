import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  title= "bonjour Dan";
  
  public square(nbr: number):number{
    return nbr*nbr;
  }
  public dan ="date";

  constructor() { }

  ngOnInit(): void {
  }

}
