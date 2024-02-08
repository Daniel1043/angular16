import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 public heroNames: string[] = ["Marisco Recio","Amado Rivaz",
  "Enrique Pasto", "Coque Calatrava","Maite Figueroa"];
  public heroEliminado: string = "No se ha borrado ninguno"

  borrarHeroe (): void{
    this.heroEliminado=this.heroNames[this.heroNames.length-1]
    this.heroNames.pop()
  }
}
