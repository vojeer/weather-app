import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreandingAssetsComponent } from './treanding-assets/treanding-assets.component';

const routes: Routes = [
  {
    path:'',
    component: TreandingAssetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
