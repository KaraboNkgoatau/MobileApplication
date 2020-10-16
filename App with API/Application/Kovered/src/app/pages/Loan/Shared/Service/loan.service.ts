import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {LoanRequest} from '../Class/loan-request'

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  ApiURL = "https://localhost:44354/api/Loan";

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
getLoanRequest(ReferenceNumber):Observable<LoanRequest> {
  return this.http.get<LoanRequest>(this.ApiURL + '/TrackLoanRequest/' + ReferenceNumber,HttpOptions).pipe( catchError(this.handleError))
}

//Retrieve loan requests --> For admin only
getLoanRequests(): Observable<LoanRequest> {
  return this.http
    .get<LoanRequest>(`${this.ApiURL}/GetLoanRequests`)
    .pipe(catchError(this.handleError) )
}

//Create loan request from client
addLoanRequest(LoanRequest): Observable<LoanRequest> {
  console.log(LoanRequest)
return this.http
  .post<LoanRequest>(`${this.ApiURL}/RequestShortfallLoan/`, JSON.stringify(LoanRequest), HttpOptions)
  .pipe(catchError(this.handleError)
  )
}

//Update Loan request status --> For admin only
ApproveLoan(LoanRequestID, Request): Observable<LoanRequest> {
  return this.http
    .put<LoanRequest>(`${this.ApiURL}/ApproveRequest/${LoanRequestID}`, JSON.stringify(Request), HttpOptions)
    .pipe(catchError(this.handleError)
    )
  }

  RejectLoan(LoanRequestID, Request): Observable<LoanRequest> {
    return this.http
      .put<LoanRequest>(`${this.ApiURL}/RejectRequest/${LoanRequestID}`, JSON.stringify(Request), HttpOptions)
      .pipe(catchError(this.handleError)
      )
    }
}

