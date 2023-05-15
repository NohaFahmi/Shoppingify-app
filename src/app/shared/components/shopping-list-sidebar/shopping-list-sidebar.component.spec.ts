import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSidebarComponent } from './shopping-list-sidebar.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ShoppingListSidebarComponent', () => {
  let component: ShoppingListSidebarComponent;
  let fixture: ComponentFixture<ShoppingListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListSidebarComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
