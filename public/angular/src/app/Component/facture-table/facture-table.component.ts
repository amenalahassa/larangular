import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as b from '../../Module/biblio'


@Component({
  selector: 'la-facture-table',
  templateUrl: './facture-table.component.html',
  styleUrls: ['./facture-table.component.sass']
})
export class FactureTableComponent implements OnInit {

  @Input() liste : Array<any>
  @Input() user : any
  @Output() deleteArticle = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {

  }

  sousTotal () :number
  {
    let total = 0
    let i = 0

    for (i=0; i < this.liste.length; i++)
    {
      total += (this.liste[i].qte * this.liste[i].prix)
    }

    return total
  }

  tva () : number
  {
    return (this.sousTotal() * this.user?.tva) / 100
  }


  triggerDelete (id:number) {
    this.deleteArticle.emit(id)
  }
}
