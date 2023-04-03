/**
 * Clase que representa a una serie
 * @author Miguel Arturo Reina
 */
export class Serie {
    constructor(pID, pName, pChannel, pSeasons, pDescription, pLink, pImage) {
        this.id = pID;
        this.name = pName;
        this.channel = pChannel;
        this.seasons = pSeasons;
        this.description = pDescription;
        this.link = pLink;
        this.image = pImage;
    }
}
