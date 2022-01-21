import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], phrase: string, key: string = ''): any {
    if (!Array.isArray(value) || !phrase) return value;
    return value.filter((item) => {
      return (item.author.toString() + ' ' + item.title.toString())
        .toLowerCase()
        .includes(phrase.toLowerCase())
        ? true
        : false;
    });
  }
}
