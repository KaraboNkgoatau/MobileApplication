import { Injectable } from '@angular/core';
import {UpdateProfile} from '../Class/update-profile'
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {
  ApiURL = "https://localhost:44354/api/User/UpdateDetails";

  constructor(private http:HttpClient ) { }
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

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


updateUser(thisProfileData):Observable<UpdateProfile> {
return this.http.put<UpdateProfile>(this.ApiURL,thisProfileData ,HttpOptions)
  .pipe(catchError(this.handleError)
  )
}
}
