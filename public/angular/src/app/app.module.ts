import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import  { createCustomElement } from '@angular/elements';


import { AppComponent } from './app.component';
import { FactureFormComponent } from './Component/facture-form/facture-form.component';
import { FactureTableComponent } from './Component/facture-table/facture-table.component';
import { FactureClientComponent } from './Component/facture-client/facture-client.component';
import {HttpClientModule} from "@angular/common/http";
import { FactureListeComponent } from './Component/facture-liste/facture-liste.component';
import { ProfilComponent } from './Component/profil/profil.component';
import { CardEditableComponent } from './Component/card-editable/card-editable.component';
import { CardSimpleComponent } from './Component/card-simple/card-simple.component';
import { UpdateModalComponent } from './Component/update-modal/update-modal.component';

@NgModule({
  declarations: [
    FactureListeComponent,
    AppComponent,
    FactureFormComponent,
    FactureTableComponent,
    FactureClientComponent,
    FactureListeComponent,
    ProfilComponent,
    CardEditableComponent,
    CardSimpleComponent,
    UpdateModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [AppComponent, FactureListeComponent]
})
export class AppModule {

  constructor(private injector:Injector){}

  ngDoBootstrap(){
    let main = document.querySelector('#main-app')

    if(main.tagName === "la-facture-liste".toUpperCase()){
      const AppElement = createCustomElement(FactureListeComponent, {injector: this.injector });
      customElements.define('la-facture-liste', AppElement);
    }
    else if(main.tagName === "la-profil".toUpperCase()){
      const AppElement = createCustomElement(ProfilComponent, {injector: this.injector });
      customElements.define('la-profil', AppElement);
    }
    else {
      const AppElement = createCustomElement(AppComponent, {injector: this.injector });
      customElements.define('la-root', AppElement);
    }
  }

}
