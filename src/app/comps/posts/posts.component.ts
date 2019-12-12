import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/serviss/posts.service';
import { UsersService } from 'src/app/serviss/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  titel:string=""
  body:string=""
  id:number
  userid:number

  constructor(public svsposts:PostsService, public svsUser:UsersService, public rout:Router) {
    
   }

  ngOnInit() {
  }

  pageAddItem(){
    this.rout.navigateByUrl("/addpost")
  }
  mypost(){
    console.log("svsUser.myuser.id",this.svsUser.myuser.id);
    
    this.userid=this.svsUser.myuser.id
  }

  allpost(){
    this.userid=null

  }

}
