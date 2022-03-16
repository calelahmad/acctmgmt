// src\app\shared\components\dialog\dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  custnumrec: any[] = [ 
    {acctNum: 'SA-0001', custNum: '730201-02-3948', custName: 'Abu Bakar', totBalance: '5000'},
    {acctNum: 'SA-0002', custNum: '820406-01-3346', custName: 'Umar Khatab', totBalance: '10400'},
    {acctNum: 'SA-0003', custNum: '760211-01-7764', custName: 'Bilal Rabah', totBalance: '450'},
    {acctNum: 'SA-0004', custNum: '734571-12-7348', custName: 'Ahmad Albab', totBalance: '5992'},
    {acctNum: 'SA-0005', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '522'},
    {acctNum: 'SA-0006', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '3325'},
    {acctNum: 'SA-0007', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '533'},
    {acctNum: 'SA-0008', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '425'},
    {acctNum: 'SA-0009', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '755'},
    {acctNum: 'SA-00010', custNum: '839921-09-3548', custName: 'Safawi Rashid', totBalance: '335'},
    {acctNum: 'SA-00011', custNum: '782931-10-7748', custName: 'Pablo Aimar', totBalance: '309'},
    {acctNum: 'SA-00012', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '4995'},
    {acctNum: 'SA-00013', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '1208'},
    {acctNum: 'SA-00014', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '937'}
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}

  setCustNum(custNumData:any){
    this.data.custName = custNumData.custName;
    this.data.custID = custNumData.custNum;
  }
}

export interface DialogData {
  action:string;
  themeColor: string;
  invID: string;
  custID: string;
  custName: string;
  amount:string;
}
