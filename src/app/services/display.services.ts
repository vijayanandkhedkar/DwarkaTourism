
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {DataService} from './data.services';

@Injectable()
export class DisplayServices extends DataService {
  constructor(http: Http) {
    super(http);
  }
}
