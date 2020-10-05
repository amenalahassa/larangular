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

  constructor(private request:RequeteService ) { }

  ngOnInit(): void {

    this.request.getUserAbout().then((result:DataModel) => {
      // @ts-ignore
      this.profil =  result.data
    })

  }

}
