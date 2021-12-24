import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/core/service/preguntas.service';
import { Preguntas } from 'src/app/preguntas.model';
import { Router } from '@angular/router';
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
  borde:string=""
  traer(event: any) {
    this.respuesta = event.target.value;
    setTimeout(() => {
      if (this.respuesta === this.preguntas?.respuesta) {
        this.resultado = 'Correcta';
        this.score = this.score + 5000000;
        this.borde="border-success border-5"
        setTimeout(() => {
          this.pregunta++;
          this.next();
          this.resultado = '';
          this.borde=''
        }, 3000);
      }
      if (this.respuesta != this.preguntas?.respuesta) {
        this.resultado = 'Incorrecta';
        this.score = 0;
        this.borde="border-danger border-5"
        
        setTimeout(() => {
          this.goBack()
          this.pregunta = 1;
          this.next();
          this.resultado = '';
          this.borde=''
        }, 5000);
      } else {
      }
    }, 2000);
  }
  constructor(private preguntasServive: PreguntasService, private router: Router) {}
  ngOnInit(): void {}

  get(id: number) {
    this.preguntas = this.preguntasServive.id(id);
  }

  next() {
    this.get(this.pregunta);
  }
  end() { 
    localStorage.setItem('premio', 'this.ganancia');
    this.preguntas = undefined
    this.ganancia = this.score;
    setTimeout(() => {
      this.goBack()
      this.score=0
      this.ganancia=0
      this.resultado = '';
      this.pregunta = 1;
    }, 5000);
  }
  goBack() {
    this.router.navigate(['']);
    }
}
