import { Component, OnInit } from '@angular/core';
import { UserService } from './Shared/Service/user.service';
import {RegisterService  } from '../registration/Shared/Service/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoginError : boolean = false;
  constructor(private login : UserService,private router : Router,public menuCtrl : MenuController , public role:RegisterService,private _snackBar: ToastController) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
     this.login.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('userName',data.userName)
      localStorage.setItem('userRoles',data.role)
      this.router.navigate(['/landing']);
      this.menuCtrl.enable(true);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
  async presentToast() {
    const toast = await this._snackBar.create({
      message: 'Incorrect UserName Or Password.',
      duration: 3000
    });
    toast.present();
  }
}
