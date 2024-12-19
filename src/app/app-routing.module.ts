import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then(m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [AutorizadoGuard] 
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then(m => m.DatosPageModule),
    canActivate: [AutorizadoGuard] 
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'registro-eventos',
    loadChildren: () => import('./pages/registro-eventos/registro-eventos.module').then(m => m.RegistroEventosPageModule),
    canActivate: [AutorizadoGuard] 
  },
  {
    path: 'eventos-registrados',
    loadChildren: () => import('./pages/eventos-registrados/eventos-registrados.module').then(m => m.EventosRegistradosPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then(m => m.DetallesPageModule),
    canActivate: [AutorizadoGuard] 
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then(m => m.CrearPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalleregistro',
    loadChildren: () => import('./pages/detalleregistro/detalleregistro.module').then(m => m.DetalleregistroPageModule),
    canActivate: [AutorizadoGuard] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }