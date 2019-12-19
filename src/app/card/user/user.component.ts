import { Component, OnInit, Input } from '@angular/core';
import { Usars } from 'src/app/moduls/usars';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input() userr :Usars
  constructor() { }

  ngOnInit() {
  }

}


