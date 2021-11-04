import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { loginInfo } from "./user-info.model"
import { UserInfo } from "./user-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<loginInfo[]>;
    constructor(private db: AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<loginInfo>('login-info').valueChanges();
    }
    // public showData(){
    //     this.items.subscribe((data:loginInfo[]) =>{
    //         console.log("data recieved");
    //         console.log(data);
    //         for(let item of data){
    //             console.log(data);
    //             console.log(item);
    //         }
            
    //     })
    public getLoginInfo(){
        return this.db.list<loginInfo>('login-info').valueChanges();
    }
    // public enterLoginInfo(data:loginInfo){
    //     this.db.list<loginInfo>('login-info').push
    // }
    }