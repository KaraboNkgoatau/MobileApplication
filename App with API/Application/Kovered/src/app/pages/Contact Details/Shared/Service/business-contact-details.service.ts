import { Injectable } from '@angular/core';
import {Observable,of,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {BusinessContactDetails} from '../../Shared/Class/business-contact-details';
import {catchError,tap,map} from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Injectable ({providedIn: 'root'
})
export class BusinessContactDetailsService {
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
  // VehicleType Crud Services
getBusinessContactDetailsID(ContactDetailsID): Observable<BusinessContactDetails> {
  return this.http.get<BusinessContactDetails>(this.ApiURL + '/GetContactDetailsByID/' + ContactDetailsID,HttpOptions).pipe( catchError(this.handleError))
}
getBusinessContactDetails(): Observable<BusinessContactDetails> {
  return this.http
    .get<BusinessContactDetails>(`${this.ApiURL}/GetContactDetails`)
    .pipe(catchError(this.handleError) )
}
addBusinessContactDetails(addContactDetails): Observable<BusinessContactDetails> {
return this.http
  .post<BusinessContactDetails>(`${this.ApiURL}/AddContactDetails/`, JSON.stringify(addContactDetails), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

updateBusinessContactDetails(ContactDetailsID, Type): Observable<BusinessContactDetails> {
return this.http
  .put<BusinessContactDetails>(`${this.ApiURL}/UpdateContactDetails/${ContactDetailsID}`, JSON.stringify(Type), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

deleteBusinessContactDetails(ContactDetailsID) {
return this.http.delete<BusinessContactDetails>(this.ApiURL + '/DeleteContactDetails/' + ContactDetailsID, HttpOptions)
.pipe(catchError(this.handleError))
}
}
