import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-new-folder',
    templateUrl: 'priority-card.component.html',
})
export class newFolderComponent {
    ngOnInit(){
        console.log("loading this component");
        console.log(this.title);
       

    }
    @Input()
    title! :string;
    
   }

   