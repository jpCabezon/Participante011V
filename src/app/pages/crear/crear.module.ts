import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrearPageRoutingModule } from './crear-routing.module';
import { CrearPage } from './crear.page';
import { QRCodeModule } from 'angularx-qrcode'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule,
    QRCodeModule
  ],
  declarations: [CrearPage]
})
export class CrearPageModule {}