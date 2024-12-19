import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { REgistrarse } from 'src/Interfaces/Registrarse';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
eventos: any; 
registrarseevento : REgistrarse[]=[];
  constructor(private activated: ActivatedRoute,
              private router: Router,
              private apicrud: ApicrudService
             
  ) {}

ngOnInit():void{  
  this.apicrud.getRegistraseEvento().subscribe(data =>{
  this.registrarseevento=data;})
}

agregar(){
  this.router.navigate(['/registro-eventos'])
}

regresar(){
  this.router.navigate(['/inicio'])
    }

}
