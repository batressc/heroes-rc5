import { Routes, RouterModule } from '@angular/router';

import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: 'heroes', component: HeroeListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroe/:id', component: HeroeDetailComponent, },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

const routing = RouterModule.forRoot(appRoutes);

export { routing };