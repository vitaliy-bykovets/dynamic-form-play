import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @HostBinding('class.col-2') get getColTwo() {
    return this.field?.layout?.columnSpan === 2;
  }
  get id() {
    return this.field.id || this.field.name
  }
  @Input() field: Field;
  @Input() group: FormGroup;
}
