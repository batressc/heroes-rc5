import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../shared/entities/heroe.entity';
import { HeroeService } from '../shared/services/heroe.service';

@Component({
    selector: 'dashboard',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html'
})
class DashboardComponent implements OnInit { 
    heroes: Heroe[];

    constructor(private heroeService: HeroeService, private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroeService.getHeroesHttp()
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