import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewItemBannerComponent} from './new-item-banner.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    NewItemBannerComponent
  ],
  exports: [
    NewItemBannerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class NewItemBannerModule {
}
