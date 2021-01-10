import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, delka: number, end: string): string {
    if(value.length > delka ) return value.substring(0, delka) + end;
    else return value;
  }

}
