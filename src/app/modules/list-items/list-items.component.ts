import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {IListItem} from "../../shared/interfaces/list-items.interface";
import {ListItemsService} from "../../shared/services/integrations/list-items/list-items.service";
import {ShoppingListsService} from "../../shared/services/integrations/shopping-lists/shopping-lists.service";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {ItemsListActions, ItemsListSelectors, ItemsListState} from "../../store/items-list";

@Component({
  selector: 'app-list-items.interface.ts',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemsComponent implements OnInit, OnDestroy {

  listOfItems$: Observable<{ [key: string]: IListItem[] } | null> = of(null);
  listItems: { [key: string]: IListItem[] } = {};
  isLoading$: Observable<boolean> = of(false);
  errors$: Observable<string | null> = of(null);

  private destroy$: Subject<void> = new Subject();

  constructor(private listItemsService: ListItemsService,
              private store: Store<ItemsListState>) {
  }

  ngOnInit() {
    this.listOfItems$ = this.store.select(ItemsListSelectors.selectItemsList);
    this.isLoading$ = this.store.select(ItemsListSelectors.selectIsLoading);
    this.errors$ = this.store.select(ItemsListSelectors.selectErrors);
    this.store.dispatch(ItemsListActions.getItemsList());
    this.listOfItems$.pipe(takeUntil(this.destroy$)).subscribe((listOfItems) => {
      this.listItems = listOfItems || {};
    });
  }

  viewItemDetails(item: IListItem) {
    this.store.dispatch(ItemsListActions.getItemDetails({itemId: item._id}));
  }

  onAddingItemToList(item: IListItem) {
    //TODO: add item to list
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
