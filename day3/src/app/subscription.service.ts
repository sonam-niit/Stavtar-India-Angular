import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }
  private msgSrc= new BehaviorSubject<string>('Temporary Message');
  message= this.msgSrc.asObservable();

  changeMessage(msg:string){
    this.msgSrc.next(msg);
  }

}
