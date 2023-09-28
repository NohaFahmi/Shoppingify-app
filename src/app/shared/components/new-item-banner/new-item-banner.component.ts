import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-item-banner',
  templateUrl: './new-item-banner.component.html',
  styleUrls: ['./new-item-banner.component.scss']
})
export class NewItemBannerComponent {
  @Output() onAddingItem: EventEmitter<any> = new EventEmitter<any>();

  addNewItem() {
    this.onAddingItem.emit();
  }
}
