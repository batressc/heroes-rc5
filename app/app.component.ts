import { Component }  from '@angular/core';

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