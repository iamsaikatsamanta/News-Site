import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Posts} from '../Models/posts';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Posts[];
  private postUpdated = new Subject<Posts[]>();
  constructor(private http: HttpClient) { }
  getPost(catagory: string) {
    const d = new Date();
    const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    console.log(date);
    this.http.get<{status: string, totalResults: number, articles: Posts[] }>('https://newsapi.org/v2/everything', {
      params: {
        q: catagory,
        from: date,
        sortBy: 'publishedAt',
        apiKey: 'ab12b0a0bc9e4b2fae8858b73f103257'
      }
    } )
      .subscribe((postData) => {
        this.posts = postData.articles;
        this.postUpdated.next([...this.posts]);
      });
  }
  getPostUpdateListner() {
    return this.postUpdated.asObservable();
  }
}
