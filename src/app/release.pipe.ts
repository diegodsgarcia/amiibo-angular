import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'release'
})
export class ReleasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(value);
    let releases = Object.values(value)
    releases = releases.map((date: any) => new Date(date + ':00:00:00'))
    const result = releases.map((date) => this.transformDateInString(date)).join(' - ')

    return result;
  }

  transformDateInString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

}
