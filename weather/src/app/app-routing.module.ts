import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherInfoComponent
  },

  {
    path: 'assignment',
    loadChildren:()=>  import('./assignment/assignment.module').then(m => m.AssignmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
