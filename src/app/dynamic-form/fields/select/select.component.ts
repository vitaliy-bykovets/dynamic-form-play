import { Component, HostBinding, Input } from '@angular/core';
import { Field } from '../../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @HostBinding('class.col-2') get getColTwo() {
    return this.field?.layout?.columnSpan === 2;
  }
  @Input() field: Field;
  @Input() group: FormGroup;
}
