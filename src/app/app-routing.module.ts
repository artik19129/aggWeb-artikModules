import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then(m => m.DownloadModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
