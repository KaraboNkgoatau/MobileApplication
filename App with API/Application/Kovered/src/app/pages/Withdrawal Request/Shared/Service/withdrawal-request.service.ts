import { Injectable } from '@angular/core';
import {WithdrawalRequest} from '../Class/withdrawal-request';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}


@Injectable({
  providedIn: 'root'
})
export class WithdrawalRequestService {

  ApiURL = "https://localhost:44354/api/Savings";

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

  // LoanRequest Services

  //Retrieve loan requests
  getWithdralRequest(ReferenceNumber):Observable<WithdrawalRequest> {
  return this.http.get<WithdrawalRequest>(this.ApiURL + '/TrackLoanRequest/' + ReferenceNumber,HttpOptions).pipe( catchError(this.handleError))
}

//Retrieve loan requests --> For admin only
getWithdralRequests(): Observable<WithdrawalRequest> {
  return this.http
    .get<WithdrawalRequest>(`${this.ApiURL}/GetSavingsWithdrawal`)
    .pipe(catchError(this.handleError) )
}

//Create Wihtdrwal request from client
addRequest(withdrawal): Observable<WithdrawalRequest> {
return this.http
  .post<WithdrawalRequest>(`${this.ApiURL}/SavingsWithdrawal/`, JSON.stringify(withdrawal), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

}