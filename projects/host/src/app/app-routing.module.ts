import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'mf', loadChildren: () => import('mf/ShowInfoModule').then((m) => m.ShowinfoModule)
  },
  {
    path: 'mf1', loadChildren: () => import('mf1/FormModule').then((m) => m.Form1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
