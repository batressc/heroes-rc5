import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from './entities/heroe.entity';
import { HeroeService } from './services/heroe.service';

@Component({
    selector: 'dashboard',
    styleUrls: ['app/dashboard.component.css'],
    templateUrl: 'app/dashboard.component.html'
})
class DashboardComponent implements OnInit { 
    heroes: Heroe[];

    constructor(private heroeService: HeroeService, private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroeService.getHeroesSlow()
            .then(resultado => this.heroes = resultado.slice(1, 5))
            .catch(error => {
                this.heroes = [];
                console.log(error);
            });
    }

    gotoDetail(data: Heroe): void {
        let link = ['/heroe', data.id];
        this.router.navigate(link);
    }
}

export { DashboardComponent };