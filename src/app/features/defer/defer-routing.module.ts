import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-with-email',
    pathMatch: 'full',
  },
  {
    path: 'login-with-email',
    loadComponent: () => import("./presentation/pages/login-with-email/login-with-email.page").then(c => c.LoginWithEmailPage),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeferRoutingModule { }
