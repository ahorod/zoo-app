import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent {
  @Input() animal: Animal;
  @Output() saveAnimalEvent = new EventEmitter();

  saveButtonClicked(){
      this.saveAnimalEvent.emit(this.animal);
    }
}
