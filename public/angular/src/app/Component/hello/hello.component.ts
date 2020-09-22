import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'la-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  constructor() { }

  @Input() text : string

  @Output() talk = new EventEmitter<string>()

  ngOnInit(): void {

    this.text = this.text.toUpperCase()

  }

  sayTouched ()
  {
      this.talk.emit("I'm touched")
  }


}
