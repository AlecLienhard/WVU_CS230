import { Component } from "@angular/core";
import { newFolderService } from "./Cards/new-folder.service";
import { newFolder } from "./user-info.model";

@Component({
    selector: "drive-new-button",
    templateUrl: "new-button.component.html"
})
export class newButtonComponent {
    constructor(private newFolder: newFolderService){

    }
    onCreateFolder(data:newFolder){
        console.log("You pressed a button");
        this.newFolder.createFolder(data).subscribe(data =>{
            console.log("sending info to backend");
        });
        console.log(data);

    }

}