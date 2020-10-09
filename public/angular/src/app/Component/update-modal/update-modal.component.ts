import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import * as b from '../../Module/biblio'
import {RequeteService} from "../../Service/requete.service";


@Component({
  selector: 'la-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.sass']
})
export class UpdateModalComponent implements OnInit {

  error:string = null

  @Input() modal:any
  @Output() reload = new EventEmitter<any>()


  constructor( private  request: RequeteService) { }

  ngOnInit(): void {
  }

  reset() {
    let close = <HTMLElement>document.querySelector('.modal-close-'+ this.modal.ref)
    close.click()
    this.error = null
    let input = b.gIE('.modal-input-' + this.modal.ref)
    input.value = null
  }

  sendImg ($event : MouseEvent)
  {
    $event.preventDefault()
    $event.stopPropagation()
    let form = <HTMLFormElement>document.querySelector('.modal-form-' + this.modal.ref)
     if (form.checkValidity()){
       let input = b.gIE('.modal-input-' + this.modal.ref)
       const formData = new FormData();
       formData.append('photo', input.files[0]);
       this.error = null
       this.request.updateImg(formData).then((result) => {
         this.reset()
         document.location.reload()
       }).catch((err:any) => {
         let messages:Array<string> = err.error.errors.photo
         this.error = ""
         for (var i = 0; i < messages.length; i++){
           this.error += " " + messages[i]
         }
         input.value = ""
       })
   }
  }


  sendName ($event : MouseEvent)
  {
    let form = <HTMLFormElement>document.querySelector('.modal-form-' + this.modal.ref)
    if (form.checkValidity() === true) {
      $event.preventDefault()
      $event.stopPropagation()
      let input = b.gIE('.modal-input-' + this.modal.ref)
      this.feedback($event, this.request.updateName(input.value), input)
    }
  }

  sendAdr ($event : MouseEvent)
  {
    let form = <HTMLFormElement>document.querySelector('.modal-form-' + this.modal.ref)
    if (form.checkValidity() === true) {
      $event.preventDefault()
      $event.stopPropagation()
      let input = b.gIE('.modal-input-' + this.modal.ref)
      this.feedback($event, this.request.updateAdresse(input.value), input)
    }
  }

  sendEmail ($event : MouseEvent)
  {
    let form = <HTMLFormElement>document.querySelector('.modal-form-' + this.modal.ref)
    if (form.checkValidity() === true) {
      $event.preventDefault()
      $event.stopPropagation()
      let input = b.gIE('.modal-input-' + this.modal.ref)
      this.feedback($event, this.request.updateEmail(input.value), input)
    }
  }

  sendTel ($event : MouseEvent)
  {
    let form = <HTMLFormElement>document.querySelector('.modal-form-' + this.modal.ref)
    if (form.checkValidity() === true) {
      $event.preventDefault()
      $event.stopPropagation()
      let input = b.gIE('.modal-input-' + this.modal.ref)
      this.feedback($event, this.request.updateTel(input.value), input)
    }

  }

  feedback ($event : MouseEvent, prom: Promise<any>, input: HTMLInputElement) {
      this.error = null
      prom.then((result) => {
        this.reset()
        document.location.reload()
      }).catch((err:any) => {
        let messages:Array<string> = err.error.errors.data
        this.error = ""
        for (var i = 0; i < messages.length; i++){
          this.error += " " + messages[i]
        }
        input.value = null
      })
  }
}
