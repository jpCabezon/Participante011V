import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleregistroPageRoutingModule } from './detalleregistro-routing.module';

import { DetalleregistroPage } from './detalleregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleregistroPageRoutingModule
  ],
  declarations: [DetalleregistroPage]
})
export class DetalleregistroPageModule {}
