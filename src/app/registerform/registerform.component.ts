import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Candidate, RegistrationType } from '../shared/candidate';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  @ViewChild('fform') registerFormDirective;
  registerForm: FormGroup;
  candidate: Candidate;
  errMess: string;
  registerationType = RegistrationType;

  formErrors = {
    'name' : '',
    'mobile': '',
    'email' : '',
    'registrationtype': '',
    'numtickets' : ''
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },

    'mobile': {
      'required':      'Mobile number is required.',
      'pattern':       'Mobile number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'registrationtype' : {
      'required': 'Registration Type is required.'
    },
    'numtickets' : {
      'required' : 'Number of Tickets is required.'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }



  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required , Validators.minLength(2), Validators.maxLength(25)]],
      mobile: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      registrationtype: ['', Validators.required],
      numtickets: ['1', Validators.required]
    });
    this.registerForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  onValueChanged( data?: any) {
    if (!this.registerForm) {return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if ( this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for ( const key in control.errors) {
              if ( control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + '';
              }
            }
        }
      }
    }
  }

  ngOnInit() {
  }
  onSubmit() {
    this.candidate = this.registerForm.value;
    console.log(this.candidate);
    this.registerForm.reset({
      name: '',
      mobile: '',
      email: '',
      registrationtype: 'Self',
      numtickets: '1'
    });
    // this.registerForm.reset();
    this.registerFormDirective.resetForm();
  }
}
