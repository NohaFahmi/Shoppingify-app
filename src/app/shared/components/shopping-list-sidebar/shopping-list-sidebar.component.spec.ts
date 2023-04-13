import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSidebarComponent } from './shopping-list-sidebar.component';

describe('ShoppingListSidebarComponent', () => {
  let component: ShoppingListSidebarComponent;
  let fixture: ComponentFixture<ShoppingListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListSidebarComponent ]
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
