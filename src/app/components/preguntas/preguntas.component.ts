import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/core/preguntas.service';
import { Preguntas } from 'src/app/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  preguntas?: Preguntas;
  respuesta?: any;
  resultado?: string;
  pregunta: number = 1;
  score: number = 0;

  traer(event: any) {
    this.respuesta = event.target.value;
    setTimeout(() => {
      if (this.respuesta === this.preguntas?.respuesta) {
        this.resultado = 'respuesta correcta';
        this.pregunta++;
        this.score = this.score + 1000000;

        setTimeout(() => {
          this.next();
        }, 1000);
      } else {
        this.resultado = 'Incorrecto';
        this.score = 0;
      }
    }, 1200);
  }

  constructor(private preguntasServive: PreguntasService) {}

  ngOnInit(): void {
    this.get(this.pregunta);
  }

  get(id: number) {
    this.preguntas = this.preguntasServive.id(id);
  }

  next() {
    this.get(this.pregunta);
  }
}
