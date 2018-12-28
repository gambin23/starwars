import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'na'
})

export class NotApplicablePipe implements PipeTransform {
  transform(value: any) {
    if (value == null || value === 'unknown') {
      return 'N/A';
    } else {
      return value;
    }
  }
}
