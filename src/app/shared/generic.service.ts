import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  header: any;
  option;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    this.option = { headers: this.header };
  }

  public get(url: string): Observable<any>{
    return this.http.get<any>(
      url, this.header)
      .pipe(tap(data => {
        //this.spinner.hide();
        return data;
      }, error => {
        //this.spinner.hide();
        return error;
      }));
  }
  public Post(url: string, param: any): Observable<any> {
    this.spinner.show();
    this.getAccessToken();
    return this.http.post<any>(
      url, param, this.header)
      .pipe(tap(data => {
        this.spinner.hide();
        return data;
      }, error => {
        this.spinner.hide();
        return error;
      }));
  }
  public login(url: string, param: any): Observable<any> {
    this.spinner.show();
    return this.http.post<any>(url, param, this.option)
      .pipe(tap(data => {
        this.spinner.hide();
        return data;
      }, error => {
        this.spinner.hide();
        return error;
      }));
  }

  getAccessToken(){

  }

  private setHeaders(): any {
    const tokenObj = JSON.parse(localStorage.getItem('smsUser')).TokenModel;
    const accessToken = tokenObj.Access_Token;
    // console.log("JSON.stringify(tokenObj)=",JSON.stringify(tokenObj))
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      })
    };
  }
}
