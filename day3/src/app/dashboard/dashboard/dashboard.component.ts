import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/test.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent  implements CanComponentDeactivate{

  unsavedChanges:boolean=true;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.unsavedChanges){
      return confirm('Do you want to leave the page??');
    }
    return true;
  }

}
