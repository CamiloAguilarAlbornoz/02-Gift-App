import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-pages/dashboard-pages')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
