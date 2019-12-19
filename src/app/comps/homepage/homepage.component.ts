import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotosService } from 'src/app/servises/photos.service';
import { Photose } from 'src/app/moduls/photose';
import { PostsService } from 'src/app/serviss/posts.service';
import { UsersService } from 'src/app/serviss/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit , OnDestroy {


  index = 0
  maxindex = 9
  numberofinterval:number



  constructor(public svsphotos:PhotosService, public svsposts:PostsService,public svsus:UsersService) {
    this.set()
   }

  

  ngOnDestroy(): void {
    clearInterval (this.numberofinterval)
  }
  ngOnInit() {
    this.svsphotos.data.subscribe(photos=>{
      if(photos.length>0)
      this.svsphotos.lastTenPhotos()
    })

    this.svsposts.data.subscribe(posts=>{
      if (posts.length>0)
        this.svsposts.lastTenPost()
    })
    }

    set(){
      this.numberofinterval =window.setInterval(()=>{this.move()},3000)
    }
  
    move(){
   
      let oan = document.querySelectorAll(".li1")[this.index]
      console.log("oan.className",oan.className)
       oan.className="li1"
       console.log("oan.className",oan.className)
       if (this.index==9){
         this.index=-1
       }
      let to = document.querySelectorAll(".li1")[++this.index]
      to.className="li1 shoo"
    }
   
}