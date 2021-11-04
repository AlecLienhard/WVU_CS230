import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { loginInfoService } from "./Cards/new-folder.service";
import { DatabaseService } from "./database.service";
import { loginInfo } from "./user-info.model";

@Component({
    selector: "drive-new-button",
    templateUrl: "login.component.html"
})
export class loginComponent {
    info: loginInfo | undefined;
    
    constructor(private loginInfo: loginInfoService, private dbService:DatabaseService){
        
       
    }
    onCreateFolder(data:loginInfo){
        console.log("You pressed a button");
        this.loginInfo.createFolder(data).subscribe(data =>{
            console.log("sending info to backend");
        });
        console.log(data);

    }
    

}