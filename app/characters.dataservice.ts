import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

    constructor(private _http: Http) { }

    getCharacters() {
        return this._http.get("app/data.json")
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.message || "Server error");
    }
}
