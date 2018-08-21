import {Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayServices} from '../services/display.services';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent  implements OnInit{
  content: string;
  displaySelection: string;

  constructor(private router: Router ,private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.paramMap
      .subscribe(params => {
        console.log(this.content);
        this.content = params.get('display');
        //this.displaySelection = params.get('data');
      });
  }

  onDisplay(data: string) {
    this.displaySelection = data;
  }

}

export interface FavouriteChangedEventArgs{
  newValue: string;
}
