import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/moduls/posts';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'card-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() pos:Posts
  constructor(public svsUser:UsersService) { 
    
  }

  ngOnInit() {
  }

}
