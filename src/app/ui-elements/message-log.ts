import { Message } from './message';

export class MessageLog {
    readonly messages = new Array<Message>();

    public add(message: Message) {
        this.messages.push(message);
    }
}
