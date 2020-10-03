import { Component } from '@angular/core';
import * as b from './Module/biblio'
import {Article} from "./Interface/article";
import {Client} from "./Interface/client";
import {RequeteService} from "./Service/requete.service";
import {DataModel} from "./Interface/data-model";

@Component({
  selector: 'la-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[]
})
export class AppComponent {

  articleListe: Array<Article> = []
  link: string = null
  user:object

  constructor (private request:RequeteService) {

  }

  ngOnInit () {
    if (typeof(Storage) !== "undefined") {
      let articles = JSON.parse(window.localStorage.getItem('articles'))
      if (articles !== null)
      {
        this.articleListe = articles
      }
    }
    this.request.getUserInfo().then((result: DataModel) => {
      this.user = result.data
    })
  }

  addAticles () {
    let lib = b.gIE('#libelle')
    let qte = b.gIE('#qte')
    let prix = b.gIE('#prix')

    let article : Article = {
      id: Date.now(),
      lib: lib.value,
      qte: parseInt(qte.value),
      prix: parseInt(prix.value)
    }

    this.articleListe.push(article)
    window.localStorage.setItem('articles', JSON.stringify(this.articleListe))

    lib.value = ""
    qte.value = ""
    prix.value = ""

  }

  deleteArticles (id)
  {
    this.articleListe = b.arrayRemoveId(this.articleListe, id)
    window.localStorage.setItem('articles', JSON.stringify(this.articleListe))
  }

  sendCmd($event: Client) {
    let cmd = {
      client : $event,
      products : this.articleListe
    }

    this.request.sendCmd(cmd)
      .subscribe(result => {
        this.articleListe = []
        window.localStorage.setItem('articles', JSON.stringify(this.articleListe))
        this.link = "download/" + result.data
      })
  }
}
