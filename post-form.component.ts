import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  //  public commenttext:string;

  form: any = new FormGroup({
    title: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  get title() {
    return this.form.get('title');
  }

  get comment() {
    return this.form.get('comment');
  }

  constructor() {}

  ngOnInit(): void {
  }

  submit() {
  }
}
