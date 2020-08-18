import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Field, FieldType } from './models';

const structure: Field[] = [
  {
    type: FieldType.textarea,
    name: 'comment',
    attrs: [
      { name: 'placeholder', value: 'Your comment here'},
    ]
  },
  {
    type: FieldType.input,
    validator: [Validators.required],
    name: 'password',
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
    attrs: [
      { name: 'placeholder', value: 'Username'}
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

  ngOnInit() {
    this.structure$ = of(structure);
    this.data$ = of(data);
  }

  updateForm(e) {
    console.log('********* - 50', e)
  }
}
