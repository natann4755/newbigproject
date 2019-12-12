import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/serviss/users.service';
import { Todo } from 'src/app/moduls/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() tod:Todo
  constructor(public svsUser:UsersService) { 
    
  }
  ngOnInit() {
  }

}
