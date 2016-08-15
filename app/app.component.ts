import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html"
})
export class AppComponent {

    title = "My First Angular 2 App";

    changeTitle() {
        this.title = "May the force be with you!";
    }
}
