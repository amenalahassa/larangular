import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'la-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.sass']
})
export class CardSimpleComponent implements OnInit {


  @Input() title:string
  @Input() color:boolean
  @Input() value:any


  constructor() { }

  ngOnInit(): void {
  }

}
