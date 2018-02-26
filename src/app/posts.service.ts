import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) {
  }

  getAllPosts() {
    console.log("here==>")
    return this.http.get('/news/topheadlines')
      .map(res => res.json());
  }

}
