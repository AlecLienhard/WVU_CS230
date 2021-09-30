export class contentCard{
    title: string;
    lastOpened: string;
    imagePath: string;
    icon: string;


constructor({title, lastOpened, imagePath, icon}:
    {title:string, lastOpened:string, imagePath: string, icon: string}){

    this.title = title;
    this.lastOpened = lastOpened;
    this.imagePath = imagePath;
    this.icon = icon;
}

}