import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('service is working!');
  }

  getData() {
    return this.http.get<Post[]>('http://money-friend-rest-money-friend.a3c1.starter-us-west-1.openshiftapps.com/api/clientes');
  }
}
