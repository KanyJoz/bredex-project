export class HeaderLink {
    private readonly _text: string;
    private readonly _navigationArray: string[];

    constructor(text: string, navigationArray: string[]) {
        this._text = text;
        this._navigationArray = navigationArray;
    }

    get text(): string {
        return this._text;
    }

    get navigationArray(): string[] {
        return this._navigationArray;
    }
}
