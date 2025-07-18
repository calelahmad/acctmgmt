// src\app\app.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { NotificationService } from './shared/services/notification.service';

export interface SavingAcctList {
  acctNum: string;
  custNum: string;
  custName: string;
  totBalance: string;
}

const SAVING_ACCT_DATA: SavingAcctList[] = [ //sample data
   {acctNum: 'SA-0001', custNum: '730201-02-3948', custName: 'Abuar', totBalance: '5000'},
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

export interface GoalsAcctList {
  acctNum: string;
  custNum: string;
  custName: string;
  totBalance: string;
}

const GOALS_ACCT_DATA: GoalsAcctList[] = [ //sample data
   {acctNum: 'GA-0001', custNum: '730201-02-3948', custName: 'Abu Bakar', totBalance: '102'},
   {acctNum: 'GA-0002', custNum: '820406-01-3346', custName: 'Umar Khatab', totBalance: '33'},
   {acctNum: 'GA-0003', custNum: '760211-01-7764', custName: 'Bilal Rabah', totBalance: '345'},
   {acctNum: 'GA-0004', custNum: '734571-12-7348', custName: 'Ahmad Albab', totBalance: '564'},
   {acctNum: 'GA-0005', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '43'},
   {acctNum: 'GA-0006', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '564'},
   {acctNum: 'GA-0007', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '768'},
   {acctNum: 'GA-0008', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '384'},
   {acctNum: 'GA-0009', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '743'},
   {acctNum: 'GA-00010', custNum: '839921-09-3548', custName: 'Safawi Rashid', totBalance: '54'},
   {acctNum: 'GA-00011', custNum: '782931-10-7748', custName: 'Pablo Aimar', totBalance: '764'},
   {acctNum: 'GA-00012', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '553'},
   {acctNum: 'GA-00013', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '784'},
   {acctNum: 'GA-00014', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '44'}
];

export interface InvestmentAcctList {
  acctNum: string;
  custNum: string;
  custName: string;
  totBalance: string;
}

const INVESTMENT_ACCT_DATA: InvestmentAcctList[] = [ //sample data
   {acctNum: 'IA-0001', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '43'},
   {acctNum: 'IA-0002', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '564'},
   {acctNum: 'IA-0003', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '768'},
   {acctNum: 'IA-0004', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '384'},
   {acctNum: 'IA-0005', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '743'},
   {acctNum: 'IA-0006', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '553'},
   {acctNum: 'IA-0007', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '784'},
   {acctNum: 'IA-0008', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '44'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contentElem = {
    contentType: 'home', //default landing page
    contentTitle: 'Welcome'
  }
  savingAcctList = SAVING_ACCT_DATA;
  goalsAcctList = GOALS_ACCT_DATA;
  investmentAcctList = INVESTMENT_ACCT_DATA;

  constructor(private dialog: MatDialog, private notification: NotificationService) {}

  openDialog(themeColor: 'primary' | 'accent' | 'warn'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: {
        themeColor,
      },
    });
  }

  openNotification(): void {
    this.notification.default('Default Notification');
  }

  onNavigate(features: { type: string, title: string }) {
    this.contentElem.contentType = features.type;
    this.contentElem.contentTitle = features.title;
  }

  onNewInvestment(investmentRec:any) {
   this.investmentAcctList.push(investmentRec);
   this.investmentAcctList = [...this.investmentAcctList];
  }

  onCloseInvestment(investmentRec:any) {
    for(let i=0;i<this.investmentAcctList.length;i++){ 
      if ( this.investmentAcctList[i].acctNum === investmentRec.acctNum) { 
        this.transferInvestment_toSaving(investmentRec);
        this.investmentAcctList.splice(i, 1); 
        break;
      }
    }
    this.investmentAcctList = [...this.investmentAcctList];
  }

  transferInvestment_toSaving(investmentRec:any) {
    for(let i=0;i<this.savingAcctList.length;i++){ 
      if ( this.savingAcctList[i].custNum === investmentRec.custNum) { 
        this.savingAcctList[i].totBalance = (parseFloat(this.savingAcctList[i].totBalance) + parseFloat(investmentRec.totBalance)).toString();
        break;
      }
    }
    this.savingAcctList = [...this.savingAcctList];
  }
}
