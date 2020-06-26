import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

import { Createaccount } from "./createaccount";
import { ActivatedRoute, Router } from "@angular/router";

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');
  if (passwordControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.css']
})
export class GetstartComponent implements OnInit {

  createaccountForm: FormGroup;
  pageTitle: string = "Create Your Account";
  createaccount = new Createaccount();

  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.createaccountForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      acceptTerms: [false,  Validators.pattern('true')],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required]
      }, { validators: passwordMatcher }),

    })
  }

  onBack():void{
    this.router.navigate(['/home']);
  }
  create():void{
    this.router.navigate(['/home']);
  }
}
