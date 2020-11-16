import { StatesService } from "../core/service/states.service";
import { DiContainerService } from "../core/service/di-container.service";
import { WebsocketConnection } from "./websocket.connection";

export class MonsterStatesWebsocket implements WebsocketConnection {
    private statesService: StatesService;

    constructor() {
        const container = new DiContainerService();
        this.statesService = container.get('StatesService') as any;
    }

    receiveNewMonsterMessage(message: any, body: object): void {
        this.statesService.save(message);
    }

    receiveUpdateMonsterMessage(message: any, body: object): void {
        this.statesService.save(message);
    }

    receiveKillMonsterMessage(message: any, body: object): void {
        this.statesService.save(message);
    }

    register(): void {
     console.log('Registering: MonsterStatesWebsocket')
    }

}
