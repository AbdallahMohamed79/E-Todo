import { Routes } from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductsComponent } from "./products/products.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProductDetailsComponentComponent } from "./product-details-component/product-details-component.component";


export const routes: Routes = [


  {
    path: "",
    component: ProductsComponent, title:"Home"
  },
  {
    path: "login",
    component: LoginComponent, title:"login",
  },
  {
    path: "sign",
    component: SignupComponent, title:"Signup"
   
  },

  {
    path: "prod/:id",
    component: ProductDetailsComponentComponent,title:"Product"
  },
  {
    path: "**",
    component: NotfoundComponent, title:"NotFound"
  },
];
