import { DatabaseService } from "../database/database.service";
import { Connection } from "../database/connection.interface";
import { QueryExecutor } from "../database/query-executor.interface";

export class StatesService {

    private readonly _connection: Connection;
    private readonly _queryExecutor: QueryExecutor;

    constructor(
        private databaseService: DatabaseService
    ) {
        this._connection = this.databaseService.getConnection();
        this._queryExecutor = this._connection.connect({});
    }

    save(data: any): void {
        this._queryExecutor.execute(data);
    }

}
