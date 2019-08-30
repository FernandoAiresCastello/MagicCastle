import { Room } from './room';
import { Flags } from './flags';

export class Exit {

    direction: string;
    room: Room;
    readonly flags = new Flags();

    constructor() {
    }
}
