import { Component, OnInit } from '@angular/core';
import {MedicalstoreService} from '../services/medicalstore.service';

@Component({
  selector: 'app-medical-stores',
  templateUrl: './medical-stores.component.html',
  styleUrls: ['./medical-stores.component.css']
})
export class MedicalStoresComponent implements OnInit {

  medicalStores = [];

  constructor(private medicalService: MedicalstoreService) {}


  ngOnInit() {
    this.medicalService.getAll()
      .subscribe(res => {
        this.medicalStores = res;
      });
  }
}
