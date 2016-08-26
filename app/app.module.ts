import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeService } from './shared/services/heroe.service';
import { routing } from './app.routing';
import { InMemoryDataService } from './shared/mocks/in-memory-data.service';
import { HeroeSearchComponent } from './heroe-search/heroe-search.component';
import { HeroeSearchService } from './shared/services/heroe-search.service';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    declarations: [AppComponent, HeroeListComponent, HeroeDetailComponent, DashboardComponent, HeroeSearchComponent],
    providers: [
        HeroeService,
        HeroeSearchService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
