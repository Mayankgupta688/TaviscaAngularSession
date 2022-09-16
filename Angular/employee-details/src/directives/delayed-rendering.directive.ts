import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[delay]"
})
export default class DelayedRenderingDirective {

    @Input() delay: any = {};
    constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {}

    ngOnInit() {
        setTimeout(() => {
            this.container.createEmbeddedView(this.template)
        }, this.delay.userDelay)
    }
}