import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHandoverViewComponent } from './manager-handover-view.component';

describe('ManagerHandoverViewComponent', () => {
  let component: ManagerHandoverViewComponent;
  let fixture: ComponentFixture<ManagerHandoverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerHandoverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHandoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
