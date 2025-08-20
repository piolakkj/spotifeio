import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./pages/login/login.routes').then(rota => rota.routes)
 }
];
