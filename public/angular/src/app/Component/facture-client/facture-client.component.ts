import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as b from '../../Module/biblio'
import {RequeteService} from "../../Service/requete.service";
import {Client} from "../../Interface/client";

@Component({
  selector: 'la-facture-client',
  templateUrl: './facture-client.component.html',
  styleUrls: ['./facture-client.component.sass']
})
export class FactureClientComponent implements OnInit {

  clients:Array<any> = []
  client:Client


  @Input() liste : Array<any>
  @Output() getClient = new EventEmitter<Client>()


  constructor(private request:RequeteService) { }

  ngOnInit(): void {
  }

  updateReliquat($event: any) {

    let monnaie:number = parseInt((<HTMLInputElement>$event.target).value)
    let reliquat = (b.gIE('#reliquat'))

    if(isNaN(monnaie - this.netToPay()))
    {
      reliquat.value = ""
    }
    else {
      reliquat.value = (monnaie - this.netToPay()).toString() + " fr"
    }
  }

  netToPay () {
    let total = 0
    let i = 0

    for (i=0; i < this.liste.length; i++)
    {
      total += (this.liste[i].qte * this.liste[i].prix)
    }

    return ((total * 18) / 100) + total
  }

  search($event: KeyboardEvent) {
    let input = <string>(<HTMLInputElement>$event.target).value
    if (input != "")
    {
      this.request.findClient(input)
        .subscribe(result => {
          this.clients = (<Array<any>>result.data)
        })
    }
  }

  triggerSend($event: MouseEvent) {

    let form = (<HTMLFormElement>document.querySelector('.form-client'))

    if(form.checkValidity())
    {
      $event.preventDefault()
      $event.stopPropagation()

      let close = (b.gIE('#btn-close'))

      let name = (b.gIE('#name'))
      let tel = (b.gIE('#tel'))
      let adr = (b.gIE('#adr'))
      let monnaie = (b.gIE('#monnaie'))

      this.client = {
        name:name.value,
        tel:tel.value,
        adresse:adr.value,
        monnaie: parseInt(monnaie.value),
      }

      close.click()
      name.value = ""
      tel.value = ""
      adr.value = ""
      monnaie.value = ""
      b.gIE('#reliquat').value = ""

      this.getClient.emit(this.client)
    }
  }

}
