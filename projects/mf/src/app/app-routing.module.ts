import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/mf', pathMatch: 'full'
  },
  {
    path: 'mf', loadChildren: () => import('./showinfo/showinfo.module').then((m) => m.ShowinfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
