import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import HelloWorldFilesComponent from "./app/hello-world-files/hello-world-files.component";
import HelloWorldComponent from "./app/hello-world/hello-world.component";
import { InterpolateDataComponent } from './app/interpolate-data/interpolate-data.component';
import { EmployeeCountComponent } from './app/employee-count/employee-count.component';
import { StockExchangeComponent } from './app/stock-exchange/stock-exchange.component';
import { StockInfoComponent } from './app/stock-info/stock-info.component';
import { FormsModule } from "@angular/forms";
import DelayedRenderingDirective from "./directives/delayed-rendering.directive";
import ApplyColorDirective from "./directives/apply-color.directive";
import { AddEmployeeComponent } from './app/add-employee/add-employee.component';
import { CounterDataComponent } from './app/counter-data/counter-data.component';
import { CounterChildComponent } from './app/counter-child/counter-child.component';
import { EmployeeComponent } from './app/employee/employee.component';
import StringReplacePipe from "./pipes/string-replace.pipe";

@NgModule({
    declarations: [ 
        HelloWorldComponent,
        HelloWorldFilesComponent,
        InterpolateDataComponent,
        EmployeeCountComponent,
        StockExchangeComponent,
        StockInfoComponent,
        DelayedRenderingDirective,
        ApplyColorDirective,
        AddEmployeeComponent,
        CounterDataComponent,
        CounterChildComponent,
        EmployeeComponent,
        StringReplacePipe
    ],
    imports: [ 
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    bootstrap: [ InterpolateDataComponent ]
})
export default class AppModule { }