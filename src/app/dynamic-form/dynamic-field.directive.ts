import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';

import { InputComponent } from './fields/input/input.component';
import { RadioComponent } from './fields/radio/radio.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { Field, FieldType } from '../models';
import { SelectComponent } from './fields/select/select.component';

const componentsMapper: { [key: string]: Type<any> } = {
  [FieldType.input]: InputComponent,
  [FieldType.textarea]: TextareaComponent,
  [FieldType.select]: SelectComponent,
  [FieldType.radio]: RadioComponent,
  [FieldType.checkbox]: CheckboxComponent,
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() field: Field;
  @Input() group: FormGroup;
  component: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    const component = this.resolver.resolveComponentFactory<any>(componentsMapper[this.field.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.field = this.field;
    this.component.instance.group = this.group;
  }
}
