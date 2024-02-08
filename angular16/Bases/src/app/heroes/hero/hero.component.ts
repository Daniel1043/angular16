import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "superman";
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get nombreEnMayusculas(): string{
    return this._nombre.toUpperCase();
  }

  public edad: number = 45;

  get dimeDescripcion (): string{
    return this._nombre +  "  -  " + this.edad;
  }

  cambiarNombre (): void{
    let nuevoNombre: string | null = prompt("Dime el nuevo nombre");
    if (nuevoNombre){
      this._nombre=nuevoNombre;
    }
  }

  cambiarEdad (): void{
    let nuevoEdad: number | null = Number(prompt("Dime la nueva edad"));
    this.edad=+nuevoEdad;
    
  }

  restaurar (): void{
    this._nombre="superman";
    this.edad= 45;
  }
}
