import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Investment } from 'src/app/interface/investment/investment.module';
import { CalculatorService } from 'src/app/services/calculator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-initial-investment',
  templateUrl: './initial-investment.component.html',
  styleUrls: ['./initial-investment.component.css'],
})
export class InitialInvestmentComponent implements OnInit {
  investmentYield: any[] = [];
  message: any = '';
  calculatorForm: FormGroup;
  closeResult: string = "";
  @ViewChild('content', { static: false }) private content: any;

  constructor(private calculatorService: CalculatorService,
    private modalService: NgbModal) {
    this.calculatorForm = new FormGroup({
      initialInvestment: new FormControl('', [Validators.required]),
      yearlyInput: new FormControl('',),
      yearlyInputIncrement: new FormControl('',),
      investmentYears: new FormControl('', [Validators.required]),
      investmentYield: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  async getInvestmentTable({ value, valid }: { value: any; valid: boolean }) {
    if (valid) {
      try {
        this.calculatorService
          .getInvestmentYieldTable(value as Investment)
          .then((data: any) => {
            this.investmentYield = data
            this.open(this.content);
          });
      } catch (err) {
        this.message = err;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.message,
        });
      }
      this.calculatorForm.reset();
    } else {
      this.message = 'Invalid fields!';
      Swal.fire({
        icon: 'error',
        title: 'No...',
        text: this.message,
      });
    }
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'investmentYieldModal',  size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
