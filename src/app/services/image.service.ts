import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ImageService {

  constructor(private http:HttpClient) { }

  getImageByKeyword(keyword:string){
    let httpOptions = {
      headers: new HttpHeaders({'Authorization':'563492ad6f9170000100000194ed9b243cf542ecafca5f0096e8471b'}),
      observe: 'response' as 'response'
    };
    return this.http.get('https://api.pexels.com/v1/search?query=' + keyword +'&per_page=50&page=1',httpOptions);
  }

}
