import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

@Input() compteur:number;
@Output() computation:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public increment(){
    this.compteur++;
    this.computation.emit(
      this.compteur
    );
  }

  public decrement(){
    this.compteur--;
    this.computation.emit(
      this.compteur
    );
  }

}
