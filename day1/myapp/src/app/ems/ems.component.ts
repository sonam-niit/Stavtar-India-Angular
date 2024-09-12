import { Component } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EmsComponent {

  employees: Employee[] = [];
  emp: Employee = { id: 0, name: '', department: '', salary: '' }
  editData: boolean = false;

  saveEmp() {
    if (!this.editData) {
      this.emp.id = Math.floor(Math.random() * 1000);
      this.employees.push(this.emp);
    }else{
      this.employees.forEach(user=>{
        if(user.id==this.emp.id){
          user.name=this.emp.name;
          user.department=this.emp.department;
          user.salary=this.emp.salary;
        }
      })
      alert('updated');
      this.editData=false;
    }
    this.emp = { id: 0, name: '', department: '', salary: '' }
  }
  editForm(id: number) {
    const found = this.employees.find(emp => emp.id == id);
    if (found) {
      this.editData = true;
      this.emp = found;
      this.emp.id=id;
    } else {
      alert("No data available to edit")
    }

  }

}
