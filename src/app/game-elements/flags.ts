
export class Flags {

    flags = new Array<string>();

    constructor() {
    }

    set(flag: string) {
        if (!this.has(flag)) {
            this.flags.push(flag);
        }
    }

    unset(flag: string) {
        if (this.has(flag)) {
            this.flags = this.flags.filter(f => f !== flag);
        }
    }

    toggle(flag: string) {
        if (this.has(flag)) {
            this.unset(flag);
        } else {
            this.set(flag);
        }
    }

    has(flag: string) {
        return this.flags.indexOf(flag) >= 0;
    }
}
