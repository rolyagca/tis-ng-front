import { NgModule } from '@angular/core';

import { InitialInvestmentComponent } from 'src/app/components/initial-investment/initial-investment.component';
import { InvestmentYieldComponent } from 'src/app/components/investment-yield/investment-yield.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: InitialInvestmentComponent },
  { path: 'investment', component: InvestmentYieldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
