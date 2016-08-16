import { Component } from '@angular/core';

import { Heroe } from './entities/heroe.entity';

@Component({
    selector: 'heroe-detail',
    inputs: ['heroe'],
    templateUrl: 'app/heroe-detail.component.html'
})
class HeroeDetailComponent {
    heroe: Heroe;
}

export { HeroeDetailComponent };