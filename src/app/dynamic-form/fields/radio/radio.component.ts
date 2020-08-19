import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input() field: Field;
  @Input() group: FormGroup;
}
