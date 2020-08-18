import {
  Directive, ElementRef,
  Input,
  OnChanges,
  OnInit, Renderer2
} from '@angular/core';
import { FieldAttribute } from '../models';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicFieldAttributes]',
})
export class DynamicFieldAttributesDirective implements OnInit {
  @Input('dynamicFieldAttributes') attributes: FieldAttribute[];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    if (this.attributes) {
      this.attributes.forEach(({name, value}) => this.renderer.setAttribute(this.elementRef.nativeElement, name, String(value)))
    }
  }
}
