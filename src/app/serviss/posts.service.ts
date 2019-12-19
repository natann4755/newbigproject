import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Posts } from '../moduls/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService <Posts>{


  tenpos:Posts[]=[]
  posttt:Posts[] 

  constructor(http:HttpClient) {
    super(http,"posts")
   }

   lastTenPost(){
    this.posttt = this.data.value
    console.log("post",this.posttt);
    for (let i = this.posttt.length-10; i <= this.posttt.length-1; i++) {
        this.tenpos.push(this.posttt[i])
    }
    console.log("tenpos",this.tenpos);
   }
}
