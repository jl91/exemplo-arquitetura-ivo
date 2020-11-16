import { Connection } from "../database/connection.interface";
import { QueryExecutor } from "../database/query-executor.interface";
import { DatabaseService } from "../database/database.service";
import { UserEntity } from "../entity/user.entity";

export class TradeMonsterService {

    private readonly _connection: Connection;
    private readonly _queryExecutor: QueryExecutor;

    constructor(
        private databaseService: DatabaseService
    ) {
        this._connection = this.databaseService.getConnection();
        this._queryExecutor = this._connection.connect({});
    }

    trade(
        player1: UserEntity,
        player2: UserEntity
    ): void {

    }
}
