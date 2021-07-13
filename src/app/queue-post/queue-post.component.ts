import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-queue-post',
  templateUrl: './queue-post.component.html',
  styleUrls: ['./queue-post.component.scss']
})
export class QueuePostComponent implements OnInit {

  panelOpenState = true;
  posts: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getQueueData()
      .subscribe((post) => {
        this.posts = post;
        console.log(this.posts);
      });
    
  }

  approvedPost(id){
    const approved = {
      id:id
    }
    this.postService.updatePost(approved)
      .subscribe(res => {});
  }

  deletePost(id){
    const post = {
      id:id
    }
    this.postService.deletePost(post)
      .subscribe(res => {});
  }

}
