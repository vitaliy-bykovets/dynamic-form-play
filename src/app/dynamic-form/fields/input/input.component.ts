import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @HostBinding('class.col-2') get getColTwo() {
    return this.field?.layout?.columnSpan === 2;
  }
  @Input() field: Field;
  @Input() group: FormGroup;
}
