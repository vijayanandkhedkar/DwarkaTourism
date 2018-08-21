import { TestBed, inject } from '@angular/core/testing';

import { MedicalstoreService } from './medicalstore.service';

describe('MedicalstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalstoreService]
    });
  });

  it('should be created', inject([MedicalstoreService], (service: MedicalstoreService) => {
    expect(service).toBeTruthy();
  }));
});
