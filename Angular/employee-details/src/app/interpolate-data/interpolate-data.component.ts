import { Component, OnInit } from '@angular/core';
import AppService from 'src/services/app.service';
import abc from "./commonFile";

interface IEmployee {
  name: string;
  createdAt: string;
  id: string;
  avatar: string;
}

@Component({
  selector: 'app-interpolate-data',
  templateUrl: './interpolate-data.component.html',
  styleUrls: ['./interpolate-data.component.css'],
  providers: [AppService]
})
export class InterpolateDataComponent {

  deleteEmployee(employeeId: string) {
    this._appService.deleteEmployee(employeeId);
  }

  displayStatus(empId: number) {
    if(+empId % 2 == 0) {
      return `Even`
    } 
    return abc()
  }

  filterData(event: Event) {
    var userEntry = (event.target as HTMLInputElement).value;

    this.displayList = this.employees.filter(function(employee) {
      return employee.name.indexOf(userEntry) > -1;
    });
  }

  displayList: IEmployee[] = [];

  employees: IEmployee[] = [];

  constructor(private _appService: AppService) {
    this.employees = this._appService.employees;
    this.displayList = this.employees;

    this._appService.employeeUpdated.subscribe(() => {
      this.employees = this._appService.employees;
      this.displayList = this.employees;
    })
  }
}
