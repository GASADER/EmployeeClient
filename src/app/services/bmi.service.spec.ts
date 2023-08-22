import { TestBed } from '@angular/core/testing';

import { BmiService } from './bmi.service';

describe('BmiService', () => {
  let service: BmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiService);
  });

  it('เมื่อต้องเรียนใช้ฟังค์ชั่นCalculateAgeและใส่parameter2000 จะต้องได้ผลลัพท์23 ', () => {
    
    const result = service.CalculateAge(2000);
    expect(result).toEqual(23);
  });
});
