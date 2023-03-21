export class JuegoDeCasino{

private id:number;
private name: string;
private type: string;
private location: string;

 public constructor(id:number,name: string, type: string, location: string, ){
        
        this.id = id;
        this.name = name;
        this.type = type;
        this.location = location;
    }

    public getInfo(): JuegoDeCasino{
        return this;
    }
}