import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styles: [
  ]
})
export class ReaderComponent {

  constructor(private service:SubscriptionService){}
  ngOnInit(){
    this.service.message.subscribe(message=>console.log(message))
  }
}
