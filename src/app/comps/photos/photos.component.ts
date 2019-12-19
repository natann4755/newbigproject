import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/serviss/users.service';
import { PhotosService } from 'src/app/servises/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


  albumId:number
  id: number
  title:string =""

  constructor( public svspho:PhotosService, public rout:Router) { 
    
  }

  ngOnInit() {
  }

  pageAddphoto(){
      this.rout.navigateByUrl('/addphotos')
  }

}
