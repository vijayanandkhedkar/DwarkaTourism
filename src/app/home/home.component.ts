import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('isAppear') isAppear = true;
  home1: string;
  home2: string;
  home3: string;

  constructor() { }

  ngOnInit() {
    this.home1= 'The Dwarkathis temple also known as the jagat Mandir and occasionally spelled Dwarkadheesh, is a hindu temple ' +
      'dedicated to Lord Krishnawho is worshipped here by the name Dwarkadhish or "king of Dwarka".';

    this.home2= 'The main shrine of the 5-storied building, supported by 72 pillars, is known as Jagat Mandir or Nija Mandir,archaeological' +
      'finding suggest it to be 2,200-2,000 years old. Temple was enlarged in 15th-16th century.';

    this.home3= 'According to tradition, the original temple was believed to havebeen built by krishnas grand son, Vajranbha, over' +
      'the har-griha(Lord  Krshnas residential place ).';
  }


}
