import { Connection } from "./connection.interface";
import { PostgresExecutor } from "./postgres.executor";

export class DatabaseService {

    getConnection(): Connection {

        return {
            id: 'PostgressExecutor',
            connect: (config: object) => {
                return new PostgresExecutor();
            }
        };

    }

}
