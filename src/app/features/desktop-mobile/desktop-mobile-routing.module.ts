import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isDesktopGuard } from './presentation/guards/is-desktop/is-desktop.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./presentation/pages/desktop/desktop.page").then(c => c.DesktopPage),
    canMatch: [isDesktopGuard],
  },
  {
    path: '',
    loadComponent: () => import("./presentation/pages/mobile/mobile.page").then(c => c.MobilePage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopMobileRoutingModule { }
