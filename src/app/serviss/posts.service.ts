import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Posts } from '../moduls/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService <Posts>{


  constructor(http:HttpClient) {
    super(http,"posts")
   }
}
