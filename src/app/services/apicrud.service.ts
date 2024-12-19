import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { REgistrarse, REgistrarsee } from 'src/Interfaces/Registrarse';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {
  constructor(private httpclient: HttpClient) {}

  getRegistraseEvento(): Observable<REgistrarse[]> {
    return this.httpclient.get<REgistrarse[]>(`${environment.apiUrl}/registrarseevento`);
  }

  postRegistrarse(newPersona: REgistrarsee): Observable<REgistrarsee> {
    return this.httpclient.post<REgistrarsee>(`${environment.apiUrl}/registrarseevento`, newPersona);
  }
}
