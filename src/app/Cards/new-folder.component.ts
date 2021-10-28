import { Component, Injectable, OnInit } from "@angular/core";
import { loginInfo } from "../user-info.model";
import { loginInfoService } from "./new-folder.service";

@Component({
    selector: "drive-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: loginInfo | undefined;

    constructor(private loginInfo:loginInfoService) {
    }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo() {
        this.loginInfo.getUserInfo().subscribe((data: loginInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}