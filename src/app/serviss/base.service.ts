import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { BehaviorSubject, Observable } from 'rxjs';


export class BaseService<T> {
  //  ddata:BehaviorSubject<T[]>=new BehaviorSubject<T[]>([])
  // o:Observable<T[]>=this.ddata

      data:BehaviorSubject<T[]>= new BehaviorSubject<T[]>([])
      // o:Observable<T[]>=this.data
      

  api:string

  constructor(public http:HttpClient ,public type:string) {
    
    this.api=type
    // this.setArray(http,type)
    this.setArrayToDdata(http,type)
   }
   setArrayToDdata(http:HttpClient,type:string){
    let stor = localStorage[this.type]
    if(stor!=null){
      this.data.next(JSON.parse(stor))
      console.log("data from locallstoreg",this.data)
    }
    else{
      let api = "https://jsonplaceholder.typicode.com/"+type
      this.http.get<T[]>(api)
    .subscribe(td=>{this.data.next(td)
      console.log("data from http",this.data)
    })
  }}


  //  setArray(http:HttpClient,type:string){
  //   let stor = localStorage[this.type]
  //   if(stor!=null){
  //     this.data=JSON.parse(stor)
  //     console.log("data from locallstoreg",this.data)
  //   }
  //   else{
  //     let api = "https://jsonplaceholder.typicode.com/"+type
  //     this.http.get<T[]>(api)
  //   .subscribe(td=>{this.data=td
  //     console.log("data from http",this.data)
  //   })
  //   }
  // }

addItem(newItem:T){  
  console.log("add to do");
  
  let arr= this.data.value
  arr.push(newItem)

  this.data.next(arr)
  console.log("arrey length",this.data.subscribe(d=>{d.length}));
  
    localStorage.setItem(this.api,JSON.stringify(arr))
    console.log("locallstor",localStorage.getItem(this.api));
  }
}
