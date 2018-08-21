import {Component, Input, OnInit} from '@angular/core';
import {DisplayServices} from '../services/display.services';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{

  @Input('displaySelected') displaySelected: string;

  constructor(private display: DisplayServices) { }


  morningTimes = this.getMorningTime('morning');
  eveningTimes = this.getEveningTime('evening');
  placesInside = this.getInsidePlace('insidecity');
  placesOutside = this.getOutsidePlace('outsidecity');


  getMorningTime(url) {
    return this.display.getAll(url)
		.subscribe(postData => this.morningTimes = postData);
  }

  getEveningTime(url) {
    return this.display.getAll(url)
		.subscribe(postData => this.eveningTimes = postData);
  }

  getInsidePlace(url) {
    return this.display.getAll(url)
		.subscribe(postData => this.placesInside = postData);
  }

  getOutsidePlace(url) {
    return this.display.getAll(url)
		.subscribe(postData => this.placesOutside = postData);
  }

  getHomeContent(url) {
    return this.display.getAll(url)
		.subscribe(postData => this.placesOutside = postData);
  }

}
