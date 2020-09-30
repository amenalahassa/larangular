import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {DataModel} from "../Interface/data-model";

@Injectable({
  providedIn: 'root'
})
export class RequeteService {
  private httpOptions: object;

  private url = {
    findArticle : 'article/find',
    findClient : 'client/find',
    sendCmd : 'commande/save'
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


}
