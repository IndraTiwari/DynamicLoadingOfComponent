import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[zeroValidator]"
})
export class ZeroValidatorDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener("input", ["$event"]) onEvent(event: HTMLInputElement) {
    const textBoxvalue: string = this.el.nativeElement.value;

    if (textBoxvalue.charAt(0) === "0") {
      this.control.control.setValue(textBoxvalue.substring(1));
    }
  }
}
