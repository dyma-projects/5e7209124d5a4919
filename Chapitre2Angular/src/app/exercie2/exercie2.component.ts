import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercie2',
  templateUrl: './exercie2.component.html',
  styleUrls: ['./exercie2.component.css']
})
export class Exercie2Component implements OnInit {

  public d(event:Event) : void{
    console.log(event);

  }
  public changeColor(color:string): void{
    this.color= color;
  }
  public color= "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
