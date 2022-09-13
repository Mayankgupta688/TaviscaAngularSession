import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import HelloWorldFilesComponent from "./app/hello-world-files/hello-world-files.component";
import HelloWorldComponent from "./app/hello-world/hello-world.component";

@NgModule({
    declarations: [ 
        HelloWorldComponent,
        HelloWorldFilesComponent 
    ],
    imports: [ BrowserModule ],
    bootstrap: [ HelloWorldComponent, HelloWorldFilesComponent]
})
export default class AppModule { }