import { IHeroe } from './contracts/IHeroe.contract';

class Heroe implements IHeroe {
    constructor(public id: number, public name: string, public ranking: number) { }
}

export { Heroe };