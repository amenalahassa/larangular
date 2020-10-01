import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactureFormComponent } from './Component/facture-form/facture-form.component';
import { FactureTableComponent } from './Component/facture-table/facture-table.component';
import { FactureClientComponent } from './Component/facture-client/facture-client.component';
import {HttpClientModule} from "@angular/common/http";
import { FactureListeComponent } from './Component/facture-liste/facture-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    FactureFormComponent,
    FactureTableComponent,
    FactureClientComponent,
    FactureListeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
