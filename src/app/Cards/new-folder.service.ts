import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { loginInfo, UserInfo } from "../user-info.model"; 
import { DatabaseService } from "../database.service";

@Injectable({providedIn: 'root'})
export class loginInfoService implements OnInit{
    private baseUrl:string = 'https://drive-app-8a337-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'login-info.json';
    
    constructor(private http: HttpClient, private db: DatabaseService) {

    }

    ngOnInit():void{
        console.log("sending get request to Server.");
        this.getUserInfo();
        console.log("showing login info");
        
    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<loginInfo>(this.baseUrl + this.myInfoEndpoint);
    }

    createFolder(data:loginInfo) {
        return this.http.put(this.baseUrl + this.myInfoEndpoint, data);
        // return this.http.post(this.baseUrl + this.myInfoEndpoint, data);
    }
}
