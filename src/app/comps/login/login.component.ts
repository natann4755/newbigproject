import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/serviss/users.service';
import { LoginService } from 'src/app/serviss/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userid:number
  constructor(public rr:Router, public avaus:UsersService, public svslog:LoginService) { }

  ngOnInit() {
  }
  login(){
    console.log("log in");
    let use=this.avaus.findUserid(this.userid)
    if (use){
      this.avaus.myuser=use
      this.rr.navigateByUrl('/homepage')
      this.avaus.myuser=use
      this.svslog.islog=true
    }else{
      alert(`userid: ${this.userid} not corect`)
    }    
  }

}
