import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHome } from './dashboard-home/dashboardHome.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardHome }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
