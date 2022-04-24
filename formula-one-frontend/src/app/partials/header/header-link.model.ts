export class HeaderLink {
    private readonly _text: string;
    private readonly _navigationArray: string[];
    private readonly _needsAuth: boolean;

    constructor(text: string, navigationArray: string[], needsAuth: boolean) {
        this._text = text;
        this._navigationArray = navigationArray;
        this._needsAuth = needsAuth;
    }

    get text(): string {
        return this._text;
    }

    get navigationArray(): string[] {
        return this._navigationArray;
    }

    get needsAuth(): boolean {
        return this._needsAuth;
    }
}
