import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroeDetailComponent } from './heroe-detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HeroeDetailComponent],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };
