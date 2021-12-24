import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/core/service/preguntas.service';
import { Preguntas } from 'src/app/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  preguntas?: Preguntas;
  respuesta?: number;
  resultado?: string = '';
  pregunta: number = 1;
  score: number = 0;
  ganancia: number = 0;

  traer(event: any) {
    this.respuesta = event.target.value;
    setTimeout(() => {
      if (this.respuesta === this.preguntas?.respuesta) {
        this.pregunta++;
        this.resultado = 'respuesta correcta';
        this.score = this.score + 1000000;
        setTimeout(() => {
          this.next();
          this.resultado = '';
        }, 2000);
      }
      if (this.respuesta != this.preguntas?.respuesta) {
        this.resultado = 'Incorrecto';
        this.score = 0;
        this.pregunta = 1;
        setTimeout(() => {
          this.next();
          this.resultado = '';
        }, 2000);
      } else {
      }
    }, 3000);
  }

  constructor(private preguntasServive: PreguntasService) {}

  ngOnInit(): void {}

  get(id: number) {
    this.preguntas = this.preguntasServive.id(id);
  }

  next() {
    this.get(this.pregunta);
  }
  end() {
    this.ganancia = this.score;
    this.pregunta = 1;
    this.score = 0;
    setTimeout(() => {
      this.next();
      this.resultado = '';
    }, 1000);
  }
}
