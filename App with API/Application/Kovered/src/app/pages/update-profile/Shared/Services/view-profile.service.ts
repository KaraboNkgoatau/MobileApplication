import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {

  ApiURL = "https://localhost:44354/api/User/GetProfile";

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

ViewProfile(){
    return this.http.get("https://localhost:44354/api/User/GetProfile", HttpOptions).pipe(catchError(this.handleError))
}
}