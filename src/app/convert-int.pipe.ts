import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertInt'
})
export class ConvertIntPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.round(value);
  }

}
