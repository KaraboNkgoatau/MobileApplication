import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import {ContactUsComponent} from './pages/ContactUs/contact-us/contact-us.component'
import { KoverComponent } from './pages/Kover/kover/kover.component';
import { TakeComponent } from './pages/take/take.component';
import {TrackClaimComponent} from './pages/Track Claim/track-claim/track-claim.component'
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ViewProfileComponent } from './pages/ViewProfile/view-profile/view-profile.component';
import {WithdrawalRequestComponent} from './pages/Withdrawal Request/Withdrawal Request/withdrawal-request/withdrawal-request.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'Loan',
    loadChildren: () => import('./pages/Loan/request-loan/request-loan.module').then( m => m.RequestLoanPageModule),
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule),canActivate: [AuthGuard],
  },
  {
    path: 'Claim',
    loadChildren: () => import('./pages/Claim/claim/claim.module').then( m => m.ClaimPageModule),canActivate: [AuthGuard],
  },
  {
    path: 'Contact Details',
    loadChildren: () => import('./pages/Contact Details/contact-details/contact-details.component').then( m => m.ContactDetailsComponent)
  },
  {
    path:'Contact Us',
    loadChildren: () => import ('./pages/ContactUs/contact-us/contact-us.component').then(m=>m.ContactUsComponent)
  },
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Track Claim',component:TrackClaimComponent},
  {path:'Withdrawal Request',component:WithdrawalRequestComponent},
  {path:'Kover',component:KoverComponent},
  {path:'update-profile',component:UpdateProfileComponent},
  {path:'view-profile',component:ViewProfileComponent},
  {path:'take',component:TakeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
