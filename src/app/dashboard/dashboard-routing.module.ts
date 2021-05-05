import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterGuard } from '../helper/router.guard';

import { DashboardHome } from './dashboard-home/dashboardHome.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardHome, canActivate: [RouterGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
