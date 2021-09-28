import { Component, OnInit } from "@angular/core";
import { contentCard } from "./card-model";
import { mock_cards } from "./mock-cards";

@Component({
    selector: "priority-card",
    templateUrl: "priority.component.html"
})

export class priorityComponent implements OnInit{
    cards:contentCard[] = [];

    ngOnInit(): void{
        for(var card of mock_cards){
            this.cards.push(new contentCard(card));
        }
    }
}
   
