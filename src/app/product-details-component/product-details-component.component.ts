import { Component, Input } from '@angular/core';
import { NavparComponent } from '../navpar/navpar.component'; 
import { proddd } from '../../prodd';

@Component({
  selector: 'app-product-details-component',
  standalone: true,
  imports: [NavparComponent],
  templateUrl: './product-details-component.component.html',
  styleUrl: './product-details-component.component.css'
})
export class ProductDetailsComponentComponent {

  prodact:any = proddd
@Input() id?:any;
  ngOnInit(){
this.prodact = proddd.find(item => item.id == this.id)
  }





}
