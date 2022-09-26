import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowinfoRoutingModule } from './showinfo-routing.module';
import { ShowinfoComponent } from './components/showinfo/showinfo.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ShowinfoComponent,
    InfoComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ShowinfoRoutingModule
  ]
})
export class ShowinfoModule { }
