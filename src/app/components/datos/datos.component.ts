import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
   public name:string ='Jose';
   public numero:number = 10;

   sumar( s1:number, s2:number):number{
    let suma;
    suma = s1 + s2;
    return suma;
   }

}
