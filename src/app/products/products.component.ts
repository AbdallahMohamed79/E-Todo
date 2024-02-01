import { HeroService } from './../hero.service';


import { Component  } from "@angular/core";
import { NavparComponent } from "../navpar/navpar.component";
import { NgFor } from "@angular/common";
import { proddd } from '../../prodd';

import { RouterLink } from "@angular/router";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [NavparComponent,NgFor,RouterLink],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  proddd:any = proddd
conters:any = 0
  
decount() {

  this.HeroService.updatecont(this.conters - 1)
}




addcount(){
  this.HeroService.updatecont(this.conters + 1)
  
}
constructor( private HeroService :HeroService ){}
  ngOnInit(){
    
this.HeroService.getcounterr().subscribe((value)=> this.conters = value)

  }
}
