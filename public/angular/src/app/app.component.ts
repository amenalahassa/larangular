import { Component } from '@angular/core';
import {GetDateService} from "./Service/get-date.service";
import {FromNowPipe} from "./Pipes/from-now.pipe";

@Component({
  selector: 'la-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[GetDateService, FromNowPipe]
})
export class AppComponent {
  title = 'Larangular';
  time : string
  passed : any

  constructor(private date : GetDateService, private mypipe: FromNowPipe) {
    this.time = date.now()
    this.passed = mypipe.transform(this.time)
  }


  getpassed () {
    if(parseInt(this.passed) >= 60 )
    {
      this.time = this.date.now()
    }
    this.passed = this.mypipe.transform(this.time)

  }
}
