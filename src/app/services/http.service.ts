import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor (private http: HttpClient) { }

  public get(url: string, api: string = environment.api): Observable<any> {
    return this.http.get(api + url, );
  }

  public post(url: string, body: object, api: string = environment.api): Observable<any> {
    return this.http.post(api + url, body);
  }
}
