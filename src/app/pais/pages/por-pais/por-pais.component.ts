import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  constructor( private PaisService: PaisService){}

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
      }, (err) => {
        this.hayError = true;
      }
      );
  }
}
