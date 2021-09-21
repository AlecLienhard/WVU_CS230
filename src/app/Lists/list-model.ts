export class list{
    title: string;
    owner: string;
    dateModified: string;
    imagePath: string;
    fileSize: string;


constructor({title, owner, dateModified, imagePath, fileSize}:
    {title:string, owner:string, dateModified:string, imagePath: string, fileSize:string}){

    this.title = title;
    this.owner = owner;
    this.dateModified = dateModified;
    this.imagePath = imagePath;
    this.fileSize = fileSize;
}

}