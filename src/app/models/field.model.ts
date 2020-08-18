import { ValidatorFn } from '@angular/forms';

export type FieldType = 'INPUT' | 'TEXTAREA';

export interface Field {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  validator?: ValidatorFn[];
  attrs?: any;
}
