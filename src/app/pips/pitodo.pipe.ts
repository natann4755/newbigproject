import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pitodo'
})
export class PitodoPipe implements PipeTransform {
  
  transform(value: any [],userId:number ,id:number , title:string ,completed:boolean): any[] {
    return value;
  }

}
