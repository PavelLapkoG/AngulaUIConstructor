import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'strBool'})
export class StringToBooleanPipe implements PipeTransform {
  transform(value) {
    value = (value == 'true');
    return value;
  }
}
