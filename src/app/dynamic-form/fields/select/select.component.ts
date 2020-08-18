import { Component, Input } from '@angular/core';
import { Field } from '../../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() field: Field;
  @Input() group: FormGroup;
}
