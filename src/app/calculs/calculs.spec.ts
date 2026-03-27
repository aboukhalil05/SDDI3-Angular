import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculs } from './calculs';

describe('Calculs', () => {
  let component: Calculs;
  let fixture: ComponentFixture<Calculs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
