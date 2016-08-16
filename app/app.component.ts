import { Component, OnInit }  from '@angular/core';

import { Heroe } from './entities/heroe.entity';
import { HeroeService } from './services/heroe.service';


@Component({
    selector: 'my-app',
    providers: [HeroeService],
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
class AppComponent implements OnInit { 
    title: 'Tour de Heroes';
    selectedHeroe: Heroe;
    heroes: Heroe[];

    constructor(private heroeService: HeroeService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(data: Heroe) {
        this.selectedHeroe = data;
    }

    getHeroes(): void {
        this.heroeService.getHeroesSlow()
            .then(result => this.heroes = result)
            .catch(error => {
                this.heroes = [];
                console.log(error)
            });
    }
}

export { AppComponent };