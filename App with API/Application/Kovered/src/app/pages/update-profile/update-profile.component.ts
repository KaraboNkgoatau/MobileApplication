import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UpdateProfile}from '../update-profile/Shared/Class/update-profile';
import {UpdateProfileService} from '../update-profile/Shared/Services/update-profile.service'
import {ViewProfileService} from '../update-profile/Shared/Services/view-profile.service'
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {

  Id: string;
  data: UpdateProfile;
  ProfileData:any;
  updateProfile: FormGroup;
  submitted = false;
  Username: any;

  constructor(
    private router:Router,private activateRoute: ActivatedRoute,
    private pApi:ViewProfileService, 
    private formbuilder:FormBuilder,private api:UpdateProfileService
  ) {this.data = new UpdateProfile();}
  ngOnInit() {
    const user =  JSON.parse(localStorage.getItem('clientUpdate'));
    this.updateProfile = this.formbuilder.group({
      Name: [user.FirstName, Validators.required],
      Surname: [user.LastName, Validators.required],
      Email: [user.Email, [Validators.required,Validators.email]],
      ID: [user.IdentityNumber, Validators.required],
      Address: [user.Address, Validators.required],
      PhoneNumber: [user.PhoneNumber, Validators.required],
      Gender: [user.Gender, Validators.required],
  });
  this.pApi.ViewProfile().subscribe((data:any) => {
    
    this.ProfileData = data;
    
    console.log(this.ProfileData);
    // alert(this.ProfileData.FirstName)

});

}
updateUserProfile() {
  this.submitted =true;


      const profile = {
        FirstName: this.updateProfile.get('Name').value,
        LastName: this.updateProfile.get('Surname').value,
        IdentityNumber:this.updateProfile.get('ID').value,
        Address:this.updateProfile.get('Address').value,
        GenderID:this.updateProfile.get('Gender').value,
        PhoneNumber:this.updateProfile.get('PhoneNumber').value,
        Email: this.updateProfile.get('Email').value,
      };
      console.log(profile)
      this.api.updateUser(profile).subscribe(response => {
      this.router.navigate(['view-profile']);
  })
  

}
get f() { return this.updateProfile.controls; }
Logout() {

  localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
}
}
