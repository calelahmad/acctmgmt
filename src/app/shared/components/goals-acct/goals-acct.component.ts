import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals-acct',
  templateUrl: './goals-acct.component.html',
  styleUrls: ['./goals-acct.component.scss']
})
export class GoalsAcctComponent implements OnInit {
  @Input() titleName: string;
  @Input() goalsAcctList: [];
  displayedColumns: string[] = ['custnum', 'custname', 'acctnum', 'totbalance'];
  selectedAcct='';
  constructor() { }

  ngOnInit(): void {
  }

  highlight(row) {
    this.selectedAcct = row.custNum;
  }

}
