import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { AuthGuard } from './Auth/auth.guard';
import { UserService } from './pages/login/Shared/Service/user.service';
import { RegisterService } from './pages/registration/Shared/Service/register.service';
import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './pages/ContactUs/contact-us/contact-us.component';
import {TrackClaimComponent} from './pages/Track Claim/track-claim/track-claim.component';
import {WithdrawalRequestComponent} from './pages/Withdrawal Request/Withdrawal Request/withdrawal-request/withdrawal-request.component';
import { KoverComponent } from './pages/Kover/kover/kover.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ViewProfileComponent } from './pages/ViewProfile/view-profile/view-profile.component';
import { TakeComponent } from './pages/take/take.component';

//import{KoverComponent} from './pages/Kover/kover/kover.component';

// import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [AppComponent,LoginPage,RegistrationPage,ContactUsComponent,TrackClaimComponent,WithdrawalRequestComponent,KoverComponent,UpdateProfileComponent,ViewProfileComponent,TakeComponent,
    
  ],
  entryComponents: [ContactUsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     CommonModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    RegisterService,
    AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
