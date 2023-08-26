import {Component, Input} from '@angular/core';
import {IListItem} from "../../interfaces/list-items.interface";
import {ICategory} from "../../interfaces/categories.interface";

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent {
  @Input() isEditMode: boolean = false;
  @Input() categories: ICategory[] | [] | null = [];
  @Input() item: IListItem | null = null;

}
