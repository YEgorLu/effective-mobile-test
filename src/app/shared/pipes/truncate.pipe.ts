import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, len: number, end: string = '...'): string {
    if (value.length >= len) return value;

    return value.slice(0, len) + end;

  }

}
