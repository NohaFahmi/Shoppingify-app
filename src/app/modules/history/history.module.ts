import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    HistoryComponent
  ],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        ButtonModule
    ]
})
export class HistoryModule { }
