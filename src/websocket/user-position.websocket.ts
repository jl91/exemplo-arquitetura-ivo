import { StatesService } from "../core/service/states.service";
import { DiContainerService } from "../core/service/di-container.service";
import { WebsocketConnection } from "./websocket.connection";

export class UserPositionWebsocket implements WebsocketConnection {
    private statesService: StatesService;

    constructor() {
        const container = new DiContainerService();
        this.statesService = container.get('StatesService') as any;
    }


    processEvent1(): void {
    }

    processEvent2(): void {
    }

    processEvent3(): void {
    }

    processEvent4(): void {
    }

    processEvent5(): void {
    }


    register(): void {
        websocket.on('evento1', this.processEvent1.bind(this));
        websocket.on('evento2', this.processEvent2.bind(this));
        websocket.on('evento3', this.processEvent3.bind(this));
        websocket.on('evento4', this.processEvent4.bind(this));
        websocket.on('evento5', this.processEvent5.bind(this));
    }

}
