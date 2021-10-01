import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "drive-user-info",
    templateUrl: "user-info.component.html"
})

export class userInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;

    constructor(private http:HttpClient){

    }
    ngOnInit(): void{
        console.log("Sending Get Request to Server");
        this.getUserInfo();
        console.log("Showing User Info");
        this.showUserInfo();
    }

    getUserInfo(){
        return this.http.get<UserInfo>('https://drive-app-8a337-default-rtdb.firebaseio.com/my-info.json');
    
    }
    showUserInfo(){
        this.getUserInfo().subscribe((data:UserInfo) => {
            console.log(data);
            this.myInfo = data;

        })
    }
}