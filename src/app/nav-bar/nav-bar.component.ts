import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isApper: boolean;
  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
    this.isApper = true;
  }

  onCollapsed(menu?: string){
    this.isCollapsed = !this.isCollapsed;
    if (menu === 'home'){
      this.isApper = true;
    } else {
      this.isApper = false;
    }
  }

}
