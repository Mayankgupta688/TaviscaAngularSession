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

@NgModule({
    declarations: [ 
        HelloWorldComponent,
        HelloWorldFilesComponent,
        InterpolateDataComponent,
        EmployeeCountComponent,
        StockExchangeComponent,
        StockInfoComponent 
    ],
    imports: [ 
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    bootstrap: [ StockInfoComponent ]
})
export default class AppModule { }