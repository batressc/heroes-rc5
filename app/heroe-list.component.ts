import { Component, OnInit }  from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from './entities/heroe.entity';
import { HeroeService } from './services/heroe.service';


@Component({
    selector: 'heroe-list',
    styleUrls: ['app/heroe-list.component.css'],
    templateUrl: 'app/heroe-list.component.html'
})
class HeroeListComponent implements OnInit { 
    selectedHeroe: Heroe;
    heroes: Heroe[];

    constructor(private heroeService: HeroeService, private router: Router) { }

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

    gotoDetail(): void {
        let link = ['/heroe', this.selectedHeroe.id];
        this.router.navigate(link);
    }
}

export { HeroeListComponent };