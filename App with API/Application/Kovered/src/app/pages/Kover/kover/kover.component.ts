import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
//import { RegisterService } from '../../../register/Shared/Service/register.service';
import { UserService} from '../../login/Shared/Service/user.service';
//import { DashboardService } from '../../ClientDashboard/Shared/Service/dashboard.service';
import {KoverService} from '../../Kover/Shared/Service/kover.service'
import {  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Component({
  selector: 'app-kover',
  templateUrl: './kover.component.html',
  styleUrls: ['./kover.component.scss'],
  
})
export class KoverComponent implements OnInit {
  panelOpenState = false;
  Username: any;
  PolicyID:number;
  ProfileData:any;
  public policy: any = [];
  content: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(
     private router:Router,private user:UserService, public api:KoverService,
     
     
  )  {} 

  Show : boolean;

  ngOnInit(){
    this.getUserName(); 
    this.api.ViewProfile(this.PolicyID).subscribe((data:any) => {
      console.log(data);
      this.ProfileData = data
    });
    
  }

  Logout() {

    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getUserName(){
    this.user.userName().subscribe((data:any) => {this,this.Username = data})
  }
  // scrollToBottomOnInit() {
  //   this.content.scrollToBottom(300);
  // }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}

