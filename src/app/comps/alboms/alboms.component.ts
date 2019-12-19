import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/serviss/users.service';
import { AlbomsserService } from 'src/app/servises/albomsser.service';
import { PhotosService } from 'src/app/servises/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alboms',
  templateUrl: './alboms.component.html',
  styleUrls: ['./alboms.component.css']
})
export class AlbomsComponent implements OnInit {

  userId: number
  id: number
  title:string=""
  constructor(public svsus:UsersService, public svsalb:AlbomsserService, public svsphoto:PhotosService) { 
  }

  ngOnInit() {
  }
}
