import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasRoutingModule } from './preguntas-routing.module';
import { PreguntasComponent } from './components/preguntas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreguntasComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PreguntasRoutingModule
  ]
})
export class PreguntasModule { }
