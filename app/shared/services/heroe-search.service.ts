import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Heroe } from '../entities/heroe.entity';

@Injectable()
class HeroeSearchService {
    private urlBase: string = 'app/heroes';

    constructor(private http: Http) { }

    search(termino: string): Observable<Heroe[]> {
        return this.http.get(`${this.urlBase}/?name=${termino}`)
            .map((r: Response) => r.json().data as Heroe[]);
    }
}

export { HeroeSearchService };