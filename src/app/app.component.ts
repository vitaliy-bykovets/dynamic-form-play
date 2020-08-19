import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Field, FieldType } from './models';

const structure: Field[] = [
  {
    type: FieldType.input,
    validator: [Validators.required],
    name: 'password',
    layout: { columnSpan: 2 },
    attrs: [
      { name: 'placeholder', value: 'Password'},
      { name: 'type', value: 'password'},
      { name: 'required', value: true},
    ],
  },
  {
    type: FieldType.input,
    validator: [Validators.required],
    name: 'email',
    disabled: true,
    layout: { columnSpan: 2 },
    attrs: [
      { name: 'placeholder', value: 'Username'}
    ]
  },

  {
    type: FieldType.radio,
    validator: [Validators.required],
    name: 'radioAlone',
    label: 'Standalone radio'
  },

  {
    type: FieldType.radio,
    validator: [Validators.required],
    name: 'radio',
    options: [
      {
        value: 'radio_1',
        description: 'Radio 1'
      },
      {
        value: 'radio_2',
        description: 'Radio 2'
      },
      {
        value: 'radio_3',
        description: 'Radio 3'
      }
    ]
  },
  {
    type: FieldType.select,
    validator: [Validators.required],
    name: 'select',
    label: 'With label',
    attrs: [
      { name: 'placeholder', value: 'Select'}
    ],
    options: [
      {
        value: 'text',
        description: 'Text'
      },
      {
        value: 12345,
        description: 'Number'
      }
    ]
  },
  {
    type: FieldType.textarea,
    name: 'comment',
    attrs: [
      { name: 'placeholder', value: 'Your comment here'},
    ]
  },
  {
    type: FieldType.checkbox,
    name: 'checkbox',
    label: 'Checkbox'
  },
];

const data = {
  email: 'Test',
  comment: 'Test comment',
  select: 12345
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;

  formValues: any;

  ngOnInit() {
    this.structure$ = of(structure);
    this.data$ = of(data);
  }

  updateForm(e) {
    this.formValues = e;
  }

  sendForm() {

  }
}
