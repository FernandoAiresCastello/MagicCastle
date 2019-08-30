
export type MessageType = 'incoming' | 'outgoing';

export class Message {
    type: MessageType;
    text: string;

    constructor(type: MessageType, text: string) {
        this.type = type;
        this.text = text;
    }
}
