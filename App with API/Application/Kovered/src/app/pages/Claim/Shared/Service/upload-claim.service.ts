import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {UploadClaim} from '../Class/upload-claim'

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
}

@Injectable({
  providedIn: 'root'
})
export class UploadClaimService {
  ApiURL = "https://localhost:44354/api/Claim";


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
  
  //Track Claim
  getClaim(ClaimID): Observable<UploadClaim> {
    return this.http.get<UploadClaim>(this.ApiURL + '/TrackClaim/' + ClaimID,HttpOptions).pipe( catchError(this.handleError))
  }
  getClaims(): Observable<UploadClaim> {
    return this.http.get<UploadClaim>(`${this.ApiURL}/GetClaim`).pipe(catchError(this.handleError) )
  }

  //Submit claim letter

  public upload(formData) {
        return this.http.post<UploadClaim>(this.ApiURL + '/UploadClaim', formData, {
          reportProgress: true,
          observe: 'events'
        });
    }

}

