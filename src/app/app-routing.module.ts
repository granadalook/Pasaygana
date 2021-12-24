import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: '*',
    loadChildren: () =>
      import('./components/intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: 'preguntas',
    loadChildren: () =>
      import('./components/preguntas/preguntas.module').then((m) => m.PreguntasModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
