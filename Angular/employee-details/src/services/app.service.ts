import { EventEmitter, Injectable } from "@angular/core";
import IEmployee from "../interfaces/employee.interface";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export default class AppService {

    employeeUpdated = new EventEmitter()
    employees: IEmployee[] = [];

    constructor(private _httpClientService: HttpClient) {
        this.getEmployeeData();
    }

    getEmployeeData() {
        this._httpClientService.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").subscribe((response: any) => {
            this.employees = response;
            this.employeeUpdated.emit();
        }, () => {
            // Captures Failure
        })
    }

    deleteEmployee(employeeId: string) {
        this.employees = this.employees.filter(function(employee) {
          return employee.id != employeeId;
        });

        this.employeeUpdated.emit();
    }
}