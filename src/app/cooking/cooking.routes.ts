import { CookingComponent } from './cooking/cooking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cooking', component: CookingComponent },
  { path: '', redirectTo: '/cooking/cooking', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookingRoutingModule { }
