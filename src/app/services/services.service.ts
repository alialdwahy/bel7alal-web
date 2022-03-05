import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'https://g-bel-7-lalal-api-bf6ed.ondigitalocean.app/auth/reset/';
  constructor(public http: HttpClient) { }

  
  postReset(id:any , UpdataForm:any ) {
    return this.http.post(this.url +id , UpdataForm);
  }
}
