import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnneeService } from '../../services/annee.service';
import { CommonModule } from '@angular/common';
import { ProfilService } from '../../services/profil.service';
import { ClasseService } from '../../services/classe.service';
import { MatiereService } from '../../services/matiere.service';
import { Annee } from '../../shared/data.interface';

@Component({
  selector: 'app-annee',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './annee.component.html',
  styleUrl: './annee.component.css'
  
})
export class AnneeComponent implements OnInit {
  anneeForm:FormGroup
  annees=signal<Annee[]>([])
  btn:string = 'Ajouter';
  clickEvent:string=''
  placeholderTexte:string='ex : 2025'
  idAnnee:number = 0;
  
  

  constructor(private fb:FormBuilder,private anneeService : AnneeService,private profilService:ProfilService,private classeService : ClasseService,private matiereService : MatiereService){
    this.anneeForm=this.fb.group({
     libelle:['',[Validators.required,Validators.maxLength(50)]] 
   
    })
    
    
  }
  
  
  ngOnInit(): void {
    this.getAnnee()
  }
  postAnnee(){
  console.log(this.anneeForm.value)
  console.log(this.clickEvent)

  if(this.btn==='Ajouter'){
    if(this.clickEvent==="Année"){ 
    this.anneeService.postAnnee(this.anneeForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        this.anneeForm.reset()
        this.getAnnee()
        
      }
      
    })
  }

  
  if(this.clickEvent==="Classe"){
    
    this.postclasse()
  }
   if(this.clickEvent==="Profil"){
    this.postprofil()
  }
    if(this.clickEvent==="matière"){
    this.postmatiere()
  }
  

  }

  else{
    if(this.clickEvent==="Profil"){
      alert(this.idAnnee)
      this.anneeService.updateProfil(this.anneeForm.value,this.idAnnee).subscribe({
        next:(response)=>{
          this.getProfil()
          this.anneeForm.reset()
        }
      }

      )

    }

     if(this.clickEvent==="classe"){
      this.anneeService.updateClasse(this.anneeForm.value,this.idAnnee).subscribe({
        next:(response)=>{
          this.getClasse()
          this.anneeForm.reset()
           this.btn = 'Ajouter'
        }
      }

      )

    }
    if(this.clickEvent==="matière"){
      alert(this.idAnnee)
      this.anneeService.updateMatiere(this.anneeForm.value,this.idAnnee).subscribe({
        next:(response)=>{
          this.getMatiere()
          this.anneeForm.reset()
         
        }
      }

      )
      

    }
    this.anneeService.updateAnnee(this.anneeForm.value,this.idAnnee).subscribe({
      next:(response)=>{
        this.getAnnee()
        this.anneeForm.reset()
        this.btn = 'Ajouter'
      }
      
    })
      
  }
  
  }
  postclasse(){
   console.log(this.anneeForm.value)
  console.log(this.clickEvent) 
    this.anneeService.postClasse(this.anneeForm.value).subscribe({
      next:(response)=>{
        console.log(response)
        this.getClasse()
      }
    })
  }
  postprofil(){
    this.anneeService.postProfil(this.anneeForm.value).subscribe({
      next:(response)=>{
        console.log(response)
        this.getProfil()
      }
    })
  }
   postmatiere(){
    this.anneeService.postMatiere(this.anneeForm.value).subscribe({
      next:(response)=>{
        console.log(response)
        this.getMatiere()
      }
    })
  }
  getAnnee(){
    this.anneeService.getAnnee().subscribe({
      next:(response:any)=>{
        console.log(response);
        
        this.annees.set(response.data)
      },
      error:(error)=>{
        console.error(error.error);
        
      }
     
    })
  
    
  }
getProfil(){
    this.profilService.getProfil().subscribe({
      next:(response:any)=>{
        console.log(response);
        
        this.annees.set(response.data)
      },
      error:(error)=>{
        console.error(error.error);
        
      }
     
    })
  
    
  }
  getClasse(){
    this.classeService.getClasse().subscribe({
      next:(response:any)=>{
        console.log(response);
        
        this.annees.set(response.data)
      },
      error:(error)=>{
        console.error(error.error);
          
      }
     
    })
  
    
  }
   getMatiere(){
    this.matiereService.getmatiere().subscribe({
      next:(response:any)=>{
        console.log(response);
        
        this.annees.set(response.data)
      },
      error:(error)=>{
        console.error(error.error);
        
      }
     
    })
  
    
  }
  
  modifierAnnee(i:any){
    this.btn = 'Modifier';
    this.idAnnee = i.id;
    this.anneeForm.patchValue(i)

    
  }
  supprimerAnnee(i:any){
  
    this.idAnnee = i.id;
    this.anneeService.deleteAnnee(this.idAnnee).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.getAnnee()
      }
    })
    
   
  }  
  activerAnnee(i:any){
  
    this.idAnnee = i.id;
    this.anneeService.activeAnnee(this.idAnnee).subscribe({
      next:(response)=>{
        this.getAnnee()
        
        
      }
      
    })
    
    
    }
    
    modifierProfil(i:any){
    this.btn = 'Modifier';
    this.idAnnee = i.id;
    this.anneeForm.patchValue(i)  
  } 
  modifierClasse(i:any){
    this.btn = 'Modifier';
    this.idAnnee = i.id;
    this.anneeForm.patchValue(i)
    
  }
    modifierMatiere(i:any){
    this.btn = 'Modifier';
    this.idAnnee = i.id;
    this.anneeForm.patchValue(i)  
  } 


  supprimerProfil(i:any){
  
    this.idAnnee = i.id;
    this.anneeService.deleteProfil(this.idAnnee).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.getProfil()
      }
    })
    
   
  }     
   supprimerClasse(i:any){
  
    this.idAnnee = i.id;
    this.anneeService.deleteClasse(this.idAnnee).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.getClasse()
      }
    })
       
  }  
supprimerMatiere(i:any){
  
    this.idAnnee = i.id;
    this.anneeService.deleteMatiere(this.idAnnee).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.getMatiere()
      }
    })
       
  }  
  
  
  goEvent(event:Event){
    const button=(event.target as HTMLButtonElement)
   if(button.textContent && button){
    let libelle= document.querySelector('#libelle') as HTMLInputElement
    this.clickEvent=button.textContent
    if(this.clickEvent=='Profil'){
      this.getProfil()
     
     this.placeholderTexte='entrer un profil'
    }
    if(this.clickEvent=='Classe'){
      this.getClasse()
     this.placeholderTexte='entrer une classe'
    }
     if(this.clickEvent=='Année'){
      this.getAnnee()
     this.placeholderTexte='entrer une annee'
    }
     if(this.clickEvent=='Matière'){
       this.getMatiere()
     this.placeholderTexte='entrer une matiere'
    }
    
   }
  }

  
  
}









