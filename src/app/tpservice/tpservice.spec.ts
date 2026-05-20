import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPservice } from './tpservice';

describe('TPservice', () => {
  let component: TPservice;
  let fixture: ComponentFixture<TPservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
