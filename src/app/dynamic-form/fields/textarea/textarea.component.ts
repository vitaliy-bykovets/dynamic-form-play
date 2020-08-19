import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../models';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @HostBinding('class.col-2') get getColTwo() {
    return this.field?.layout?.columnSpan === 2;
  }

  @Input() field: Field;
  @Input() group: FormGroup;
}
