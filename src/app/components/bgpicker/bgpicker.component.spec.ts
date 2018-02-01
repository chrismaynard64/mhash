import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgpickerComponent } from './bgpicker.component';

describe('BgpickerComponent', () => {
  let component: BgpickerComponent;
  let fixture: ComponentFixture<BgpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
