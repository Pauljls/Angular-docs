import { Component, input} from '@angular/core';

@Component({
  selector: 'app-test-signal',
  standalone: true,
  imports: [],
  templateUrl: './test-signal.component.html',
  styleUrl: './test-signal.component.css'
})
export class TestSignalComponent {
  //SE USA TRANSFORM AGREGAR UNA FUNCION 
  //Y TRANSFORMAR EL VALOR QUE ENTRA POR INPUT, SIMILAR A MAP
  
  label = input('',{transform: trimString});
}

function trimString(value: string | undefined): string{
  return value?.trim() ?? '';
}
