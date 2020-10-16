import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../Class/user';
import {catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly Api_Url = 'https://localhost:44354';
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }

  userRegistration(user : User,roles:string[]){
    const body = {
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      CellphoneNumber:user.CellphoneNumber,
      Gender:user.Gender,
      IdentityNumber:user.IdentityNumber,
      Address:user.Address,

      Roles: roles

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(`${this.Api_Url}/api/User/Register`, body,{headers : reqHeader});

  }
  




  getRoles(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.Api_Url + '/api/Roles/GetRoles',{headers : reqHeader});
  }
  getGenders(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get("https://localhost:44354/api/Gender/GetGender").pipe(catchError(this.handleError) )
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
  }
