import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit{
  @Input() menuItems: MenuItem[] = [];
  @Output() onOpenShoppingList:EventEmitter<any> = new EventEmitter<any>();

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
}
