import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PhotosService } from 'src/app/servises/photos.service';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent implements OnInit {

   newphoto = new FormGroup({
    albumId: new FormControl(0),
    id: new FormControl(0),
    title: new FormControl(''),
    url: new FormControl('')
    
  })
  constructor(public svsp:PhotosService) { }

  ngOnInit() {
  }

  AddItem(){
    let photo = this.newphoto.value
    console.log(this.newphoto.value);
    this.svsp.addItem(photo)

  }
}
