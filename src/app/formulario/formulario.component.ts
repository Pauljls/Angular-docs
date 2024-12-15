import { Component, input } from '@angular/core';

@Component({
  selector: 'formularioEspecial',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  //value = input(0); -> TYPESCRIPT INFIERE EL TIPO DE DATO
  value = input<number>(0)//->DECLARACION CON TIPO DE DATO
  //ESTOS SON LLAMADOS COMO ATRIBUTOS <formularioEspecial [value]="50">
}
