import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ItemsListSelectors, ItemsListState} from "../../../store/items-list";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {IListItem} from "../../interfaces/list-items.interface";

enum ViewTypes {
  LIST = 1,
  DETAILS = 2,
  ADD = 3
}

@Component({
  selector: 'app-shopping-list-sidebar',
  templateUrl: './shopping-list-sidebar.component.html',
  styleUrls: ['./shopping-list-sidebar.component.scss']
})
export class ShoppingListSidebarComponent implements OnInit, OnDestroy {
  listItemDetails$: Observable<IListItem | null> = of(null);
  isLoading$: Observable<boolean> = of(false);
  currentView: ViewTypes = ViewTypes.LIST;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<ItemsListState>) {
  }

  ngOnInit(): void {
    this.listItemDetails$ = this.store.select(ItemsListSelectors.selectItemDetails);
    this.isLoading$ = this.store.select(ItemsListSelectors.selectIsLoading);
    this.listItemDetails$.pipe(takeUntil(this.destroy$)).subscribe((item) => {
      if (item) {
        this.currentView = ViewTypes.DETAILS;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
