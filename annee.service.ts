import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {

  constructor(private http : HttpClient) { }

  getAnnee(){
    return this.http.get('http://localhost:8000/api/liste/annee');
  }
  postAnnee(data:FormData){
    return this.http.post('http://localhost:8000/api/create/annee',data);
  }
  updateAnnee(data:FormData,id:number){
    return this.http.put(`http://localhost:8000/api/modifier/annee/${id}`,data);
  }
   updateProfil(data:FormData,id:number){
    return this.http.put(`http://localhost:8000/api/modifier/profil/${id}`,data);
  }
  updateMatiere(data:FormData,id:number){
    return this.http.put(`http://localhost:8000/api/modifier/matiere/${id}`,data);
  }
   deleteAnnee(id:number){
    return this.http.delete(`http://localhost:8000/api/supprimer/annee/${id}`);
  }
   activeAnnee(id:number){
    return this.http.get(`http://localhost:8000/api/active/annee/${id}`);
  }
   activeProfil(id:number){
    return this.http.get(`http://localhost:8000/api/active/Profil/${id}`);
  }
   activeMatiere(id:number){
    return this.http.get(`http://localhost:8000/api/active/matiere/${id}`);
  }
   activeClasse(id:number){
    return this.http.get(`http://localhost:8000/api/active/classe/${id}`);
  }
   postClasse(data:FormData){
    return this.http.post('http://localhost:8000/api/create/classe',data)
   }
   postProfil(data:FormData){
    return this.http.post('http://localhost:8000/api/create/profil',data)
   }
    postMatiere(data:FormData){
    return this.http.post('http://localhost:8000/api/create/profil',data)
   }
    deleteProfil(id:number){
    return this.http.delete(`http://localhost:8000/api/supprimer/profil/${id}`);
  }
   deleteMatiere(id:number){
    return this.http.delete(`http://localhost:8000/api/supprimer/matiere/${id}`);
  }
   updateClasse(data:FormData,id:number){
    return this.http.put(`http://localhost:8000/api/modifier/classe/${id}`,data);
  }
   deleteClasse(id:number){
    return this.http.delete(`http://localhost:8000/api/supprimer/classe/${id}`);
  }
 
}
