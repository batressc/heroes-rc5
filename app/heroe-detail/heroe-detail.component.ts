import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Heroe } from '../shared/entities/heroe.entity';
import { HeroeService } from '../shared/services/heroe.service';

@Component({
    selector: 'heroe-detail',
    inputs: ['heroe', 'modoAgregar'],
    styleUrls: ['app/heroe-detail/heroe-detail.component.css'],
    templateUrl: 'app/heroe-detail/heroe-detail.component.html',
    
})
class HeroeDetailComponent implements OnInit {
    heroe: Heroe;
    modoAgregar: boolean;

    constructor(private heroeService: HeroeService, private route: ActivatedRoute) {
        this.heroe = null;
        this.modoAgregar = false; 
    }

    ngOnInit(): void {
        if (this.modoAgregar) {
            this.heroeService.getLastID();
            this.heroe = new Heroe(0, '', 1);
        } else {
            this.route.params.forEach((parametros: Params) => {
                let id = +parametros['id'];
                this.heroeService.getHeroeHttp(id)
                    .then(result => this.heroe = result)
                    .catch(error => {
                        this.heroe = new Heroe(-1, '', -1);
                        console.log(error);
                    })
            });
        }
    }

    irAtras(): void {
        window.history.back();
    }
}

export { HeroeDetailComponent };