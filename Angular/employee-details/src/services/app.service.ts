import { EventEmitter, Injectable } from "@angular/core";
import IEmployee from "../interfaces/employee.interface";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export default class AppService {

    employeeUpdated = new EventEmitter()
    updateCounterEvent = new EventEmitter()
    employees: IEmployee[] = [];

    constructor(private _httpClientService: HttpClient) {
        this.getEmployeeData();
    }

    addEmployeeData(employeeData: IEmployee) {
        debugger;
        this._httpClientService.post("http://localhost:3000/employees", employeeData).subscribe((response: any) => {
            this.getEmployeeData()
        }, () => {
            // Captures Failure
        })
    }

    getEmployeeData() {
        this._httpClientService.get("http://localhost:3000/employees").subscribe((response: any) => {
            this.employees = response;
            this.employeeUpdated.emit();
        }, () => {
            // Captures Failure
        })
    }

    deleteEmployee(employeeId: string) {
        this._httpClientService.delete("http://localhost:3000/employees/" + employeeId).subscribe(() => {
            debugger;
            // this.employees = this.employees.filter(function(employee) {
            //     return employee.id != employeeId;
            //   });
      
            // this.employeeUpdated.emit();

            this.getEmployeeData();
        }, () => {
            alert("Failed Deleting Employee From List")
        }) 
    }

    addCounter() {
        this.updateCounterEvent.emit();
    }
}