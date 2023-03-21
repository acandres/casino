import { JuegoDeCasino } from "./JuegoDeCasino";

export class Casino{
    private name: string;
    private category: number;
    private location: string;
    private players: number;
    private juegoDeCasino: JuegoDeCasino[];

    public constructor(name: string, category: number, location: string,players:number){
        this.name = name;
        this.category = category;
        this.location = location;
        this.players = players
        this.juegoDeCasino = [];
    };

    public getInfo(): Casino{
        console.log(this);
        
        return this;
    }

    public setCasinoJuego(juego: JuegoDeCasino){
        this.juegoDeCasino.push(juego);
    }   

}