import { Injectable } from '@angular/core';
import {Observable,of,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {ContactUs} from '../../Shared/Class/contact-us';
import {catchError,tap,map} from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  ApiURL = "https://localhost:44354/api/BBDetails";

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
  // ContactUS Crud Services
getBusinessContactDetailsID(ContactDetailsID): Observable<ContactUs> {
  return this.http.get<ContactUs>(this.ApiURL + '/GetContactDetailsByID/' + ContactDetailsID,HttpOptions).pipe( catchError(this.handleError))
}
getBusinessContactDetails(): Observable<ContactUs> {
  return this.http
    .get<ContactUs>(`${this.ApiURL}/GetContactDetails`)
    .pipe(catchError(this.handleError) )
}
addBusinessContactDetails(addContactDetails): Observable<ContactUs> {
return this.http
  .post<ContactUs>(`${this.ApiURL}/AddContactDetails/`, JSON.stringify(addContactDetails), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

updateBusinessContactDetails(ContactDetailsID, Type): Observable<ContactUs> {
return this.http
  .put<ContactUs>(`${this.ApiURL}/UpdateContactDetails/${ContactDetailsID}`, JSON.stringify(Type), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

deleteBusinessContactDetails(ContactDetailsID) {
return this.http.delete<ContactUs>(this.ApiURL + '/DeleteContactDetails/' + ContactDetailsID, HttpOptions)
.pipe(catchError(this.handleError))
}
}