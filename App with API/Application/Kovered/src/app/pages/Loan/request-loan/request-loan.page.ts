import { Component, OnInit } from '@angular/core';
import { LoanRequest } from '../Shared/Class/loan-request';
import { LoanService } from '../Shared/Service/loan.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RegisterService } from '../../../pages/registration/Shared/Service/register.service';
import { UserService } from '../../../pages/login/Shared/Service/user.service';


@Component({
  selector: 'app-request-loan',
  templateUrl: './request-loan.page.html',
  styleUrls: ['./request-loan.page.scss'],
})
export class RequestLoanPage implements OnInit {
  RequestForm: FormGroup;
  Username: any;
  data:LoanRequest;
  submitted =false;

  

  constructor(private api:LoanService,
    private requestRoute:Router,private formbuilder:FormBuilder,private _snackBar: ToastController,
    private user:UserService,public role:RegisterService,  private router:Router)
     { this.data = new LoanRequest()}


  ngOnInit(): void {
  //   this.RequestForm = this.formbuilder.group({
  //     Amount: ['', Validators.required]
  // });
  this.getUserName();
  }

  get f() { return this.RequestForm.controls; }

CreateLoanRequest(value){
this.submitted = true;
// if(this.RequestForm.invalid)
// {
//   return;
// }
// else{
  console.log(value)
  // this.api.addLoanRequest(value).subscribe((response => {
  // this.requestRoute.navigate(['client-dashboard'])}))
// }
}
Logout() {

  localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
}
getUserName(){
  this.user.userName().subscribe((data:any) => {this.Username = data})
}

AddRequest(value){
  if (value == undefined)
  {
    alert('Please enter an amount')
  }
  else
  {
  const loanRequest = {
    LoanAmount: value
  }
  this.api.addLoanRequest(loanRequest).subscribe((response => {
    this.presentToast();
   }))
    
  }
}


async presentToast() {
  const toast = await this._snackBar.create({
    message: 'Your loan request has been made.',
    duration: 2000
  });
  toast.present();
}
}

