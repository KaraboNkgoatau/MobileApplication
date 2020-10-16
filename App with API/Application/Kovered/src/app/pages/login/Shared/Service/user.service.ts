import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../Class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly Api_Url = 'https://localhost:44354';
  constructor(private http: HttpClient) { }

  userRegistration(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      CellphoneNumber:user.CellphoneNumber,
      Gender:user.Gender,
      IdentityNumber:user.IdentityNumber,
      Address:user.Address


    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.Api_Url + '/api/User/Register', body,{headers : reqHeader});

  }

userAuthentication(userName, password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.Api_Url + '/Token', data, { headers: reqHeader });
}

userName()
{
  return this.http.get(this.Api_Url + '/api/GetUsername')
}

}
