import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactureFormComponent } from './Component/facture-form/facture-form.component';
import { FactureTableComponent } from './Component/facture-table/facture-table.component';
import { FactureClientComponent } from './Component/facture-client/facture-client.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FactureFormComponent,
    FactureTableComponent,
    FactureClientComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
