import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/serviss/posts.service';
import { Posts } from 'src/app/moduls/posts';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  newItem = new FormGroup({
    userId: new FormControl(0),
    id: new FormControl(0),
    title: new FormControl(''),
    body: new FormControl(''),
  })
  constructor(public svs:PostsService, public svsus:UsersService ) { }

  ngOnInit() {
  }
  
  AddItem(){
    let newpos:Posts=this.newItem.value

    if(this.svsus.findUserid(newpos.userId)){
      this.svs.addItem(newpos)
    }
    else{
      alert("eroor, userID need to be from users")
    }
  }
}
