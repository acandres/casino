import { Casino } from "./Casino";
import { JuegoDeCasino } from "./JuegoDeCasino";
import { Poker } from "./Poker";
import { TragaMoneda } from "./TragaMoneda";

                       //(id: number, name: string, type: string, location: string, players: number,variant:string)
const poker = new Poker(1, 'poker', 'mesa', 'piso 1',5,'texas' );
                       //(id: number, name: string, type: string, location: string, payout: number)
const tm1 = new TragaMoneda(1,'Triple Lucky','palanca','lobby',30);

const casino = new Casino('ocean 11', 3, 'Las Vegas',900)
casino.setCasinoJuego(poker);
casino.setCasinoJuego(tm1);

casino.getInfo();