import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Response} from 'src/app/interfaces/response'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(public http: HttpClient) { }

  public url: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  public getResponse(palabra: string): Observable<Response[]>{
    return this.http.get<Response[]>(this.url+palabra);
  }
}
