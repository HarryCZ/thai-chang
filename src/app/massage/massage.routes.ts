import { MassageDetailComponent } from './massage-detail/massage-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MassagesComponent } from './massages/massages.component';

const routes: Routes = [
  { path: 'massages', component: MassagesComponent },
  { path: 'massage/:id', component: MassageDetailComponent},
  { path: '', redirectTo: '/massage/massages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassageRoutingModule { }
