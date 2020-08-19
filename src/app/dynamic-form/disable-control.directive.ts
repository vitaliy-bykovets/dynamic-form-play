import { Directive, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable:directive-selector
  selector: '[disableControl]'
})
export class DisableControlDirective implements OnChanges {

  // tslint:disable-next-line
  @Input('disableControl') disableControl: boolean;

  constructor(private ngControl: NgControl) {}

  ngOnChanges() {
    if (this.disableControl) {
      this.ngControl.control.disable();
    } else {
      this.ngControl.control.enable();
    }

  }

}
