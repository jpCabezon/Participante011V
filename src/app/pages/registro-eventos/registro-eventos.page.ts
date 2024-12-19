import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidatosService } from 'src/app/services/apidatos.service';

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.page.html',
  styleUrls: ['./registro-eventos.page.scss'],
})
export class RegistroEventosPage implements OnInit {
  eventos: any[] = [];

  constructor(private router: Router, private apidatos: ApidatosService) {}

  sendData() {
    const dataToSend = 'http://0.0.0.0:3000/registrarseevento';
    this.router.navigate(['/eventos-registrados'], {
      queryParams: { qrData: dataToSend },
    });
  } 
  
  ngOnInit(): void {
    this.cargarApi();
  }

  cargarApi() {
    this.apidatos.getPosts().subscribe(resp => {
      console.log(resp);
      this.eventos = resp;
    });
  }

  buscarPost(evento: any) {
    this.router.navigate(['/detalles'], {
      queryParams: { eventos: JSON.stringify(evento) }
    });
  }

  regresar() {
    this.router.navigate(['/inicio']);
  }

  agregar(evento: any) {
    this.router.navigate(['/crear'], {
      queryParams: { evento: JSON.stringify(evento) }
    });
  }


}




