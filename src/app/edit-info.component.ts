import { Component } from "@angular/core";
import { UserInfoService } from "./Cards/user-info.service";
import { DatabaseService } from "./database.service";
import { UserInfo } from "./user-info.model";

@Component({
    selector: "drive-edit-info",
    templateUrl: "edit-info.component.html"
})
export class EditInfoComponent {
    constructor(private infoService: UserInfoService, private dbService:DatabaseService){

    }
    onUpdateInfo(data:UserInfo){
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data =>{
            console.log("updated your info");
        });
        console.log(data);

    }

}