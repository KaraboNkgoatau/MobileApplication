import { Component, OnInit } from '@angular/core';
import {WithdrawalRequest} from '../../Shared/Class/withdrawal-request';
import {WithdrawalRequestService} from '../../Shared/Service/withdrawal-request.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.scss'],
})
export class WithdrawalRequestComponent implements OnInit {
  RequestForm: FormGroup;
  data:WithdrawalRequest;
  submitted =false;
  constructor(private api:WithdrawalRequestService,
    private requestRoute:Router,private formbuilder:FormBuilder)
     { this.data = new WithdrawalRequest()}


     ngOnInit(): void {
      this.RequestForm = this.formbuilder.group({
        Amount: ['', Validators.required]
    });
    }
  
    get f() { return this.RequestForm.controls; }
  
  CreateLoanRequest(){
  this.submitted = true;
  if(this.RequestForm.invalid)
  {
    return;
  }
  else{
    this.api.addRequest(this.data).subscribe((response => {
    this.requestRoute.navigate(['client-dashboard'])}))
  }
}
}
  // }
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 4000,
  //   });
  // }
  
