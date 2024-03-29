import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee, Associated } from '../models/response';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public urlEmployees: string = '/api/employees';
  public urlAssociated: string = '/api/associated/';
  // public gamesUrl: string = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=';
  // public urlCharacter: string = 'https://rickandmortyapi.com/api/character/';
  // public urlEpisode: string = 'https://rickandmortyapi.com/api/episode/';

  getEmployees():Observable<Employee>{
    return this.http.get<Employee>(this.urlEmployees);
  }

  getAssociated():Observable<Associated>{
    return this.http.get<Associated>(this.urlAssociated);
  }

  // getGames(id: string):Observable<Games>{
  //   return this.http.get<Games>(this.gamesUrl + `${id}`);
  // }

  // getCharacter(name: string):Observable<any>{
  //   if(name[0] === '?'){
  //     return this.http.get<Character>(this.urlCharacter + `${name}`);
  //   } else {
  //     return this.http.get<Result>(this.urlCharacter + `${name}`);
  //   }
  // }

  // getEpisode(number: string):Observable<Episode>{
  //   return this.http.get<Episode>(this.urlEpisode + `${number}`);
  // }
}
