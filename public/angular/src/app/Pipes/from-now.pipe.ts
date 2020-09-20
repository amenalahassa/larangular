import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let time  =  moment(value, 'DD.MM.YYYY HH:mm:ss');
    let duration = moment.duration(moment().diff(time))
    return duration.asSeconds()
  }

}
