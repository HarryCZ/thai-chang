import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageNavComponent } from './massage-nav.component';

describe('MassageNavComponent', () => {
  let component: MassageNavComponent;
  let fixture: ComponentFixture<MassageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
