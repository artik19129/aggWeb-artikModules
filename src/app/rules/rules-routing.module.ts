import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './pages/rules/rules.component';


const routes: Routes = [
  {
    path: '',
    component: RulesComponent
  },
  {
    path: ':id',
    component: RulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
