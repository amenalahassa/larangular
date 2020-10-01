import { Component, OnInit } from '@angular/core';
import {RequeteService} from "../../Service/requete.service";
import {Facture} from "../../Interface/facture";
import * as b from '../../Module/biblio'

@Component({
  selector: 'la-facture-liste',
  templateUrl: './facture-liste.component.html',
  styleUrls: ['./facture-liste.component.sass']
})
export class FactureListeComponent implements OnInit {

  factures:Array<Facture> = null
  searched:Array<Facture> = null

  constructor(private request: RequeteService) { }

  ngOnInit (): void {
    this.factures = null
    this.request.getFactures().then((result) => {
      this.factures = result
    })
  }

  delete (id: number) {
    this.request.deleteFacture(id).subscribe()
    this.searched = null
    this.ngOnInit()
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
}
