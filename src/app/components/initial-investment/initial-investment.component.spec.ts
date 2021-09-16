import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInvestmentComponent } from './initial-investment.component';

describe('InitialInvestmentComponent', () => {
  let component: InitialInvestmentComponent;
  let fixture: ComponentFixture<InitialInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
