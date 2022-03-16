import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.scss']
})
export class TransferAmountComponent implements OnInit {
  @ViewChild('stepper') stepper : any;
  @Input() goalsAcctList: GoalsAcctList[];
  @Input() savingAcctList: SavingAcctList[];
  @Input() titleName: string;
  @Input() sidenav: any;
  trasferSteps:string[]=['from-saving','to-goals','transfer-money']
  myControl = new FormControl();
  myControl2 = new FormControl();
  filteredOptions: Observable<SavingAcctList[]>;
  filteredOptions2: Observable<SavingAcctList[]>;
  searchKey:string='';
  chckBalDetails:any = {
    custName:'N/A',
    savingAcctNum:'N/A',
    savingTotalBal:'N/A',
    goalsAcctNum:'N/A',
    goalsTotalBal:'N/A'
  }
  showDetails:boolean=false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.custNum)),
      map(custNum => (custNum ? this._filter(custNum) : this.savingAcctList.slice())),
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.custNum)),
      map(custNum => (custNum ? this._filter(custNum) : this.savingAcctList.slice())),
    );
  }

  displayFn(custNum: string): string {
    return custNum ? custNum : '';
  }

  private _filter(name: string): SavingAcctList[] {
    const filterValue = name.toLowerCase();

    return this.savingAcctList.filter(option => option.custNum.toLowerCase().includes(filterValue));
  }

  chkBalance(){
    if (this.searchKey === '')
      this.showDetails = false;
    else{
      this.showDetails = true;
      this.chckBalDetails.custName = 'N/A';
      this.chckBalDetails.savingAcctNum = 'N/A';
      this.chckBalDetails.savingTotalBal = '0';
      this.chckBalDetails.goalsAcctNum = 'N/A';
      this.chckBalDetails.goalsTotalBal = '0';
      for (let sAcctDetils of this.savingAcctList){
        if (this.searchKey === sAcctDetils.custNum){
          this.chckBalDetails.custName = sAcctDetils.custName;
          this.chckBalDetails.savingAcctNum = sAcctDetils.acctNum;
          this.chckBalDetails.savingTotalBal = sAcctDetils.totBalance;
          break;
        }
      }
      for (let gAcctDetils of this.goalsAcctList){
        if (this.searchKey === gAcctDetils.custNum){
          this.chckBalDetails.goalsAcctNum = gAcctDetils.acctNum;
          this.chckBalDetails.goalsTotalBal = gAcctDetils.totBalance;
          break;
        }
      }
    }
  }

  gotoNext(){
    this.searchKey = '';
    this.showDetails = false;
    this.stepper.next();
  }

  doMoneyTransfer(themeColor){
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      width:'20%',
      data: {
        action:'confirm_transfer',
        themeColor,
        invID:null,
        custID:null,
        custName:null,
        amount:null
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== '') { //yes is selected
        this.stepper.reset();
        // this.onCloseInvestment.emit(elemAcctDetails);
      }
    });
  }

}


export interface SavingAcctList {
  acctNum: string;
  custNum: string;
  custName: string;
  totBalance: string;
}

export interface GoalsAcctList {
  acctNum: string;
  custNum: string;
  custName: string;
  totBalance: string;
}