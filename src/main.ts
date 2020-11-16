import { WebsocketConnection } from "./websocket/websocket.connection";
import { PocketWebsocket } from "./websocket/pocket.websocket";
import { UserPositionWebsocket } from "./websocket/user-position.websocket";
import { MonsterStatesWebsocket } from "./websocket/monster-states.websocket";

const init = () => {

    [
        PocketWebsocket,
        UserPositionWebsocket,
        MonsterStatesWebsocket
    ].forEach(websocket => {
        const socket = new websocket() as WebsocketConnection;
        socket.register();
    })


};


init();
