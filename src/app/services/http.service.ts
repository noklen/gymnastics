import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpService) { }

  public get(url: string, api: string = environment.api): Observable<any> {
    return this.http.get(api + url);
  }
  public post(url: string, body: object, api: string = environment.api ): Observable<any> {
    return this.http.post(api + url, body);
  }
}
