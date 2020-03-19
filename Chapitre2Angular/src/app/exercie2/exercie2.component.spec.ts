import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercie2Component } from './exercie2.component';

describe('Exercie2Component', () => {
  let component: Exercie2Component;
  let fixture: ComponentFixture<Exercie2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercie2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
