import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})

export class LoginDetailsComponent {

  form = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: LoginService, private route: ActivatedRoute, private router: Router) {
  }


  login() {
    const post = {
      'username': this.form.value.username,
      'password': this.form.value.password
    };
    this.service.create('http://localhost:8080/login/auth', post)
      .subscribe(postData => {
        console.log(postData);
        if(postData.message === 'Authorized') {
          this.router.navigate(['admin/home']);
        }else{
          this.router.navigate(['admin/login']);
        }
      });
  }
}
