import { Component, OnInit } from '@angular/core';
import {User} from './Shared/Class/user';
import { NgForm } from '@angular/forms';
import { RegisterService } from './Shared/Service/register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastController} from '@ionic/angular';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user:User;
  roles: any[];
  submitted = false;
  GenderData:any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; //Email validation
  registerForm: FormGroup;

  constructor(private register: RegisterService,
    private router:Router, private _snackBar: ToastController,
    private formBuilder: FormBuilder,) { }

  //Retrieve genders
  // getGenders() {
  //   this.api.getGenders().subscribe(response => {
  //     console.log(response);
  //     this.GenderData = response;
  //   })
  // }

    ngOnInit() {
      this.resetForm();
      this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        tc : ['', Validators.required],
        IDnumber: ['', Validators.required],
        Description: [null, Validators.required]
      });
      this.register.getRoles().subscribe(
        (data : any)=>{
          data.forEach(obj => obj.selected = false);
          this.roles = data;
        }
      );
     // this.getGenders();



    }
    get f(){

      return this.registerForm.controls;

    }
    get data() { return this.registerForm.controls; }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: '',
      CellphoneNumber:'',
      Gender:'',
      IdentityNumber:'',
      Address: '',

    }
    if(this.roles)
    this.roles.map(x => x.selected = false);
  }

  OnSubmit(form: NgForm) {

    var x = this.roles.filter(x => x.selected).map(y => y.Name);
    this.register.userRegistration(form.value,x)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
        //  this.toastr.success('registration successful!');
          this.router.navigate(['/login']);
        }
       else
       this.router.navigate(['/Register']);
      });
  }


}
