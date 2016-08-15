import { IHeroe } from '../entities/contracts/IHeroe.contract';
import { Heroe } from '../entities/Heroe.entity';

const ARRAYHEROES: IHeroe[] = [
    new Heroe(1, 'batressc', 1),
    new Heroe(2, 'batriano', 2),
    new Heroe(3, 'batrianito', 3),
    new Heroe(4, 'batrencio', 4),
    new Heroe(5, 'batruncionerio', 5)
];

export { ARRAYHEROES };