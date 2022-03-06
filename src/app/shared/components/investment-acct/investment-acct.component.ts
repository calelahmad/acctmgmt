import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component';

@Component({
  selector: 'app-investment-acct',
  templateUrl: './investment-acct.component.html',
  styleUrls: ['./investment-acct.component.scss']
})
export class InvestmentAcctComponent implements OnInit {
  @Input() titleName: string;
  @Input() investmentAcctList: any[];
  @Input() sidenav: any;
  @Output() onNewInvestment = new EventEmitter<object>();
  @Output() onCloseInvestment = new EventEmitter<object>();
  displayedColumns: string[] = ['custnum', 'custname', 'acctnum', 'totbalance','closeacct'];
  selectedAcct='';
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  highlight(row) {
    this.selectedAcct = row.custNum;
  }

  openDialog(themeColor: 'primary' | 'accent' | 'warn'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: {
        themeColor,
        invID:'IA-0009',
        custID:'',
        custName:'',
        amount:''
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof (result) !== 'undefined') {
        this.onNewInvestment.emit(
          {
            acctNum: result.invID, 
            custNum: result.custID, 
            custName: result.custName, 
            totBalance: result.amount
          });
      }
    });
  }

  showAcctDetails(elemAcctDetails) {
    this.onCloseInvestment.emit(elemAcctDetails);
  }
}
