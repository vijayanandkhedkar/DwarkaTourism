import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  create(url, resources) {
    return this.http.post(url, resources)
      .map(res => res.json())
      .catch(err => {
        return Observable.throw('bad access Error');
      });
  }

}
