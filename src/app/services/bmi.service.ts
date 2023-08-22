import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  constructor() {}

  CalculateAge(age: number): number {
    const result = 2023 - age;
    return result;
  }
}
