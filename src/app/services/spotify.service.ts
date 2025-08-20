import { Injectable } from "@angular/core";
import { SpotifyConsfiguration } from "../../enviroment/enviroment";

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    
    constructor() { }

    async obterUrlLogin(): Promise<string> {
        
        const authPoint = `${SpotifyConsfiguration.authEndpoint}?`
    }
}