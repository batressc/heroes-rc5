import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Heroe } from '../shared/entities/heroe.entity';
import { HeroeService } from '../shared/services/heroe.service';

@Component({
    selector: 'heroe-detail',
    inputs: ['heroe', 'modoAgregar'],
    outputs: ['close'],
    styleUrls: ['app/heroe-detail/heroe-detail.component.css'],
    templateUrl: 'app/heroe-detail/heroe-detail.component.html',
    
})
class HeroeDetailComponent implements OnInit {
    heroe: Heroe;
    modoAgregar: boolean;
    close: EventEmitter<Heroe>;

    constructor(private heroeService: HeroeService, private route: ActivatedRoute) {
        this.heroe = null;
        this.modoAgregar = false; 
        this.close = new EventEmitter<Heroe>();
    }

    ngOnInit(): void {
        if (this.modoAgregar) {
            this.heroeService.getLastID()
                .then(id => this.heroe = new Heroe(++id, '', 1))
                .catch(error => {
                    this.heroe = new Heroe(-1, '', 1)
                    console.error('Error al tratar de recuperar el último ID de los datos almacenados');
                    console.error(error);
                });
        } else {
            this.route.params.forEach((parametros: Params) => {
                if (parametros['id']) {
                    let id = +parametros['id'];
                    this.heroeService.getHeroeHttp(id)
                        .then(result => this.heroe = result)
                        .catch(error => {
                            this.heroe = new Heroe(-1, '', -1);
                            console.error("Error al recuperar los datos del heroe seleccionado");
                            console.log(error);
                        })
                }
            });
        }
    }

    guardar(): void {
        this.heroeService.save(this.heroe)
            .then(heroe => {
                this.heroe = heroe;
                this.irAtras();
            })
            .catch(error => {
                this.heroe = null;
                this.irAtras();
            });
    }

    irAtras(): void {
        this.close.emit(this.heroe);
        if (!this.modoAgregar) window.history.back();
    }
}

export { HeroeDetailComponent };