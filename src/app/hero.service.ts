import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private conter = new BehaviorSubject<number>(0)
  constructor(  ) {}

  
  
getcounterr(){

  return this.conter.asObservable();
}




updatecont(newcount :number){

  this.conter.next(newcount)

}
}
  