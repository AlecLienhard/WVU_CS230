import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-priority-cards',
    templateUrl: 'priority-cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class priorityCardsComponent {
    @Input()
    title! :string;
    @Input()
    lastOpened! :string;
    @Input()
    imagePath! :string;
   }
