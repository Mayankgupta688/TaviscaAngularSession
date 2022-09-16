import { Component, OnInit } from '@angular/core';
import AppService from 'src/services/app.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  name: string = "";
  id: string = "";
  createdAt: string = "";
  avatar: string = "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg";

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    debugger;
    this._appService.addEmployeeData({
      name: this.name,
      id: this.id,
      avatar: this.avatar,
      createdAt: this.createdAt
    })
  }

}
