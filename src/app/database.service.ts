import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { newFolder } from "./Cards/new-folder-model";
import { UserInfo } from "./user-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<newFolder[]>;
    constructor(private db: AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<newFolder>('login-info').valueChanges();
    }
    public showData(){
        this.items.subscribe((data:newFolder[]) =>{
            console.log("data recieved");
            for(let item of data){
                console.log(data);
            }
            
        })
    }
}