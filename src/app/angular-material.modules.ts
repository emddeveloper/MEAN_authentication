import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatIconModule, MatToolbarModule],
})
export class AngularMaterialModule {}
