import {Component, OnInit, Output, EventEmitter, Input, SimpleChange} from '@angular/core';
import {RequeteService} from "../../Service/requete.service";
import * as b from '../../Module/biblio'

@Component({
  selector: 'la-facture-form',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.sass'],
})
export class FactureFormComponent implements OnInit {

  articles: Array<any> = []
  fac:string

  @Input() link : string
  @Output() addArticle = new EventEmitter<void>()


  constructor(private request:RequeteService) { }

  ngOnInit(): void {
    this.fac = this.link
  }


  ngOnChanges(change: SimpleChange): void {
    this.fac = this.link
  }


  search(val:KeyboardEvent) {
    this.fac = null
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
