import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
/*
  evento: any;
  usuario: any;  // Datos del usuario
  qrData: string = ''; // Inicialización de qrData con un valor por defecto
*/
  constructor(private activatedroute: ActivatedRoute,
              private router: Router
  ) { }
 
  ngOnInit() {
     /*this.activatedroute.params.subscribe(params => {
      this.evento = params;  // Datos del evento obtenidos al navegar a la página "Datos"
      this.usuario = {
        nombre: 'Juan Pérez', // Aquí debes recuperar los datos reales del usuario autenticado
        email: 'juan.perez@example.com'
      };

      // Codificar la información del usuario y del evento en un solo string para el QR
      this.qrData = JSON.stringify({
        nombreUsuario: this.usuario.nombre,
        emailUsuario: this.usuario.email,
        nombreEvento: this.evento.nombre,
        fechaEvento: this.evento.fecha,
        horaEvento: this.evento.hora
      });
    });*/ 
  }

}






