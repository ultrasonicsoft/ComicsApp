import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Md5 } from 'ts-md5/dist/md5';


import { Character } from './character.model'
@Injectable()
export class DataService {

  private url: string = "https://gateway.marvel.com:443/v1/public/characters?apikey=1635e0378c3ce1a282d56d0be3b5a324";
  users: any[]

  ts = '20170902';
  privateKey = ""
  publicKey = "2578081209fb10d0ade131f1f323c7fa";

  constructor(private http: Http) {   
  }

  /**Get the character list from the array. */
  getCharacterList(): Observable<any> {

    let hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);
    console.log(`hash: ${hash}`);

    let url=`https://gateway.marvel.com:443/v1/public/characters?apikey=${this.publicKey}&ts=${this.ts}&hash=${hash}`;

    // this.http.get(url).subscribe(Response => {
    //   console.log(Response);
    // });
    return this.http.get(url).map(response => response.json());
  }

  getMockCharacterList(): Observable<Character[]> {  
    

    return new Observable<Character[]>(observer => {

      let mockData: Character[] = [];
      let newCharacter: Character = new Character();
      newCharacter.name = "Spiderman";
      mockData.push(newCharacter);

      newCharacter = new Character();
      newCharacter.name = "Superman";
      mockData.push(newCharacter);
      observer.next(mockData);
    });
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };

  private handleErrors(error: Response) {
    return Observable.throw(error);
  };

}
