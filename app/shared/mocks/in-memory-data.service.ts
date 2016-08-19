import { Heroe } from '../entities/heroe.entity';

class InMemoryDataService {
    createDb() {
        let heroes: Heroe[] = [
            new Heroe(121, 'batressc', 1),
            new Heroe(132, 'batriano', 2),
            new Heroe(453, 'batrianito', 3),
            new Heroe(634, 'batrencio', 4),
            new Heroe(4855, 'batruncionerio', 5)
        ]; 
        return { heroes };
    }
}

export { InMemoryDataService };