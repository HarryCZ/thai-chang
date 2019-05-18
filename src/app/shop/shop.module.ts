import { ShopRoutingModule } from './shop.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
