import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navige',
  templateUrl: './navige.component.html',
  styleUrls: ['./navige.component.css']
})
export class NavigeComponent implements OnInit {

  constructor(public rot:Router) { }

  ngOnInit() {
  }

  moveto(page:string){
    console.log(page);
    this.rot.navigateByUrl(`/${page}`)
  }

}
