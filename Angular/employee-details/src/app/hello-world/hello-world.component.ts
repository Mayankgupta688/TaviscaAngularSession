import { Component } from "@angular/core"

@Component({
    selector: "app-hello-world",
    template: `
        <div>
            <h2>Welcome to TechnoFunnel</h2>
            <h3>This is Sesion by Mayank</h3>
            <h4>Angular Session in 6 Days</h4>
            <div>
                <h5>This is Another Div</h5>
            </div>
        </div>
    `,
    styles: ["h2{color: red}", "h3{color: grey}"]
})
export default class HelloWorldComponent { }