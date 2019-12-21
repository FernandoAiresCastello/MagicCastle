import { Castle } from '../game-elements/castle';
import { Player } from '../game-elements/player';
import { Message } from '../ui-elements/message';

export class GameEngine {

    readonly firstMessage: string;
    readonly castle = new Castle();
    readonly player = new Player();

    constructor() {
        this.firstMessage = 'Welcome!\nThis is the Magic Castle.';
    }

    getMessage(): Message {
        const text = 'Ok.';
        return new Message('incoming', text);
    }

    interpretCommand(command: string) {
    }
}
