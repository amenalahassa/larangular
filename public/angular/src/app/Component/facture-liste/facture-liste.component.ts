import { Component, OnInit } from '@angular/core';
import {RequeteService} from "../../Service/requete.service";
import {Facture} from "../../Interface/facture";
import * as b from '../../Module/biblio'
import {DataModel} from "../../Interface/data-model";

@Component({
  selector: 'la-facture-liste',
  templateUrl: './facture-liste.component.html',
  styleUrls: ['./facture-liste.component.sass']
})
export class FactureListeComponent implements OnInit {

  factures:Array<Facture> = null
  searched:Array<Facture> = null
  user:any


  constructor(private request: RequeteService) { }

  ngOnInit (): void {
    this.factures = null
    this.request.getUserInfo().then((result: DataModel) => {
      this.user = result.data
    })
    this.request.getFactures().then((result) => {
      this.factures = result
    })

  }



  search ($event: MouseEvent) {
    $event.preventDefault()
    $event.stopPropagation()
    let input = b.gIE('#ref')
    if (input.value !== "")
    {
      this.request.findFactures(input.value).then((result) => {
        this.searched = result
      })
    }
  }

  back () {
    this.searched = null
  }

  verify () {
    let input = b.gIE('#ref')
    let btn = <HTMLElement>document.querySelector('#btn-search')
    if (input.value.includes('FAC/', 0))
    {
      btn.removeAttribute('disabled')
    }
    else
    {
      btn.setAttribute('disabled', "true")
    }
  }

  abs(number: number) {
    return Math.abs(number)
  }
}
