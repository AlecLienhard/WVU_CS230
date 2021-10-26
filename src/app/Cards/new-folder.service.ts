import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { newFolder } from "./new-folder-model";


@Injectable({providedIn: 'root'})
export class newFolderService{
    private baseUrl:string = 'https://drive-app-8a337-default-rtdb.firebaseio.com/';
    private infoEndpoint:string = '.json';

    constructor(private http: HttpClient){


    }

    getInfo(){
        console.log("getting from database");
        console.log(this.baseUrl + this.infoEndpoint);
        return this.http.get<newFolder>(this.baseUrl + this.infoEndpoint);
    }

    createFolder(data:newFolder){
        
        return this.http.put(this.baseUrl+this.infoEndpoint, data);
    }
}