import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saving-acct',
  templateUrl: './saving-acct.component.html',
  styleUrls: ['./saving-acct.component.scss']
})
export class SavingAcctComponent implements OnInit {
  @Input() titleName: string;
  @Input() savingAcctList: [];
  displayedColumns: string[] = ['custnum', 'custname', 'acctnum', 'totbalance'];
  selectedAcct='';
  constructor() { }

  ngOnInit(): void {
  }

  highlight(row) {
    this.selectedAcct = row.custNum;
  }
 
}

