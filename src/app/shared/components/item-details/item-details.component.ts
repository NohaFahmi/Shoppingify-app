import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {IListItem} from "../../interfaces/list-items.interface";

@Component({
  selector: ' app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent {
  @Input() item: IListItem | null = null;
  @Output() backInView: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onBack() {
    this.backInView.emit();
  }
}
