export class FooterLink {
    private readonly _linkURL: string;
    private readonly _faDescriptor: string;

    constructor(linkURL: string, faDescriptor: string) {
        this._linkURL = linkURL;
        this._faDescriptor = faDescriptor;
    }

    get linkURL(): string {
        return this._linkURL;
    }

    get faDescriptor(): string {
        return this._faDescriptor;
    }
}
