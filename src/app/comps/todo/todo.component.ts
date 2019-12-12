import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/serviss/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from 'src/app/moduls/todo';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  userId:number
  id: number
  title: string
  completed: boolean

  ngOnInit() {
  }

  newtodo= new FormGroup( { 
    userId: new FormControl(''),
    id : new FormControl(''),
    title: new FormControl(''),
    completed: new FormControl('')
  }
    )
  
    
  constructor(public svsto:TodoService, public svsus:UsersService) { 
    svsto.data
  }

  addtodo(){
    let nwextodo:Todo=this.newtodo.value
    console.log("nwextodo",nwextodo);
    this.svsto.addItem(nwextodo)
    }

  }

  


