import { Component } from '@angular/core';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-whishlist';
  time = new Observable(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}

DestinoAgregado(d){

  //alert(d.nombre);

}
