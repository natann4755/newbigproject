import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any[],titel: string, body:string, id:number , userid:number): any[] {
    value = value.filter(ob=>{
      return ob.title.includes(titel)&& ob.body.includes(body)}) 

      if(userid){
        console.log("userid",userid);
        
        value= value.filter(ob=>{
          return ob.userId==userid})
      }
      if(id){
        let arr1= value.filter(ob=>{ 
          return ob.id==id})
        return arr1
      }
    return value;
  }

}
