import { Injectable } from '@angular/core';
import { Preguntas } from '../../../src/app/preguntas.model';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  preguntas: Array<Preguntas> = [
    {
      id: 1,
      pregunta: 'pregunta 1',
      opciones: ['1', '2', '3', '4'],
      respuesta: '3',
    },
    {
      id: 2,
      pregunta: 'pregunta 2',
      opciones: ['11', '12', '13', '54'],
      respuesta: '11',
    },
    {
      id: 3,
      pregunta: 'pregunta 3',
      opciones: ['1', '2', '3', '4'],
      respuesta: '4',
    },
    {
      id: 4,
      pregunta: 'pregunta 4',
      opciones: ['1', '2', '3', '4'],
      respuesta: '2',
    },
  ];

  constructor() {}

  traer() {
    return this.preguntas;
  }
  id(numero: number) {
    return this.preguntas.find((item) => numero === item.id);
  }
}
