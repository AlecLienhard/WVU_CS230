import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { contentCard } from "./card-model";

@Injectable({providedIn: 'root'})
export class priorityInfoService{
    private baseUrl:string = 'https://drive-app-8a337-default-rtdb.firebaseio.com/';
    private infoEndpoint:string = 'CardData.json';

    constructor(private http: HttpClient){


    }

    getCardInfo(){
        console.log("getting from database");
        console.log(this.baseUrl + this.infoEndpoint);
        return this.http.get<contentCard[]>(this.baseUrl + this.infoEndpoint);
    }

    modifyCardInfo(data:contentCard[]){
        
        return this.http.put(this.baseUrl+this.infoEndpoint, data);
    }
}