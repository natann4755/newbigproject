import { Component, OnInit, Input } from '@angular/core';
import { Alboms } from 'src/app/moduls/alboms';

@Component({
  selector: 'app-alboms',
  templateUrl: './alboms.component.html',
  styleUrls: ['./alboms.component.css']
})
export class AlbomsComponent implements OnInit {


  @Input() albo:Alboms
  
  constructor() { }

  ngOnInit() {
  }

}
