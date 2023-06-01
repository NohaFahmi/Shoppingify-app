import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import {ChartModule} from "primeng/chart";
import {ProgressBarModule} from "primeng/progressbar";


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    ChartModule,
    ProgressBarModule
  ]
})
export class StatsModule { }
