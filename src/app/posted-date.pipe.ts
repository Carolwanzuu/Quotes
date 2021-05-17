import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postedDate'
})
export class PostedDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return null;
  }

}
