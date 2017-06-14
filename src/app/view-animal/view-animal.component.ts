import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';


@Component({
  selector: 'view-animal',
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.css']
})
export class ViewAnimalComponent {
  @Input() animal: Animal;
  @Output() editAnimalEvent = new EventEmitter();

  editButtonClicked(){
    this.editAnimalEvent.emit(this.animal);
  }
}
