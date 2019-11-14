import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverViewComponent } from './handover-view.component';

describe('HandoverViewComponent', () => {
  let component: HandoverViewComponent;
  let fixture: ComponentFixture<HandoverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandoverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
