import { JuegoDeCasino } from "./JuegoDeCasino";

export class TragaMoneda extends JuegoDeCasino{
    private payout: number;   //porcentaje de ganancia

    public constructor(id: number, name: string, type: string, location: string, payout: number){
        super(id, name, type,location );
        this.payout = payout;
    }

    public getInfo(): TragaMoneda{
        return this;
    }
}