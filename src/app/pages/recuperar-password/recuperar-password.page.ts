import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  recuperarPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.recuperarPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  // Lógica para la recuperación de contraseña
  onRecuperarPassword() {
    if (this.recuperarPasswordForm.valid) {
      const { email } = this.recuperarPasswordForm.value;
      console.log('Recuperar contraseña para: ', email);
      // Aquí puedes agregar la lógica para enviar el email de recuperación con Firebase o tu backend
    }
  }

}


