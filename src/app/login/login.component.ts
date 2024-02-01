import { Component, NgModule } from '@angular/core';
import { NavparComponent } from '../navpar/navpar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavparComponent,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  forma = {
    email : '',
  
    password: ''
  }


  handleSubmitForm(form : any){
    // console.log(form)
    // console.log(form.value)
    if(form) {
      console.log(this.forma)
      // API CALL
    }
  }
}
