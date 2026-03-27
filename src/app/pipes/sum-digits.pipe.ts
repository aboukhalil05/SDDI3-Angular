import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumDigits',
  standalone: true
})
export class SumDigitsPipe implements PipeTransform {
  transform(value: number | string): number {
    if (value === null || value === undefined) return 0;
    
    const digits = value.toString().replace(/\D/g, '');
    return digits.split('').reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
}
