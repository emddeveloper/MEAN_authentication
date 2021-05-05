import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.modules';
import { DashboardHome } from './dashboard-home/dashboardHome.component';

@NgModule({
  declarations: [DashboardHome],
  imports: [AngularMaterialModule],
  exports: [DashboardHome],
})
export class DashboardModule {}
