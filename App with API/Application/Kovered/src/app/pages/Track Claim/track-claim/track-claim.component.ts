import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TrackClaim} from '../Shared/Class/track-claim'
import {TrackClaimService} from '../Shared/Service/track-claim.service'
import {UserService} from '../../../pages/login/Shared/Service/user.service'



@Component({
  selector: 'app-track-claim',
  templateUrl: './track-claim.component.html',
  styleUrls: ['./track-claim.component.scss'],
})
export class TrackClaimComponent implements OnInit {
  TrackClaimForm: FormGroup;
  Username: any;
  ClaimData: any;
  data:TrackClaim;
  submitted = false;
  constructor(private api:TrackClaimService,
    private route:Router,  private router:Router,private user:UserService,
    private formbuilder:FormBuilder) { this.data = new TrackClaim(); this.ClaimData = [];}

    ngOnInit(): void {
      this.TrackClaimForm = this.formbuilder.group({
        Description: ['', Validators.required]
    });
     this.GetClaim();
     this.getUserName();
  
    }
  
    get f() { return this.TrackClaimForm.controls; }
  
  //Get client claims
  GetClaim(){
    this.api.getClaim(this.data).subscribe((response => {
      console.log(response);
      this.ClaimData = response;
    }))
  }
  
  Logout() {
  
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  getUserName(){
    this.user.userName().subscribe((data:any) => {this,this.Username = data})
  }
  
  //Track Claim
  TrackClaim() {
    this.submitted =true;
  
    if (this.TrackClaimForm.invalid) {
         return;
      }
    else{
      this.api.getClaim(this.data).subscribe((response => {
        console.log(response);
        this.ClaimData = response;
      }))
    }
  }
  }