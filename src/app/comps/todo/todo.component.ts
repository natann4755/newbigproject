import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/serviss/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from 'src/app/moduls/todo';
import { UsersService } from 'src/app/serviss/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  userId:number
  id: number
  title: string = ""
  completed: boolean

  ngOnInit() {
  }
  
    
  constructor(public svsto:TodoService, public svsus:UsersService, public rout:Router) { 
    svsto.data
  }

  pageAddItem(){
    this.rout.navigateByUrl("/addtodo")
  }
  mypost(){
    console.log("svsus.myuser.id",this.svsus.myuser.id);
    
    this.userId=this.svsus.myuser.id
  }

  allpost(){
    this.userId=null

  }

  
  }

  


