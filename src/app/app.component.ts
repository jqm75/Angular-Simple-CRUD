import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employeeArr: Employee[] = [
    {id: 1, name: 'Albert', country: 'Spain'},
    {id: 2, name: 'Eve', country: 'USA'},
    {id: 3, name: 'Jordan', country: 'United Kingdom'},
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArr.length +1;
      this.employeeArr.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee) { 
    this.selectedEmployee = employee;
  }

  delete() {
    if(confirm('Are you sure you want delete it?')){
      this.employeeArr = this.employeeArr.filter(e => e != this.selectedEmployee); // Por cada elemento de array que sea diferente al elemento seleccionado
      this.selectedEmployee = new Employee();
    }
  }
}
