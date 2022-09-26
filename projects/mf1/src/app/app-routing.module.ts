import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/mf1', pathMatch: 'full'
  },
  {
    path: 'mf1', loadChildren: () => import('./form1/form1.module').then((m) => m.Form1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
