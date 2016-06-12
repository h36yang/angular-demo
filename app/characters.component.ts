import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { DataService } from "./characters.dataservice";

@Component({
    selector: "my-characters",
    templateUrl: "app/characters.component.html",
    styles: [
        `.characterInfo {
            padding-bottom: 10px;
        }`
    ]
})
export class CharactersComponent implements OnInit {

    characters: Character[];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._dataService.getCharacters().subscribe(c => this.characters = c);
    }
}

class Character {
    id: number;
    name: string;
    twitter: string;
}
