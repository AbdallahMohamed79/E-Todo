import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { NavparComponent } from './navpar/navpar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotfoundComponent
  ,ProductsComponent,NavparComponent,LoginComponent,SignupComponent,ProductDetailsComponentComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}
