import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarComponent } from '../components/gestionar/gestionar.component';

const routes: Routes = [
  {
    path: '', component: GestionarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Form1RoutingModule { }
