import { Routes, RouterModule } from '@angular/router';

import { HeroeListComponent } from './heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroeListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroe/:id', component: HeroeDetailComponent, },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

const routing = RouterModule.forRoot(appRoutes);

export { routing };