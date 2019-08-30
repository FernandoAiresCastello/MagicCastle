import { Flags } from './flags';

export class RoomFeature {

    name: string;
    description: string;
    readonly flags = new Flags();

    constructor() {
    }
}
