import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeIncluds'
})
export class PipeIncludsPipe implements PipeTransform {

  transform(arr: {}[],tip:string ,str:string): {}[] {

    return arr= arr.filter(aa=>aa[tip].includes(str))
  }

}
