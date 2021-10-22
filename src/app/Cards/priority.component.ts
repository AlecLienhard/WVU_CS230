import { Component, Injectable, OnInit } from "@angular/core";
import { priorityInfoService } from "./priority-card.service";
import { contentCard } from "./card-model";


@Component({
    selector: "priority-card",
    templateUrl: "priority.component.html"
})

export class priorityComponent implements OnInit {

    cardInfo: contentCard[] = [];
    constructor(private infoService: priorityInfoService) {
    }

    ngOnInit(): void {
        console.log("Registering priorityInfo as a subscriber");
        this.showPriorityInfo();

        // this.infoService.modifyCardInfo().subscribe(data =>{
        //     console.log(data);
        // });


    }

    showPriorityInfo() {
        this.infoService.getCardInfo().subscribe((data: contentCard[]) => {
            console.log("Entering Loop");
            for(var card of data){
                console.log(card);

                this.cardInfo.push(card);
            }

        });
    
     
        }

    }


