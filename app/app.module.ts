import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule }     from "@angular/http";

import { AppComponent }  from "./app.component";
import { CharactersComponent } from "./characters.component";
import { DataService } from "./characters.dataservice";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CharactersComponent
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
