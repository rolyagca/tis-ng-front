import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentYieldComponent } from './investment-yield.component';

describe('InvestmentYieldComponent', () => {
  let component: InvestmentYieldComponent;
  let fixture: ComponentFixture<InvestmentYieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentYieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
