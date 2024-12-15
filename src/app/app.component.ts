import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TestSignalComponent } from './test-signal/test-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //NO SE USA DE MOMENTO ROUTEOUTLET EN INPORTS
  imports: [ ContainerComponent,
    FormularioComponent, TestSignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
