import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataService {

  url:string;

  constructor(private http: Http) {
  }

  create(resource){
	  console.log(resource);
	  return this.http.post('http://localhost:8080/home/update',resource)
		.catch(err => {
            return Observable.throw('bad access Error');
        });
  }

  updatePlaceInfo(resource){
    console.log(resource);
    return this.http.post('http://localhost:8080/uptade/place', resource)
      .catch(err => {
        return Observable.throw('bad access Error');
      });
  }

  getAll(uri) {

    if(uri === 'morning')
      this.url  = 'http://dwarkatourism-env.mvndn36mb.us-east-1.elasticbeanstalk.com/timetable/morning';

    if(uri === 'evening')
      this.url = 'http://dwarkatourism-env.mvndn36mb.us-east-1.elasticbeanstalk.com/timetable/evening';

    if(uri === 'insidecity')
       this.url = 'http://dwarkatourism-env.mvndn36mb.us-east-1.elasticbeanstalk.com/place/display?places=insidecity';

    if(uri === 'outsidecity')
      this.url = 'http://dwarkatourism-env.mvndn36mb.us-east-1.elasticbeanstalk.com/place/display?places=outsidecity';

    if(uri === 'home'){
    }

    return this.http.get(this.url)
      .map(response => response.json())
      .catch(err => {
        return Observable.throw('bad access Error');
      });
  }

  handleError(){

  }


}
