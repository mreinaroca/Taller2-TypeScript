/**
 * Clase que representa a una serie
 * @author Miguel Arturo Reina
 */
export class Serie {
    id: number;
    name: String;
    channel: String;
    seassons: number;
    description: String;
    link: String;
    image: String;
    constructor( pID: number, pName: string,  pChannel: string,  pSeassons: number, pDescription:String, pLink: String, pImage: String)
    {
        this.id = pID;
        this.name = pName;
        this.channel = pChannel;
        this.seassons = pSeassons;
        this.description = pDescription;
        this.link = pLink;
        this.image =pImage;
    }

}