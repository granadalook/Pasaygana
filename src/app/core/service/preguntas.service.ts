import { Injectable } from '@angular/core';
import { Preguntas } from '../../preguntas.model';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  preguntas: Array<Preguntas> = [
    {
      id: 1,
      pregunta: 'Cuantos dias  duro la guerra de los 1000 dias ',
      opciones: ['1000 dias', '980 dias', '1005 dias', '1016 dias'],
      respuesta: '1016 dias',
    },
    {
      id: 2,
      pregunta: 'Cual es  el nombre del cuarto bealtle',
      opciones: [
        'Norman Chapman',
        'Tommy Moore',
        'Jimmie Nicol',
        'George Harrison',
      ],
      respuesta: 'George Harrison',
    },
    {
      id: 3,
      pregunta: 'de que nacionalidad era Albert Einstein ',
      opciones: ['alemania', 'EE.UU', 'inglaterra', 'rusia'],
      respuesta: 'alemania',
    },
    {
      id: 4,
      pregunta: 'Como se llama el segundo hombre en  pisar la luna',
      opciones: [
        'Buzz Aldrin',
        'David Randolph Scott',
        'Alan Shepard',
        'Eugene Cernan',
      ],
      respuesta: 'Buzz Aldrin',
    },
    {
      id: 5,
      pregunta:
        'Cuanto horas tardara un automovil en recorer 660 kilometros a la velocidad de 60km/h',
      opciones: ['11horas', '15horas', '8horas', '16horas'],
      respuesta: '11horas',
    },
    {
      id: 6,
      pregunta: 'pregunta 6',
      opciones: ['1', '2', '3', '4'],
      respuesta: '2',
    },
    {
      id: 7,
      pregunta: 'pregunta 7',
      opciones: ['1', '2', '3', '4'],
      respuesta: '2',
    },
    {
      id: 8,
      pregunta: 'pregunta 8',
      opciones: ['1', '2', '3', '4'],
      respuesta: '2',
    },
    {
      id: 9,
      pregunta: 'pregunta 9',
      opciones: ['1', '2', '3', '4'],
      respuesta: '2',
    },
  ];

  constructor() {}

  id(numero: number) {
    return this.preguntas.find((item) => numero === item.id);
  }
}
