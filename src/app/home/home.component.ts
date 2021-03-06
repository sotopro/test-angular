import { Component, OnInit } from '@angular/core';
import { Posts } from './services/Posts';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsData: Posts[]
  posts: Posts;
  constructor(private postServices: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }
  public getAllPosts() {
    this.postServices.getPosts().subscribe(
      posts => {
        this.postsData = posts;
    },
      error => console.log(error)
    );
  }
  onDelete(posts: Posts) {
    this.postServices
      .deletePost(posts)
      .subscribe(
        () => (this.postsData = this.postsData.filter((p) => p.id !== posts.id))
      );
  }

}
