import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  apiUrl = "https://kotaro-portfolio.microcms.io/api/";

  constructor(private httpclient: HttpClient) { }

  getTopview():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl + "v1/topview", {
      headers: new HttpHeaders().set('x-api-key', "b95d9f3b-eabe-4bdd-a988-f0875be304ba")
    });
  }

  getWorks():Observable<any>{
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    return this.httpclient.get(this.apiUrl + "v1/works", {
      headers: new HttpHeaders().set('x-api-key', "b95d9f3b-eabe-4bdd-a988-f0875be304ba")
    });
  }
}
