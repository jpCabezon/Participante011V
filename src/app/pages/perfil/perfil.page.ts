import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiusersService } from 'src/app/services/apiusers.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilForm: FormGroup;
  userImage: string | null = null; // Imagen cargada por el usuario
  defaultImage = 'assets/default-avatar.png'; // Imagen predeterminada

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private api: ApiusersService
  ) { 
    // Simula datos del usuario (cargar desde el backend en un caso real)
    const userData = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '1234567890',
      image: null,
    };

    this.userImage = userData.image;
    this.perfilForm = this.fb.group({
      name: [userData.name, [Validators.required, Validators.minLength(3)]],
      email: [userData.email, [Validators.required, Validators.email]],
      phone: [userData.phone, [Validators.required, Validators.pattern(/^\d+$/)]],
    });    
  }

  ngOnInit() {
  }

   // Simula la actualización de datos en el backend
   async saveProfile() {
    if (this.perfilForm.valid) {
      const formData = this.perfilForm.value;
      console.log('Datos actualizados:', formData);

      const toast = await this.toastCtrl.create({
        message: 'Perfil actualizado con éxito',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    }
  }

  // Simula la carga de una imagen
  async uploadImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    this.userImage = image.dataUrl ?? null; // Muestra la imagen en el perfil
  }

  actualizarProfile() {
    if (this.perfilForm.valid) {
      const updatedData = this.perfilForm.value;
      this.api.updateUserData({
        ...updatedData,
        image: this.userImage,
      });
      console.log('Perfil actualizado:', updatedData);
    }
  }


}