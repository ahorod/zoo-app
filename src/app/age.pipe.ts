import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(input: Animal[], age: string): Animal[] {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (age === "all") {
        output.push(input[i]);
      }
      else if(age===">2"&&input[i].age>=2){
        output.push(input[i]);
      }
      else if(age==="<2"&&input[i].age<2){
        output.push(input[i]);
      }
    }
    return output;
  }

}
