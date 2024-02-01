import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm : FormGroup ;
   users : any =[]
  constructor(private fb : FormBuilder){
    this.registerForm = this.fb.group({

      userName : ['' , [Validators.required , Validators.minLength(3) ]],
      email: ['', [Validators.required , Validators.email]],
      password : ['' , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) , Validators.minLength(8)]],
      rePassword : ['' ,],
      phone : ['' , [Validators.required  , Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
    }
    , {validators:[this.confirmPassword] as FormControlOptions})
  }
  confirmPassword(group:FormGroup) : void{
    const password = group.controls['password'];
    const rePassword = group.controls['rePassword'];
      if(rePassword?.value === ""){
        rePassword?.setErrors({require:true})
      }
      else if(password?.value != rePassword?.value ){
        rePassword?.setErrors({mismatch:true})
    }
  }




}
