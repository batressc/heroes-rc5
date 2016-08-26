import { Component }  from '@angular/core';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
class AppComponent { 
    title: string;

    constructor() {
        this.title = 'Tour de heroes';
    }
}

export { AppComponent };