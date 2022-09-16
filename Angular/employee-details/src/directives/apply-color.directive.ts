import { InvokeFunctionExpr } from "@angular/compiler";
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export default class ApplyColorDirective {

    @Input() applyColor: string = ""; 
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        debugger;
        this.elementRef.nativeElement.style.color = this.applyColor;
    }
}