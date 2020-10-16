import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestLoanPageRoutingModule } from './request-loan-routing.module';
import { RequestLoanPage } from './request-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestLoanPageRoutingModule
  ],
  declarations: [RequestLoanPage]
})
export class RequestLoanPageModule {}
