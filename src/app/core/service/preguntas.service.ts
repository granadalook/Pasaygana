import { Injectable } from '@angular/core';
import { Preguntas } from '../../preguntas.model';

@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  preguntas: Array<Preguntas> = [
    {
      id: 1,
      pregunta: '¿Cuántos días duro la guerra de los 1000 días?',
      opciones: ['1000 días', '980 días', '1005 días', '1130 días'],
      respuesta: '1130 días',
    },
    {
      id: 2,
      pregunta: '¿Cuál es el nombre del cuarto Beatles?',
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
      pregunta: '¿De qué nacionalidad era Albert Einstein? ',
      opciones: ['Alemania', 'EE.UU', 'Inglaterra', 'Rusia'],
      respuesta: 'Alemania',
    },
    {
      id: 4,
      pregunta: '¿Cómo se llama el segundo hombre en pisar la luna?',
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
        '¿Cuántas horas tardará un automóvil en recorrer 660 kilómetros a la velocidad de 60km/h?',
      opciones: ['15 horas', '11 horas', '8 horas', '16 horas'],
      respuesta: '11 horas',
    },
    {
      id: 6,
      pregunta: '¿Dónde esta Transilvania?',
      opciones: ['Rumania', 'Serbia', 'Hungria', 'Eslovaquia'],
      respuesta: 'Rumania',
    },
    {
      id: 7,
      pregunta: '¿Cuál es el país con menos habitantes del mundo?',
      opciones: ['Trinidad y tobago', 'Guyana', 'Vaticano', 'Camerun'],
      respuesta: 'Vaticano',
    },
    {
      id: 8,
      pregunta: '¿Cuándo empezó la Revolución Rusa?',
      opciones: ['1921', '1917', '1914', '1912'],
      respuesta: '1917',
    },
    {
      id: 9,
      pregunta: '¿En qué año cayó el muro de Berlín?',
      opciones: ['1954', '1970', '1963', '1989'],
      respuesta: '1989',
    },
    {
      id: 10,
      pregunta: '¿Cuál es el océano más grande del mundo?',
      opciones: ['O. Pacifico', 'O. Atlantico', 'O. Indico', 'O. Artico'],
      respuesta: 'O. Pacifico',
    },
    {
      id: 11,
      pregunta: '¿En qué año llego Cristóbal Colón a América?',
      opciones: ['1454', '1570', '1492', '1489'],
      respuesta: '1492',
    },
    {
      id: 12,
      pregunta: '¿Cuántos lados tiene un heptágono?',
      opciones: ['8 lados', '5 lados', '7 lados', '9 lados'],
      respuesta: '7 lados',
    },
    {
      id: 13,
      pregunta: '¿Cuál es el planeta más grande del Sistema Solar?',
      opciones: ['Jupiter', 'Sol', 'Marte', 'Tierra'],
      respuesta: 'Jupiter',
    },
    {
      id: 14,
      pregunta: '¿Cuántos huesos tiene el cuerpo humano?',
      opciones: ['202 huesos', '206 huesos', '201 huesos', '208 huesos'],
      respuesta: '206 huesos',
    },
    {
      id: 15,
      pregunta: '¿Cuántas notas musicales existen?',
      opciones: ['12 notas', '5 notas', '7 notas', '9 notas'],
      respuesta: '12 notas',
    },
    {
      id: 16,
      pregunta: '¿Quién ideó las leyes de la herencia genética?',
      opciones: ['Otto hant', 'Lise Meitner', 'Gregor Mendel', 'Francis Crick'],
      respuesta: 'Gregor Mendel',
    },
    {
      id: 17,
      pregunta: '¿Cuál es el mineral más duro del planeta?',
      opciones: ['El diamante', 'La ferrita', ' El Titanio', 'El Acero'],
      respuesta: 'El diamante',
    },
    {
      id: 18,
      pregunta: '¿Cuántos corazones tiene un gusano de tierra?',
      opciones: ['1', '7', '5', '4'],
      respuesta: '5',
    },
    {
      id: 19,
      pregunta: '¿Cuál es la ciudad más poblada del mundo?',
      opciones: ['Singapur', 'Tokio', 'Changai', 'Ciudad de Mexico'],
      respuesta: 'Tokio',
    },
    {
      id: 20,
      pregunta: '¿Qué gas liberan las plantas al hacer la fotosíntesis?',
      opciones: ['Oxigeno', 'Hidrogeno', 'Argon', 'Co2'],
      respuesta: 'Oxigeno',
    },
    {
      id: 21,
      pregunta: '¿Quién descubrió la penicilina?',
      opciones: [
        'Antoine Lavoisier',
        'Louis Pasteur',
        'Alexander Fleming',
        'Robert Boyle',
      ],
      respuesta: 'Alexander Fleming',
    },
    {
      id: 22,
      pregunta: 'En la mitología griega, ¿quién mató a Aquiles?',
      opciones: ['Paris', 'Atenea', 'Afrodita', 'Olimpia'],
      respuesta: 'Paris',
    },
    {
      id: 23,
      pregunta: '¿Cuántos años son un lustro?',
      opciones: ['2 años', '8 años', '5 años', '7 años'],
      respuesta: '5 años',
    },
    {
      id: 24,
      pregunta:
        '¿Qué animal contagió a los humanos en la pandemia de peste negra?',
      opciones: ['Las garrapatas', 'Las pulgas', 'Los mosquitos', 'las Ratas'],
      respuesta: 'Las pulgas',
    },
    {
      id: 25,
      pregunta: '¿La serpiente más venenosa del mundo?',
      opciones: [
        'La mamba negra',
        'La Marina de pico',
        'La cascabell',
        'Cobra real',
      ],
      respuesta: 'La Marina de pico',
    },
    {
      id: 26,
      pregunta:
        'FELICIDADES, CUMPLISTE UN GRAN RETO ESPERO INVIERTAS MUY BIEN EL DINERO.,Retirate y tu dinero quedará guardado',
      opciones: ['En salud', 'Vida', 'Amor', 'Viajes'],
      respuesta: '1',
    },
  ];
  constructor() {}
  id(numero: number) {
    return this.preguntas.find((item) => numero === item.id);
  }
}
