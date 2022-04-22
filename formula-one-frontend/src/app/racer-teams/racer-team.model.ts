export class RacerTeam {
    name: string;
    yearOfFoundation: number;
    wonWorldCupsNumber: number;
    haveAlreadyPayed: boolean;
    id: number;

    constructor(
        name: string,
        yearOfFoundation: number,
        wonWorldCupNumber: number,
        haveAlreadyPayed: boolean = false,
        id: number = Math.random()
    ) {
        this.id = id;
        this.name = name;
        this.yearOfFoundation = this.checkYearOfDoundation(yearOfFoundation);
        this.wonWorldCupsNumber = this.checkWonWorldCupsNumber(wonWorldCupNumber);
        this.haveAlreadyPayed = haveAlreadyPayed;
    }

    private checkYearOfDoundation(yearOfFoundation: number): number {
        return yearOfFoundation < 1700 ? 1700 : yearOfFoundation;
    }

    private checkWonWorldCupsNumber(wonWorldCups: number): number {
        return wonWorldCups < 0 ? 0 : wonWorldCups;
    }
}
