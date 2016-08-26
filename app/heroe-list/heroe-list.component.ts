import { Component, OnInit }  from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../shared/entities/heroe.entity';
import { HeroeService } from '../shared/services/heroe.service';


@Component({
    selector: 'heroe-list',
    styleUrls: ['app/heroe-list/heroe-list.component.css'],
    templateUrl: 'app/heroe-list/heroe-list.component.html'
})
class HeroeListComponent implements OnInit { 
    selectedHeroe: Heroe;
    heroes: Heroe[];
    isAgregar: boolean;

    constructor(private heroeService: HeroeService, private router: Router) { 
        this.isAgregar = false;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(data: Heroe) {
        this.selectedHeroe = data;
    }

    getHeroes(): void {
        this.heroeService.getHeroesHttp()
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

    agregarHeroe(): void {
        this.isAgregar = true;
        this.selectedHeroe = null;
    }

    onClose(data: Heroe): void {
        this.isAgregar = false;
        this.selectedHeroe = null;
        if (data) this.getHeroes();
    }

    borrarHeroe(data: Heroe, event: any): void {
        //Para evitar que siga con el click del boton
        event.stopPropagation();
        this.heroeService.delete(data)
            .then(response => {
                this.selectedHeroe = null;
                this.getHeroes();
            })
            .catch(error => console.log(error));
    }
}

export { HeroeListComponent };