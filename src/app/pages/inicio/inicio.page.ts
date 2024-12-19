import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApidatosService } from 'src/app/services/apidatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {
  imagenes: string[] = [
    'assets/eventoss.jpg',
    'assets/Inscribete.jpg',
    'assets/arrepentir.jpg',  
  ];

  eventos: any[] = [];
  currentSlide: number = 0;
  intervalId: any; // Para almacenar el ID del intervalo

  constructor(
    private menucontroller: MenuController,
    private router: Router,
    private apidatos: ApidatosService
  ) {}

  closeMenu() {
    this.menucontroller.close('mainMenu'); 
  }

  logout() {
    // Aquí puedes agregar lógica adicional, como limpiar datos locales o tokens
    console.log('Sesión cerrada');
    this.menucontroller.close('mainMenu'); // Cierra el menú
    this.router.navigate(['/login']); // Redirige al login
  }

  ngOnInit(): void {
    this.cargarApi();
    this.startCarousel(); // Iniciar el carrusel
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpiar el intervalo al destruir el componente
  }

  cargarApi() {
    this.apidatos.getPosts().subscribe((resp) => {
      console.log(resp);
      this.eventos = resp;
    });

    this.apidatos.getPosts().subscribe((datos) => (this.eventos = datos));
  }

  buscarPost(Observable: any) {
    this.router.navigate(['/detalles'], {
      queryParams: { eventos: JSON.stringify(Observable) },
    });
  }

  startCarousel() {
    // Cambiar a la siguiente imagen automáticamente cada 3 segundos
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.imagenes.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.imagenes.length) % this.imagenes.length;
  }
}