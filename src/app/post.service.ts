import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private pageReaload = new BehaviorSubject('');
  cast = this.pageReaload.asObservable();

  // @ts-ignore
  // postUrl = 'http://localhost:3000/api/approved-posts';
  approvedPostUrl = 'http://localhost:3000/api/approved-posts';
  deletePostUrl = 'http://localhost:3000/api/delete-posts';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getQueueData(){
    return this.http.get(this.approvedPostUrl);
  }
  // tslint:disable-next-line:typedef
  postData(data){
    return this.http.post(this.approvedPostUrl, data);
  }

  updatePost(id){
    return this.http.post(this.approvedPostUrl, id);
  }

  deletePost(id){
    return this.http.post(this.deletePostUrl, id);
  }

}
