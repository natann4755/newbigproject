import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../serviss/base.service';
import { Photose } from '../moduls/photose';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends BaseService <Photose> {

  tenPhotose:Photose[]=[]
  Photosett:Photose[] 

  constructor(http:HttpClient) { 
    super(http,"photos")
    
  }

 
  lastTenPhotos(){
    this.Photosett = this.data.value
    console.log("post",this.Photosett);
    for (let i = this.Photosett.length-10; i <= this.Photosett.length-1; i++) {
        this.tenPhotose.push(this.Photosett[i])
    }
    console.log("tenpos",this.tenPhotose);
   }
    

}
