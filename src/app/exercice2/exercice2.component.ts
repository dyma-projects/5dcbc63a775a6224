import { Component, OnInit,ViewChild, Input, ElementRef } from '@angular/core';


@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('in', {static: true}) public input: ElementRef;

  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * afficher
   */
  public afficher() {
    this.valeur = this.input.nativeElement.value;
  }

}
