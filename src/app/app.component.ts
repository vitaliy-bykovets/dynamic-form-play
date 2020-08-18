import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Field } from './models';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'email',
    placeholder: 'Username',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'password',
    placeholder: 'Password',
    validator: [Validators.required],
    attrs: {
      type: 'password',
    },
  },
  {
    type: 'TEXTAREA',
    name: 'comment',
    placeholder: 'Your comment here',
    validator: [],
  },
];

const data = {
  email: 'Test',
  comment: 'Test comment'
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
}
