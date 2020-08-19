import { ValidatorFn } from '@angular/forms';

export enum FieldType {
  input = 'INPUT',
  textarea = 'TEXTAREA',
  select = 'SELECT',
  radio = 'RADIO',
  checkbox = 'CHECKBOX',
}

export type AttributeName = 'placeholder' | 'type' | 'required' | 'min' | 'max' | 'rows' | 'size' | 'maxlength' | 'multiple' | 'step';

export class FieldAttribute {
  name: AttributeName;
  value: string | number | boolean;
}

export class FieldLayout {
  columnSpan: number;
}

export class Field {
  type: FieldType;
  name: string;
  disabled?: boolean;
  layout?: FieldLayout;
  classes?: string;
  id?: string;
  label?: string;
  validator?: ValidatorFn[];
  attrs?: FieldAttribute[];
  options?: any[];
}
