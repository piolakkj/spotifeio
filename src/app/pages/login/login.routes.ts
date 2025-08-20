import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login.component').then(p => p.LoginComponent)
    }
];