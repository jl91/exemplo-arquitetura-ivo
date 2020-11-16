import { MonsterStatesWebsocket } from "../../websocket/monster-states.websocket";
import { DatabaseService } from "../database/database.service";

export class DiContainerService {

    private instancesMap: Map<string, object> = new Map<string, object>();

    constructor() {
        this.registerInstances();
    }


    get(name: string): object {
        if (this.instancesMap.has(name)) {
            return this.instancesMap.get(name);
        }

        throw new Error(`instance not found for name: ${name}`)
    }

    registerInstances() {

        this.instancesMap.set('DatabaseService', new DatabaseService());

        this.instancesMap.set(
            'StatesWebsocket',
            new MonsterStatesWebsocket(
                this.instancesMap.get('DatabaseService') as any
            )
        );
    }

}
