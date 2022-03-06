import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.scss']
})
export class CheckBalanceComponent implements OnInit {
  @Input() titleName: string;
  @Input() goalsAcctList: GoalsAcctList[];
  @Input() sidenav: any;
  @Input() savingAcctList: SavingAcctList[];
  myControl = new FormControl();
  filteredOptions: Observable<SavingAcctList[]>;
  searchKey:string='';
  chckBalDetails:any = {
    custName:'N/A',
    savingAcctNum:'N/A',
    savingTotalBal:'N/A',
    goalsAcctNum:'N/A',
    goalsTotalBal:'N/A'
  }
  showDetails:boolean=false;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
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