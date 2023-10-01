import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { CecomRoutingModule } from './cecom-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    CecomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class CecomModule { }
