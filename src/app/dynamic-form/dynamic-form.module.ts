import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './disable-control.directive';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InputComponent } from './fields/input/input.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { SelectComponent } from './fields/select/select.component';
import { DynamicFieldAttributesDirective } from './dynamic-field-attributes.directive';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    DynamicFieldAttributesDirective,
    DisableControlDirective,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [InputComponent, TextareaComponent, SelectComponent, RadioComponent, CheckboxComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
