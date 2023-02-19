import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee, Associated, Remark } from '../models/response';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public urlEmployees: string = '/api/employees';
  public urlAssociated: string = '/api/associated/';
  public urlRemarks: string = '/api/remarks';
  // public gamesUrl: string = 'https://www.balldontlie.io/api/v1/stats?player_ids[]=';
  // public urlCharacter: string = 'https://rickandmortyapi.com/api/character/';
  // public urlEpisode: string = 'https://rickandmortyapi.com/api/episode/';

  getEmployees():Observable<Employee>{
    return this.http.get<Employee>(this.urlEmployees);
  }

  getEmployee(mail:string):Observable<Employee>{
    return this.http.get<Employee>(this.urlEmployees+"/"+mail);
  }

  login(mail:string):Observable<Employee>{
    return this.http.post<Employee>((this.urlEmployees+"/login"),mail);
  }


  getAssociated():Observable<Associated>{
    return this.http.get<Associated>(this.urlAssociated);
  }

  newAssociated(body:any):Observable<Associated>{
    return this.http.post<Associated>((this.urlAssociated+'insert'),body);
  }

  getRemark(id: number):Observable<Remark>{
    return this.http.get<Remark>(this.urlRemarks+'/'+id);
  }

  getRemarks():Observable<Remark>{
    return this.http.get<Remark>(this.urlRemarks);
  }

  newRemark(body:any):Observable<Remark>{
    return this.http.post<Remark>((this.urlRemarks+'/insert'),body);
  }

  deleteRemark(id:number){
    return this.http.delete(this.urlRemarks+'/delete/'+id);
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
