import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(apiURL: string): Observable<any> {
    return this.httpClient.get(apiURL);
  }

  post(apiURL: string, body: any): Observable<any> {
    return this.httpClient.post(apiURL, body);
  }

  put(apiURL: string, body: any): Observable<any> {
    return this.httpClient.put(apiURL, body);
  }

  delete(apiURL: string): Observable<any> {
    return this.httpClient.delete(apiURL);
  }
}
