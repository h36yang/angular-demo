import { Component } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { DataService } from "./characters.dataservice";
import { CharactersComponent } from "./characters.component";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    directives: [CharactersComponent],
    providers: [
        HTTP_PROVIDERS,
        DataService
    ]
})
export class AppComponent {

    title = "My First Angular 2 App";

    changeTitle() {
        this.title = "May the force be with you!";
    }
}
