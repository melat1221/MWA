import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayitemsComponent } from './arrayitems.component';

describe('ArrayitemsComponent', () => {
  let component: ArrayitemsComponent;
  let fixture: ComponentFixture<ArrayitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
