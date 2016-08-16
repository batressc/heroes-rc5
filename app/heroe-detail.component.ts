import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Heroe } from './entities/heroe.entity';
import { HeroeService } from './services/heroe.service';

@Component({
    selector: 'heroe-detail',
    inputs: ['heroe'],
    styleUrls: ['app/heroe-detail.component.css'],
    templateUrl: 'app/heroe-detail.component.html',
    
})
class HeroeDetailComponent implements OnInit {
    heroe: Heroe;

    constructor(private heroeService: HeroeService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((parametros: Params) => {
            let id = +parametros['id'];
            this.heroeService.getHeroeSlow(id)
                .then(result => this.heroe = result)
                .catch(error => {
                    this.heroe = new Heroe(-1, '', -1);
                    console.log(error);
                })
        });
    }

    irAtras(): void {
        window.history.back();
    }
}

export { HeroeDetailComponent };