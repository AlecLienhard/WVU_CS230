import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { loginInfoService } from "./Cards/new-folder.service";
import { DatabaseService } from "./database.service";
import { loginInfo } from "./user-info.model";

@Component({
    selector: "drive-new-button",
    templateUrl: "login.component.html"
})
export class loginComponent {
    constructor(private newFolder: loginInfoService, private dbService:DatabaseService){
        
        dbService.showData();
    }
    onCreateFolder(data:loginInfo){
        console.log("You pressed a button");
        this.newFolder.createFolder(data).subscribe(data =>{
            console.log("sending info to backend");
        });
        console.log(data);

    }

}