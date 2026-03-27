import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr',
  standalone: true
})
export class ReverseStrPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}
