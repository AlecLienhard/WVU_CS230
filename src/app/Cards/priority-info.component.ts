import { Component, Injectable, OnInit } from "@angular/core";
import { contentCard } from "./card-model";
import { priorityInfoService } from "./priority-card.service";

@Component({
    selector: "priority-info",
    templateUrl: "priority.component.html"

})



export class priorityInfoComponent implements OnInit {
    cardInfo: contentCard[] = [];

    constructor(private infoService: priorityInfoService) {

    }


    ngOnInit(): void {
        console.log("Registering priorityInfo as a subscriber");
        this.showPriorityInfo();


    }

    showPriorityInfo() {
        this.infoService.getCardInfo().subscribe((data: contentCard[]) => {
            console.log(data);
            for(var card of data){
                this.cardInfo.push(card);
            }

        });
    
     
        }
}
