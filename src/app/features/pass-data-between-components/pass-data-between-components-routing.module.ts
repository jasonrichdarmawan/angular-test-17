import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'with-render-state',
  },
  {
    path: 'with-render-state',
    loadComponent: () => import("./presentation/pages/pass-data-between-components/pass-data-between-components.page").then(c => c.PassDataBetweenComponentsPage),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassDataBetweenComponentsRoutingModule { }
