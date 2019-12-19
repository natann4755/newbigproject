import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usars } from 'src/app/moduls/usars';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  newuser = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    })
  })

  constructor(public svsus:UsersService) { }

  ngOnInit() {
  }
  AddItem(){
    let uuser: Usars = this.newuser.value  
    console.log(this.newuser.value)
    this.svsus.addItem(uuser)
  }
}
