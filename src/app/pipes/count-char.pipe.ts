import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countChar',
  standalone: true
})
export class CountCharPipe implements PipeTransform {
  transform(value: string, char: string): number {
    if (!value || !char) return 0;
    return value.split(char).length - 1;
  }
}
