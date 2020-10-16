import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'View profile',
      url: '/folder/profile',
      icon: 'person'
    },
    //{
    //   title: 'Vehicle',
    //   url: '/folder/Vehicle',
    //   icon: 'car'
    // },
    {
      title: 'My Policy',
      url: '/folder/Policy',
      icon: 'document'
    },
    {
      title: 'Banking',
      url: '/folder/Bankind  details',
      icon: 'home'
    },
    {
      title: 'Claim',
      url: '/pages/Claim',
      icon: 'home'
    },
    {
      title: 'Loan',
      url: '/pages/Loan',
      icon: 'ribbon'
    },
    {
      title: 'Policy Details',    
      url: '/folder/Our details',
      icon: 'document'
    },
    {
      title: 'ContactUs',    
      url: '/folder/Our details',
      icon: 'document'
    },
    {
      title: 'WithdrawalRequest',    
      url: '/pages/Withdrawal Request',
      icon: 'document'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Router:Router,
    public menuCtrl : MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  Logout() {
   
    localStorage.removeItem('userToken');
    this.Router.navigate(['/login']);
     this.menuCtrl.enable(false);
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }//app.component tml isloading navlinks multiple times
     
  }

 
}
