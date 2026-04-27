import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
 form = new FormGroup({
    nom_utilisateur: new FormControl('', [Validators.required,Validators.maxLength(5)]),
    classe: new FormControl('', [Validators.required,Validators.maxLength(5)]),
    mot_passe: new FormControl('', [Validators.required,]),
    profil: new FormControl(""),
    role:new FormControl(""),
  });

  submit() {
    console.log(this.form.value);
  }
}
