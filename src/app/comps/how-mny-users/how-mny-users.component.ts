import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-how-mny-users',
  templateUrl: './how-mny-users.component.html',
  styleUrls: ['./how-mny-users.component.css']
})
export class HowMnyUsersComponent implements OnInit {

  count:any
 
  constructor(public svsus:UsersService) {
    this.svsus.data.subscribe(d=>this.count = d.length)

   }

  ngOnInit() {
  }

}
