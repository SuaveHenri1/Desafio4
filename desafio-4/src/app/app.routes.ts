import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarMoedasComponent } from './listar-moedas/listar-moedas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listar-moedas', component: ListarMoedasComponent},
    { path: '**', redirectTo: '' }
];
