import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceedAlertComponent } from './succeed-alert.component';

describe('SucceedAlertComponent', () => {
  let component: SucceedAlertComponent;
  let fixture: ComponentFixture<SucceedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucceedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucceedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
