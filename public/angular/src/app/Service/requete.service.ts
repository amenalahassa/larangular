import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {DataModel} from "../Interface/data-model";
import * as b from '../Module/biblio'
import {Facture} from "../Interface/facture";

@Injectable({
  providedIn: 'root'
})
export class RequeteService {
  private httpOptions: object;

  private url = {
    findArticle : 'article/find',
    findClient : 'client/find',
    sendCmd : 'commande/save',
    getFactures : 'facture/list',
    findFactures : 'facture/find',
    deleteFacture:"facture/delete",
  }


  private data: DataModel = {
    _token : (<HTMLInputElement>document.querySelector('meta[name="csrf-token"]')).getAttribute('content'),
    data: null,
  }

  constructor(private  http: HttpClient) { }

  findArticle(lib: string): Observable<DataModel> {
    this.data.data = {
      item : lib
    }
    return this.http.post<DataModel>(this.url.findArticle, this.data, this.httpOptions)
  }

  findClient(name: string): Observable<DataModel> {
    this.data.data = {
      item : name
    }
    return this.http.post<DataModel>(this.url.findClient, this.data, this.httpOptions)
  }

  sendCmd(cmd: object): Observable<DataModel> {
    this.data.data = {
      item : cmd
    }
    return this.http.post<DataModel>(this.url.sendCmd, this.data, this.httpOptions)
  }


  deleteFacture(id: number): Observable<DataModel> {
    this.data.data = {
      item : id
    }
    return this.http.post<DataModel>(this.url.deleteFacture, this.data, this.httpOptions)
  }

  async getFactures() {
    let factures: Array<Facture> = []
    let allFactures:any = await this.http.get(this.url.getFactures).toPromise()
    for (var i = 0; i < allFactures.data.length; i++) {
      let fac: Facture = {
        id:allFactures.data[i].id,
        client: allFactures.data[i].client.name,
        tel: allFactures.data[i].tel,
        adr: allFactures.data[i].adr,
        ssTotal: allFactures.data[i].ssTotal,
        tva: allFactures.data[i].tva,
        monnaie: allFactures.data[i].monnaie,
        ref: allFactures.data[i].ref,
        productCount: allFactures.data[i].product_count,
        date: b.formatGetDate(allFactures.data[i].created_at)
      }
      factures.push(fac)
    }
    return factures
  }

  async findFactures(ref:string) {
    this.data.data = {
      item : ref
    }
    let factures: Array<Facture> = []
    let allFactures:any = await this.http.post(this.url.findFactures, this.data, this.httpOptions).toPromise()
    for (var i = 0; i < allFactures.data.length; i++) {
      let fac: Facture = {
        id:allFactures.data[i].id,
        client: allFactures.data[i].client.name,
        tel: allFactures.data[i].tel,
        adr: allFactures.data[i].adr,
        ssTotal: allFactures.data[i].ssTotal,
        tva: allFactures.data[i].tva,
        monnaie: allFactures.data[i].monnaie,
        ref: allFactures.data[i].ref,
        productCount: allFactures.data[i].product_count,
        date: b.formatGetDate(allFactures.data[i].created_at)
      }
      factures.push(fac)
    }
    return factures
  }
}
