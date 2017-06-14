import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
  @Output() newAnimalEvent = new EventEmitter();

  animal: Animal = new Animal('', '', 0, '', '', 0, '', '', '');

  addButtonClicked(){
    this.newAnimalEvent.emit(this.animal);
    this.animal = new Animal('', '', 0, '', '', 0, '', '', '');
  }

}
