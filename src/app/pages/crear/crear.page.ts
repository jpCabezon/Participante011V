import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { REgistrarsee } from 'src/Interfaces/Registrarse';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  registrarse: REgistrarsee = {
    nombre: "",
    email: "",
    rut: ""
  };

  codigoQR: string = ""; // Variable para almacenar el código QR

  constructor(private router: Router, private apicrud: ApicrudService,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  CrearRegistro() {
    this.apicrud.postRegistrarse(this.registrarse).subscribe(() => {
      this.generarCodigoQR(); // Generar el código QR después de registrar

      // Programar la aparición del mensaje después de 10 segundos
      setTimeout(() => {
        this.mensaje();
      }, 10000); // 10000 milisegundos = 10 segundos
    });
  }

  generarCodigoQR() {
    // Concatenar el RUT, email y nombre para generar el contenido del código QR
    this.codigoQR = `${this.registrarse.rut},${this.registrarse.email}, ${this.registrarse.nombre}`;
  }

  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: 'Registrarse Evento',
      mode: 'ios',
      message: 'Se ha registrado con éxito!',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/registro-eventos']);
          },
        },
      ],
    });
    await alert.present();
  }
}