import { EventEmitter, Injectable } from "@angular/core";
import IEmployee from "../interfaces/employee.interface";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export default class AppService {

    constructor(private _httpClientService: HttpClient) {

    }
    
    employeeUpdated = new EventEmitter()
    employees: IEmployee[] = [{
        "id": "100",
        "createdAt": "2019-07-09T18:08:17.841Z",
        "name": "Lyric Metz",
        "avatar": "https://tse4.mm.bing.net/th?id=OIP.91DtP5qZ1ZynGM4KNkqeTgHaE8&pid=Api&P=0"
      },
      {
        "id": "101",
        "createdAt": "2019-07-09T20:32:28.258Z",
        "name": "Efren Windler PhD",
        "avatar": "https://tse4.mm.bing.net/th?id=OIP.91DtP5qZ1ZynGM4KNkqeTgHaE8&pid=Api&P=0"
      },
      {
        "id": "102",
        "createdAt": "2019-07-10T03:43:08.857Z",
        "name": "Kenya Reichel",
        "avatar": "https://tse4.mm.bing.net/th?id=OIP.91DtP5qZ1ZynGM4KNkqeTgHaE8&pid=Api&P=0"
      },
      {
        "id": "103",
        "createdAt": "2019-07-09T18:06:41.721Z",
        "name": "Edmund Fisher",
        "avatar": "https://tse4.mm.bing.net/th?id=OIP.91DtP5qZ1ZynGM4KNkqeTgHaE8&pid=Api&P=0"
      }
    ]

    deleteEmployee(employeeId: string) {
        this.employees = this.employees.filter(function(employee) {
          return employee.id != employeeId;
        });

        this.employeeUpdated.emit();
    }
}