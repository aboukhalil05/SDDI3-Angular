import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountCharPipe } from './count-char.pipe';
import { ReverseStrPipe } from './reverse-str.pipe';
import { SumDigitsPipe } from './sum-digits.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [FormsModule, CountCharPipe, ReverseStrPipe, SumDigitsPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemoComponent {
  countCharInput = signal('');
  charToCount = signal('');
  reverseInput = signal('');
  sumDigitsInput = signal('');
}
