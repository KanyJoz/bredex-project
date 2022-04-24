export class User {
    private _name: string;
    private _email: string;
    private _token: string;

    constructor(name: string, email: string, token: string) {
        this._name = name;
        this._email = email;
        this._token = token;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get token(): string {
        return this._token;
    }
}
