// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [SidenavComponent, DialogComponent],
  imports: [CommonModule, MaterialModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule],
  exports: [SidenavComponent],
})
export class SharedModule {}
