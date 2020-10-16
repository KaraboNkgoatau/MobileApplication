import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Forgot} from '../forgot-password/Shared/Class/forgot';
import {ForgotService} from '../forgot-password/Shared/Service/forgot.service';
//import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  PasswordForm: FormGroup;
  data:Forgot;
  submitted = false;
  constructor(private api:ForgotService, //private _snackBar: MatSnackBar,
    private route:Router,
    private formbuilder:FormBuilder) { this.data = new Forgot()}

  ngOnInit(): void {
    this.PasswordForm = this.formbuilder.group({
      Description: [null, Validators.required]
  });
  }

  get f() { return this.PasswordForm.controls; }


changePassword() {
  this.submitted =true;

  if (this.PasswordForm.invalid) {
       return;
    }
  else{
    this.api.changePassword(this.data).subscribe((response => {
      this.route.navigate(['login'])
    }))
  }
  // }

  // openSnackBar(message: string, action: string) {
  //   this.submitted =true;

  //   if (this.PasswordForm.invalid) {
  //        return;
  //     }
  //   else{
  //   this._snackBar.open(message, action, {
  //     duration: 4000,
  //   });
  // }
}
}
