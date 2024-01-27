import { Routes } from '@angular/router';
import { isDesktopGuard } from './features/desktop-mobile/presentation/guards/is-desktop/is-desktop.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'desktop-mobile',
        pathMatch: 'full'
    },
    {
        path: 'desktop-mobile',
        loadChildren: () => import("./features/desktop-mobile/desktop-mobile.module").then(m => m.DesktopMobileModule),
    },
    {
        path: 'defer',
        loadChildren: () => import("./features/defer/defer.module").then(m => m.DeferModule),
    },
];
