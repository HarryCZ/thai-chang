import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageDetailComponent } from './massage-detail.component';

describe('MassageDetailComponent', () => {
  let component: MassageDetailComponent;
  let fixture: ComponentFixture<MassageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
