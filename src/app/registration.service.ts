import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  _url="";
  checkLogin(userData)
  {
    console.log(userData)
    return this._http.post<any>(this._url, userData);
  }
  register(userData)
  {
    console.log(userData)
    return this._http.post<any>(this._url, userData);
  }
}
