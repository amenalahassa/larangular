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




  constructor(private date : GetDateService, private mypipe: FromNowPipe) {

  }



}
