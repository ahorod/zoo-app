import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZOO Tracker';

  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shades', 'Loud noises'),
    new Animal('Ocelot', 'Prince',1,'Carnivore','tropical', 6,'female','Laying in the sunshine','Toys that are not rope-based')
  ];
  currentEditAnimal: Animal = null;
  filterValue: string  = "all";

  addAnimal(animal){
    this.animals.push(animal);
  }

  editAnimal(animal){
    this.currentEditAnimal = animal;
  }

  saveAnimal(){
    this.currentEditAnimal = null;
  }
  onFilterChange(value){
    this.filterValue = value;
  }
}
