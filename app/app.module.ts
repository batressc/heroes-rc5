import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroeListComponent } from './heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroeService } from './services/heroe.service';
import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, HeroeListComponent, HeroeDetailComponent, DashboardComponent],
    providers: [HeroeService],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
