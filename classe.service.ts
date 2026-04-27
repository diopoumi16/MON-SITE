import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http : HttpClient) { }

  getClasse(){
    return this.http.get('http://localhost:8000/api/liste/classe');
  }
  
  
}
