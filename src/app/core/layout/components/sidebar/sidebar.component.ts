import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  @Output() onOpenShoppingList: EventEmitter<any> = new EventEmitter<any>();
  menuOptions: {name:string; icon: string; command:() => any}[] = [
    {
      name: "Logout",
      icon: "pi pi-fw pi-sign-out",
      command: () => {
        this.authService.logoutUser().then(() => {
          this.authService.userInfo.next(null);
          this.router.navigate(['/auth/login'])
        })
      }
    },
    {
      name: "Shopping List",
      icon: "pi pi-fw pi-shopping-cart",
      command: () => {}
    }
  ];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.menuItems = [
      {label: 'items', icon: 'pi pi-fw pi-list', routerLink: ['/items']},
      {label: 'history', icon: 'pi pi-fw pi-replay', routerLink: ['/orders-history']},
      {label: 'stats', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/stats']},
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
}
