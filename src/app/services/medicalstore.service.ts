import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MedicalstoreService {

  constructor(private http:Http) { }
  response = [];
  getAll(){
    return this.http.get('http://dwarkatourism-env.mvndn36mb.us-east-1.elasticbeanstalk.com/medicalstores/all')
      .map(res => res.json())
      .catch(err => {
        return Observable.throw('bad access Error');
      });
  }
}
