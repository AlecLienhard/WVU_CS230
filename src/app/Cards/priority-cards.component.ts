import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-priority-cards',
    templateUrl: 'priority-cards.component.html',
    // styleUrls: ['./cards.component.css']
})
export class priorityCardsComponent {
    ngOnInit(){
        console.log("loading this component");
        console.log(this.icon);
        console.log(this.lastOpened);
        console.log(this.imagePath);

    }
    @Input()
    title! :string;
    @Input()
    icon! :string;
    @Input()
    lastOpened! :string;
    @Input()
    imagePath! :string;

   }

   