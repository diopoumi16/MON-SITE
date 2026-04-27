import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
    {
        path:"",
       loadComponent:()=>import('./layout/main/main.component').then(m=>m.MainComponent),
        children:[
            {
                path:"",
                redirectTo:"accueil",
                pathMatch:"full",
            },
            {
                path:"accueil",
                loadComponent:()=>import('./pages/accueil/accueil.component').then(m=>m.AccueilComponent)
            },
            {
                path:"user",
                loadComponent:()=>import('./pages/users/users.component').then(m=>m.UsersComponent)
            },
          {
                path:"eleve",
                loadComponent:()=>import('./pages/eleve/eleve.component').then(m=>m.EleveComponent)
            },
             {
                path:"notes",
                loadComponent:()=>import('./pages/notes/notes.component').then(m=>m.NotesComponent)
            },
            {
                path:"bulletins",
                loadComponent:()=>import('./pages/bulletins/bulletins.component').then(m=>m.BulletinsComponent)
            },
              {
                

                path:"annee",
                loadComponent:()=>import('./pages/annee/annee.component').then(m=>m.AnneeComponent) 
              }
              
              
        ]
    }
];
