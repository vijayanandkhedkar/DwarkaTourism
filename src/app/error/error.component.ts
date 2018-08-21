import {Component, ErrorHandler, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent extends ErrorHandler implements OnInit {

  handleError(error){
    console.log('error -save ur self');
    console.log(error);
    //window.location.href ='/error';
  }

  ngOnInit() {
  }

}
