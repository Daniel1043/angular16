import { Component } from '@angular/core';

@Component({
  selector: 'app-conter',
  template: `<h2>Contador: {{counter}}</h2>
  <input type="button" value="+1" (click)="incrementar()">
  <input type="button" value="reset" (click)="restablecer()">
  <input type="button" value="-1" (click)="decrementar()">`,
  styles:  ``
})
export class ConterComponent {


  public _counter: number = 10;
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }
  

  incrementar (): void{
    this.counter++;
  }

  decrementar (): void{
    this.counter--;
  }

  restablecer (): void{
    this.counter= 10;
  }

}
