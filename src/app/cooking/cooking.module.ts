import { CookingRoutingModule } from './cooking.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingComponent } from './cooking/cooking.component';

@NgModule({
  declarations: [CookingComponent],
  imports: [
    CommonModule,
    CookingRoutingModule
  ]
})
export class CookingModule { }
