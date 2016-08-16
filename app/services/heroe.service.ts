import { Injectable } from '@angular/core';

import { Heroe } from '../entities/heroe.entity';
import { ARRAY_HEROES } from '../mocks/temp-data.mock'

@Injectable()
class HeroeService { 
    getHeroes(): Promise<Heroe[]> {
        return Promise.resolve(ARRAY_HEROES);
    }

    getHeroesSlow(): Promise<Heroe[]> {
        return new Promise<Heroe[]>(resolve => setTimeout(() => resolve(ARRAY_HEROES), 3000));
    }
}

export { HeroeService };