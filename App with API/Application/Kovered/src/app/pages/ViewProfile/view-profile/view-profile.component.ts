import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ViewProfileService} from '../../update-profile/Shared/Services/view-profile.service';
import {UserService} from '../../login/Shared/Service/user.service';
import {RegisterService} from '../../registration/Shared/Service/register.service'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  Username: any;
  ProfileData:any;

  constructor(
    private router:Router,private user:UserService,public role:RegisterService, public api:ViewProfileService
  ) { }

  ngOnInit() {
    this.getUserName();
    this.api.ViewProfile().subscribe((data:any) => {
      this.ProfileData = data
      console.log(data)
    localStorage.setItem('clientUpdate',JSON.stringify(data));
    });
  }
  Logout() {

    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  getUserName(){
    this.user.userName().subscribe((data:any) => {this,this.Username = data})
  }
}
