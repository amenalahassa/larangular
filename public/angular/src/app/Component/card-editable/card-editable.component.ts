import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'la-card-editable',
  templateUrl: './card-editable.component.html',
  styleUrls: ['./card-editable.component.sass']
})
export class CardEditableComponent implements OnInit {


  @Input() title:string
  @Input() value:any
  @Input() id:number
  @Output() edit = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  triggerEdit (id:number)
  {
    this.edit.emit(id)
  }

}
