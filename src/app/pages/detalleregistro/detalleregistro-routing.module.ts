import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleregistroPage } from './detalleregistro.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleregistroPageRoutingModule {}
