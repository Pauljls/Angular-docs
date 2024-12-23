import { Component, input as inputSingal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  //usando inputSingal
  myName = signal('pedro');
  booleanValue = signal(true);
  myArray = signal([
    'item 1',
    'item 2',
    'item 3',
  ]);

  anotherList = inputSingal.required<string[]>()
  myFinalArray = computed(()=> this.myArray)
  
  //COMPUTED SIRVE APRA MANEJAR ESTADOS PUES GENERA VALROES 
  //EN FUNCION DE OTRAS SEÑALES
  //label = computed(()=>`El valor es ${this.value()}`);

  miEvento() : void{
    alert('acabas de dar un click')
  }
}


