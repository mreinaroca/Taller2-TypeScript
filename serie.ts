/**
 * Clase que representa a una serie
 * @author Miguel Arturo Reina
 */
export class Serie {
    id: number;
    name: String;
    channel: String;
    seassons: number;
    constructor( pID: number, pName: string,  pChannel: string,  pSeassons: number)
    {
        this.id = pID;
        this.name = pName;
        this.channel = pChannel;
        this.seassons = pSeassons;
    }

}