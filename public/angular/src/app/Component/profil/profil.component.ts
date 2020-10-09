import { Component, OnInit } from '@angular/core';
import {RequeteService} from "../../Service/requete.service";
import {Profil} from "../../Interface/profil";
import {DataModel} from "../../Interface/data-model";
import * as b from '../../Module/biblio'

@Component({
  selector: 'la-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  profil:Profil = null
  modal = {
    id: null,
    title: null,
    ref:null,
  }
  btn :HTMLElement

  constructor(private request:RequeteService ) { }

  ngOnInit(): void {

    this.request.getUserAbout().then((result:DataModel) => {
      // @ts-ignore
      this.profil =  result.data
      this.btn = <HTMLElement>document.querySelector('#triggerModal')
    })

  }


  update(id:number) {
    this.modal.id = id
    switch (id) {
      case 1 : {
        this.modal.title = "Modifier la photo de profil"
        this.modal.ref = "img"
        break
      }
      case 2 : {
        this.modal.title = "Modifier le nom de votre entreprise"
        this.modal.ref = "name"
        break
      }
      case 3 : {
        this.modal.title = "Modifier votre adresse"
        this.modal.ref = "adr"
        break
      }
      case 4 : {
        this.modal.title = "Modifier votre email"
        this.modal.ref = "email"
        break
      }
      case 5 : {
        this.modal.title = "Modifier votre tel"
        this.modal.ref = "tel"
        break
      }
    }
    this.btn.click()
  }
}
