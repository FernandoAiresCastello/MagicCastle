import { Exit } from './exit';
import { Inventory } from './inventory';
import { RoomFeature } from './room-feature';
import { Flags } from './flags';

export class Room {

    name: string;
    description: string;
    readonly inventory = new Inventory();
    readonly exits = new Array<Exit>();
    readonly features = new Array<RoomFeature>();
    readonly flags = new Flags();

    constructor() {
    }
}
