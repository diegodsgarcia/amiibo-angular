import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'release'
})
export class ReleasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const result = this.transformDateInString(new Date(value.na + ':00:00:00'))

    return result
  }

  transformDateInString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

}
