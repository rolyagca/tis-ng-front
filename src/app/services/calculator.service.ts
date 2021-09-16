import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Investment } from '../interface/investment/investment.module';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private base_url: string = environment.apiUrl;
  private httpHeaders!: HttpHeaders;
  constructor(private http: HttpClient) {}


  createHeaders() {
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  }

  getInvestmentYieldTable(investment: Investment) {
    this.createHeaders()
    return new Promise((resolve, reject) => {
      this.http
        .post(
          this.base_url + '/investors/calculators/ci',
          investment,
          {headers: this.httpHeaders}
        )
        .subscribe(
          (result: any) => {
            resolve(result as Investment);
          },
          (err) => {
            reject(err.message);
          }
        );
    });
  }
}
