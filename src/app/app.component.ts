import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shades', 'Loud noises')
  ];
  currentEditAnimal: Animal = null;

  addAnimal(animal){
    this.animals.push(animal);
  }

  editAnimal(animal){
    this.currentEditAnimal = animal;
  }

  saveAnimal(){
    this.currentEditAnimal = null;
  }
}
