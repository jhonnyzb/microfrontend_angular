import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form1RoutingModule } from './form1-routing.module';
import { GestionarComponent } from '../components/gestionar/gestionar.component';



@NgModule({
  declarations: [
    GestionarComponent
  ],
  imports: [
    CommonModule,
    Form1RoutingModule
  ]
})
export class Form1Module { }
