import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiusersService {
  private userData={
    id:"number",
    username:"string",
    email:"string",
    password:"string",
    isactive: "boolean",
  }

  apiUrl = 'https://restdata011v-gu84.onrender.com/usuarios'; // Cambia esto a la URL de tu API real si es necesario.

  constructor(private httpclient: HttpClient) { }

  getUserData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : this.userData; // Datos predeterminados si no hay almacenamiento
  }
  
  updateUserData(newData: Partial<typeof this.userData>) {
    this.userData = { ...this.userData, ...newData };
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
  

  // Método para obtener la lista de usuarios
  getUsuarios(): Observable<any> {
    return this.httpclient .get<any>(this.apiUrl);
  }

  // Método para registrar un nuevo usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.httpclient.post<any>(this.apiUrl, usuario);
  }

  getUsers():Observable<any>{
    return this.httpclient.get<any>(this.apiUrl);
  }
}