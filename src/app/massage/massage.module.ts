import { MassageRoutingModule } from './massage.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassagesComponent } from './massages/massages.component';
import { MassageDetailComponent } from './massage-detail/massage-detail.component';

@NgModule({
  declarations: [
    MassagesComponent,
    MassageDetailComponent
  ],
  imports: [
    CommonModule,
    MassageRoutingModule
  ]
})
export class MassageModule { }
