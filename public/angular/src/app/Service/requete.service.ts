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
    find : 'article/find'
  }
  private data: DataModel = {
    _token : (<HTMLInputElement>document.querySelector('meta[name="csrf-token"]')).getAttribute('content'),
    data: null,
  }

  constructor(private  http: HttpClient) { }

  findArticle(item: string): Observable<DataModel> {
    this.data.data = {
      item : item
    }
    return this.http.post<DataModel>(this.url.find, this.data, this.httpOptions)
  }

}
