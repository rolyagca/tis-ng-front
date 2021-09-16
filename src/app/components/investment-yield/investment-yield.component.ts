import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-yield',
  templateUrl: './investment-yield.component.html',
  styleUrls: ['./investment-yield.component.css']
})
export class InvestmentYieldComponent implements OnInit {
  @Input() investmentYield!: any[];
  displayedColumns = ['Year', 'InitialInvestment', 'YearlyInput', 'InvestmentYield', "FinalBalance"];
  constructor() { }
  
  ngOnInit(): void {
  }

}
