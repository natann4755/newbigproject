import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/moduls/todo';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-todoss',
  templateUrl: './todoss.component.html',
  styleUrls: ['./todoss.component.css']
})
export class TodossComponent implements OnInit {


  @Input() tod:Todo
  constructor(public svsus:UsersService) { }

  ngOnInit() {
  }

}
