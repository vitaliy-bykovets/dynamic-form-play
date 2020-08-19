import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @HostBinding('class.col-2') get getColTwo() {
    return this.field?.layout?.columnSpan === 2;
  }
  @Input() field: Field;
  @Input() group: FormGroup;
}
