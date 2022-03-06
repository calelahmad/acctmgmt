// app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SavingAcctComponent } from './shared/components/saving-acct/saving-acct.component';
import { GoalsAcctComponent } from './shared/components/goals-acct/goals-acct.component';
import { InvestmentAcctComponent } from './shared/components/investment-acct/investment-acct.component';
import { CheckBalanceComponent } from './shared/components/check-balance/check-balance.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent,SavingAcctComponent,GoalsAcctComponent,HomeComponent,InvestmentAcctComponent,CheckBalanceComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, MaterialModule, MatTableModule,
            MatSelectModule,MatAutocompleteModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
