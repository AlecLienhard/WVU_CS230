export class contentCard{
    title: string;
    lastOpened: string;
    imagePath: string;


constructor({title, lastOpened, imagePath}:
    {title:string, lastOpened:string, imagePath: string}){

    this.title = title;
    this.lastOpened = lastOpened;
    this.imagePath = imagePath;
}

}