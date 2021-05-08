import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.modules';
import { DashboardHome } from './dashboard-home/dashboardHome.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardHome],
  imports: [AngularMaterialModule, CommonModule],
  exports: [DashboardHome],
})
export class DashboardModule {}
