import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsComponent } from './list-items.component';
import {CommonModule} from "@angular/common";
import {ListItemsRoutingModule} from "./list-items-routing.module";
import {ChipModule} from "primeng/chip";
import {ChipsModule} from "primeng/chips";
import {InputTextModule} from "primeng/inputtext";

fdescribe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsComponent ],
      imports: [
        CommonModule,
        ListItemsRoutingModule,
        ChipModule,
        ChipsModule,
        InputTextModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the main title', () => {
    expect(fixture.nativeElement.querySelector('#title').innerHTML).toContain('Shoppingify');
  });
  it('should contain a search field', () => {
    expect(fixture.nativeElement.querySelector('#search-field')).toBeTruthy();
  });
});
