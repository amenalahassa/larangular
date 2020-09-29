import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RequeteService} from "../../Service/requete.service";
import * as b from '../../Mymodule/biblio'

@Component({
  selector: 'la-facture-form',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.sass'],
})
export class FactureFormComponent implements OnInit {

  articles: Array<any> = []


  @Output() addArticle = new EventEmitter<void>()


  constructor(private request:RequeteService) { }

  ngOnInit(): void {

  }

  search(val:KeyboardEvent) {
    let input = <string>(<HTMLInputElement>val.target).value
    if (input != "")
    {
      this.request.findArticle(input)
        .subscribe(result => {
          this.articles = (<Array<any>>result.data)
        })
    }
  }

  triggerAdd($event: any)
  {
    let form = <HTMLFormElement>document.querySelector('.factureForm')
    if ( form.checkValidity() )
   {
     $event.preventDefault()
     $event.stopPropagation()
     this.addArticle.emit()
   }
  }

}
