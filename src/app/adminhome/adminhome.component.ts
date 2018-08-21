import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {DisplayServices} from '../services/display.services';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  viewOn: string;

  formHome = new FormGroup ({
    name: new FormControl()
  });

  formPlace = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
  });

  places = [];

  constructor(private route: ActivatedRoute, private service: DisplayServices, private router:Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(para => {
        this.viewOn = para.get('update');
        console.log(this.viewOn);

        if(this.viewOn === 'update'){
          this.service.getAll('home')
            .subscribe(res => {
              console.log(res.name);
              this.formHome.setValue({name: res.name});
            });
        }

        if (this.viewOn === 'timetableUpdate') {
          this.service.getAll('home')
            .subscribe(res => {
              console.log(res.name);
              this.formHome.setValue({name: res.name});
            });
        }

        if(this.viewOn === 'placeUpdate') {
          this.service.getAll('insidecity')
            .subscribe(res => {
              console.log(res);
              this.places = res;
            });
        }

      });
  }

  updateHomeContent(){
    let post = {
      'name': this.formHome.value.name
    }
    this.service.create(post)
      .subscribe(res => {
        console.log(res);
      });
    this.router.navigate(['admin/home', 'update']);
  }

  updatePlace(id,name){
    console.log(name);
    console.log(id);
    let update = {
      'id': id,
      'name': name,
      'desc': 'just for update',
      'type': 'inside or outside'
    }
    this.service.updatePlaceInfo(update)
      .subscribe(res => {
        console.log(res);
      });
    //this.router.navigate(['admin/home', 'update']);
  }

}
