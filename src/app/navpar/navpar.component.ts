import { HeroService } from './../hero.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navpar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navpar.component.html',
  styleUrl: './navpar.component.css'
})
export class NavparComponent {
  conters:any = 0
  

  constructor( private HeroService :HeroService ){}
    ngOnInit(){
      
  this.HeroService.getcounterr().subscribe((value)=> this.conters = value)
  
    }
}
