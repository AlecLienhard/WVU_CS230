import { Component } from "@angular/core";
import { loginInfoService } from "./Cards/new-folder.service";
import { loginInfo } from "./user-info.model";

@Component({
    selector: "drive-new-button",
    templateUrl: "login.component.html"
})
export class loginComponent {
    constructor(private newFolder: loginInfoService){

    }
    onCreateFolder(data:loginInfo){
        console.log("You pressed a button");
        this.newFolder.createFolder(data).subscribe(data =>{
            console.log("sending info to backend");
        });
        console.log(data);

    }

}