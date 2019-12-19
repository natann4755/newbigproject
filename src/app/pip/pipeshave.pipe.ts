import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeshave'
})
export class PipeshavePipe implements PipeTransform {

  transform(arr: {}[], tip:string, st:number):{}[] {
    if(st){ 
     arr= arr.filter(aa=>aa[tip]==st)
  }
  return arr
}

}
