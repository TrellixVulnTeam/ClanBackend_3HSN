import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuariosService {

  
  constructor(private http: HttpClient) { }

  registrarUsuarios(user:Data)
  {
    this.http.post("http://localhost:3000/insertuser",user).subscribe(data=>
    console.log(data))
    
  }

  getUsuarios()
  {
    return this.http.get("http://localhost:3000/findusuarios")
  }
}
