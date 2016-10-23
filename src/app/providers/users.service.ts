import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  all() {
    let url = `http://jsonplaceholder.typicode.com/users`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }  

}