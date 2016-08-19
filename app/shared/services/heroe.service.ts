import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Heroe } from '../entities/heroe.entity';
import { ARRAY_HEROES } from '../mocks/temp-data.mock'

@Injectable()
class HeroeService { 
    private heroesURL: string = 'app/heroes';

    constructor(private http: Http) { }

    getHeroes(): Promise<Heroe[]> {
        return Promise.resolve(ARRAY_HEROES);
    }

    getHeroesSlow(): Promise<Heroe[]> {
        return new Promise<Heroe[]>(resolve => setTimeout(() => resolve(ARRAY_HEROES), 1000));
    }

    getHeroe(id: number): Promise<Heroe> {
        return Promise.resolve(ARRAY_HEROES.find(x => x.id === id));
    }

    getHeroeSlow(id: number): Promise<Heroe> {
        return new Promise<Heroe>(resolve => setTimeout(() => resolve(ARRAY_HEROES.find(x => x.id === id)), 1000));
    }

    handleError(error: any): Promise<void> {
        console.error('Ha ocurrido un error en el servicio de datos');
        return Promise.reject(error.message || error);
    }

    getHeroesHttp(): Promise<Heroe[]> {
        return this.http.get(this.heroesURL)
            .toPromise()
            .then(response => response.json().data as Heroe[])
            .catch(this.handleError);
    }

    getHeroeHttp(id: number): Promise<Heroe> {
        return this.getHeroesHttp()
            .then(heroes => heroes.find(x => x.id === id));
    } 

    private post(heroe: Heroe): Promise<Heroe> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.heroesURL, JSON.stringify(heroe), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(heroe: Heroe): Promise<Heroe> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let url = `${this.heroesURL}/${heroe.id}`

        return this.http.put(url, JSON.stringify(heroe), { headers: headers })
            .toPromise()
            .then(() => heroe)
            .catch(this.handleError);
    }

    delete(heroe: Heroe): Promise<Response> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let url = `${this.heroesURL}/${heroe.id}`

        return this.http.delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    save(heroe: Heroe): Promise<Heroe> {
        if (heroe.id !== -1) return this.put(heroe);
        else return this.post(heroe); 
    }

}

export { HeroeService };