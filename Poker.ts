import { JuegoDeCasino } from "./JuegoDeCasino";

export class Poker extends JuegoDeCasino{
    private players: number;
    private variant:string

    public constructor(id: number, name: string, type: string, location: string, players: number,variant:string){
        super(id, name, type,location );
        this.players = players;
        this.variant=variant;
    }

    public getInfo(): Poker{
        return this;
    }
}