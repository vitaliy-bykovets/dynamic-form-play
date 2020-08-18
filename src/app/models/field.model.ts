import { ValidatorFn } from '@angular/forms';

export enum FieldType {
  input = 'INPUT',
  textarea = 'TEXTAREA',
  select = 'SELECT',
  radio = 'RADIO',
  checkbox = 'CHECKBOX',
}

export type AttributeName = 'placeholder' | 'type' | 'required' | 'min' | 'max' | 'rows';

export class FieldAttribute {
  name: AttributeName;
  value: string | number | boolean;
}

export class Field {
  type: FieldType;
  name: string;
  disabled?: boolean;
  classes?: string;
  id?: string;
  label?: string;
  validator?: ValidatorFn[];
  attrs?: FieldAttribute[];
  options?: any[];
}
