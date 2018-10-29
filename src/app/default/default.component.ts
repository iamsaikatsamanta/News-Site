import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../Service/posts.service';
import {Subscription} from 'rxjs';
import {Posts} from '../Models/posts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {
  posts = [];
  componentTitle;
  private postsSub: Subscription;
  constructor(private postService: PostsService, private route: Router) { }

  ngOnInit() {
    this.componentTitle = this.route.url.substr(1);
    this.postService.getPost(this.componentTitle);
    this.postsSub = this.postService.getPostUpdateListner()
      .subscribe( (posts: Posts[]) => {{
        this.posts = posts;
      }});

  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
