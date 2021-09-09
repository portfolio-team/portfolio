import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  apiUrl = "https://kotaro-portfolio.microcms.io/api/";

  constructor(private httpclient: HttpClient) { }

  getTopviewPC():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl + "v1/topview_pc", {
      headers: new HttpHeaders().set('x-api-key', environment.TOPVIEW_API_KEY)
    });
  }

  getTopviewSP():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl + "v1/topview_sp", {
      headers: new HttpHeaders().set('x-api-key', environment.TOPVIEW_API_KEY)
    });
  }

  getWorks():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl + "v1/works", {
      headers: new HttpHeaders().set('x-api-key', environment.WORKS_API_KEY)
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService{
  private apiUrl = `${environment.API_PATH}/.netlify/functions/instagram`;

  constructor(private httpclient: HttpClient) { }
  getinsta():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl);
  }
}
