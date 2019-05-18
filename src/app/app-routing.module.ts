import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'massage', loadChildren: './massage/massage.module#MassageModule' },
  { path: 'cooking', loadChildren: './cooking/cooking.module#CookingModule' },
  { path: 'shop', loadChildren: './shop/shop.module#ShopModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
