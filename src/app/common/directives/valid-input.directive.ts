import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appValidInput]',
    standalone: true,
})

export class ValidInputDirective {
    @Input("appValidInput") appValidInput : boolean = true;

    constructor(private _el : ElementRef<HTMLInputElement>){}

    @HostListener("keyup") keyup(){
        if(this.appValidInput)
            this._el.nativeElement.className = "form-control is-valid";
        else    
            this._el.nativeElement.className = "form-control is-invalid";
    }

}