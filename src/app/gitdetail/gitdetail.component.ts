import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-gitdetail',
  templateUrl: './gitdetail.component.html',
  styleUrls: ['./gitdetail.component.css']
})
export class GitdetailComponent implements OnInit {

  posts: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {

      this.postService.getAllPosts().subscribe(posts => {
        this.posts = posts;
      });
  }

}
