import { Component } from '@angular/core';
import * as b from './Mymodule/biblio'
import {Article} from "./Interface/article";

@Component({
  selector: 'la-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[]
})
export class AppComponent {

  articleListe: Array<Article> = []

  constructor () {

  }

  addAticles () {
    let lib = <HTMLInputElement>document.querySelector('#libelle')
    let qte = <HTMLInputElement>document.querySelector('#qte')
    let prix = <HTMLInputElement>document.querySelector('#prix')

    let article : Article = {
      id: Date.now(),
      lib: lib.value,
      qte: parseInt(qte.value),
      prix: parseInt(prix.value)
    }

    this.articleListe.push(article)

    lib.value = ""
    qte.value = ""
    prix.value = ""

  }

  deleteArticles (id)
  {
    this.articleListe = b.arrayRemoveId(this.articleListe, id)
  }
}
