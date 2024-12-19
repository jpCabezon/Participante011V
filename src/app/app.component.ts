import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; 

/*interface Opciones{
  icon:string;
  name:string;
  redirecTo:string;
  }
  */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private navcontroller: NavController,
              private menucontroller: MenuController,
              private router:Router
  ) {}

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
    this.menucontroller.close();
  }

  closeMenu() {
    this.menucontroller.close('mainMenu'); 
  }

  logout() {
    // Aquí puedes agregar lógica adicional, como limpiar datos locales o tokens
    console.log('Sesión cerrada');
    this.menucontroller.close('mainMenu'); // Cierra el menú
    this.router.navigate(['/login']); // Redirige al login
  }
}
