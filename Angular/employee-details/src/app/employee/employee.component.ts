import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IEmployee from 'src/interfaces/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: IEmployee | null = null
  @Output() deleteEmployeeEvent = new EventEmitter();

  deleteEmployee(employeeId: string) {
    this.deleteEmployeeEvent.emit(employeeId);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
