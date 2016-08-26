import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroeSearchService } from '../shared/services/heroe-search.service';
import { Heroe } from '../shared/entities/heroe.entity';

@Component({
    selector: 'heroe-search',
    templateUrl: 'app/heroe-search/heroe-search.component.html',
    styleUrls: ['app/heroe-search/heroe-search.component.css']
})
class HeroeSearchComponent implements OnInit {
    heroes: Observable<Heroe[]>;
    private searchTerms = new Subject<string>();
    
    constructor(private heroeSearchService: HeroeSearchService, private router: Router) { }
    
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term ? this.heroeSearchService.search(term) : Observable.of<Heroe[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Heroe[]>([]);
            });
    }

    gotoDetail(heroe: Heroe): void {
        let link = ['/heroe', heroe.id];
        this.router.navigate(link);
    }
}

export { HeroeSearchComponent };