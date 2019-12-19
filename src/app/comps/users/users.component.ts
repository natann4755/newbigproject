import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/serviss/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id:number 
  name:string ="" 
  username:string = "" 
  email:string = ""

  constructor(public svsus:UsersService, public rut:Router) { 
    
  }

  ngOnInit() {
  }

  pageAddUser(){
    this.rut.navigateByUrl('/addusers')

  }
}
