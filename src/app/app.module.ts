import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { ViewAnimalComponent } from './view-animal/view-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    ViewAnimalComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
