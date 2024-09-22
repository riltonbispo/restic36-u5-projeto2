import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [MatCardModule, HttpClientModule, NgFor, MatButtonModule, MatGridListModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})

export class FeedComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void{
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    })
  }
}
