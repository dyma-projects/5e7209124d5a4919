import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercie3Component } from './exercie3.component';

describe('Exercie3Component', () => {
  let component: Exercie3Component;
  let fixture: ComponentFixture<Exercie3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercie3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
