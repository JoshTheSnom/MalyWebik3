import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 8 ) return value.substring(0, 8) + "..."
    else return value;
  }

}
