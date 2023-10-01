import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cecom', pathMatch: 'full' },
  { path: 'cecom', loadChildren: () => import('./cecom/cecom.module').then(m => m.CecomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
