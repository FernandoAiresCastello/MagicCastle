import { Room } from './room';
import { Inventory } from './inventory';
import { Flags } from './flags';

export class Player {

    room: Room;
    readonly inventory = new Inventory();
    readonly flags = new Flags();

    constructor() {
    }
}
