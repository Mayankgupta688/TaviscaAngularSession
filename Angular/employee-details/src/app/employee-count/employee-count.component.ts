import { Component, EventEmitter, OnInit } from '@angular/core';
import AppService from 'src/services/app.service';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {

  employeeCount = 0;
  constructor(private _appService: AppService) {
    this.employeeCount = this._appService.employees.length;
    this._appService.employeeUpdated.subscribe(() => {
      this.employeeCount = this._appService.employees.length;
    })
  }
}

