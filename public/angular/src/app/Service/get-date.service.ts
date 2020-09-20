import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  today :Date = new Date();

  constructor() { }

  now () {
    return this.today.getDate()+'-'+(String(this.today.getMonth()+1).padStart(2, '0'))+'-'+ this.today.getFullYear() + " " +(String(this.today.getHours()).padStart(2, '0'))+ ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
  }
}
