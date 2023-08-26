import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewItemBannerComponent} from './new-item-banner.component';

describe('NewItemBannerComponent', () => {
  let component: NewItemBannerComponent;
  let fixture: ComponentFixture<NewItemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewItemBannerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
