import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthorizationActions, AuthorizationSelectors, AuthState} from "../../../../store/authorization";
import {first, Observable, of, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, OnDestroy {
  isUserLoggedIn$: Observable<boolean> = of(false);
  menuOptions: { name: string; icon: string; command: () => any }[] = [
    {
      name: "Logout",
      icon: "pi pi-fw pi-sign-out",
      command: () => {
        this.store.dispatch(AuthorizationActions.logout());
      }
    },
    {
      name: "Shopping List",
      icon: "pi pi-fw pi-shopping-cart",
      command: () => {
      }
    }
  ];
  @Input() menuItems: MenuItem[] = [];
  @Output() onOpenShoppingList: EventEmitter<any> = new EventEmitter<any>();
  private destroy$: Subject<void> = new Subject();

  constructor(private authService: AuthService, private readonly router: Router, private store: Store<AuthState>) {
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.store.select(AuthorizationSelectors.selectIsLoggedIn);
    this.menuItems = [
      {label: 'items', icon: 'pi pi-fw pi-list', routerLink: ['/app/items']},
      {label: 'history', icon: 'pi pi-fw pi-replay', routerLink: ['/app/orders-history']},
      {label: 'stats', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/app/stats']},
    ];
  }

  openShoppingList() {
    this.onOpenShoppingList.emit();
  }

  onSelectOption($event: any) {
    $event.originalEvent.stopPropagation();
    $event.originalEvent.preventDefault();
    $event.value.command();
  }

  onLogout() {
    this.store.dispatch(AuthorizationActions.logout());
    this.isUserLoggedIn$.pipe(takeUntil(this.destroy$)).subscribe((isUserLoggedIn) => {
      if (!isUserLoggedIn) {
        this.router.navigate(['/auth/login']);
      }
    });
  }

}
