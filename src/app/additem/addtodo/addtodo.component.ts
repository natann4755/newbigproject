import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from 'src/app/moduls/todo';
import { UsersService } from 'src/app/serviss/users.service';
import { TodoService } from 'src/app/serviss/todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  complit:boolean = false;
 
  newItem = new FormGroup({
    userId: new FormControl(0),
    id: new FormControl(0),
    title: new FormControl(''),
   
  })
  constructor(public svsus:UsersService, public svsto:TodoService) { }

  ngOnInit() {
  }

  

  AddItem(){
    
    let newtodo=this.newItem.value
    console.log(" all newtodo",newtodo);
    newtodo.completed=this.complit
    console.log("newtodo",newtodo);
    
   

    if(this.svsus.findUserid(newtodo.userId)){
      this.svsto.addItem(newtodo)
    }
    else{
      alert("eroor, userID need to be from users")
    }
  }

}
