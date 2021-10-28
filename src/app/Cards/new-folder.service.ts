import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loginInfo, UserInfo } from "../user-info.model"; 

@Injectable({providedIn: 'root'})
export class loginInfoService {
    private baseUrl:string = 'https://drive-app-8a337-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'login-info.json';
    
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<loginInfo>(this.baseUrl + this.myInfoEndpoint);
    }

    createFolder(data:loginInfo) {
        return this.http.put(this.baseUrl + this.myInfoEndpoint, data);
    }
}
