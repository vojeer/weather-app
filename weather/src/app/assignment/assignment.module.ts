import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { TreandingAssetsComponent } from './treanding-assets/treanding-assets.component';


@NgModule({
  declarations: [
    TreandingAssetsComponent
  ],
  imports: [
    CommonModule,
    AssignmentRoutingModule
  ]
})
export class AssignmentModule { }
