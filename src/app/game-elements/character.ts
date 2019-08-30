import { Inventory } from './inventory';
import { Flags } from './flags';

export class Character {

    name: string;
    description: string;
    readonly inventory = new Inventory();
    readonly flags = new Flags();

    constructor() {
    }
}
