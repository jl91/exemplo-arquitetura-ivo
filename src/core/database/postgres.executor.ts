import { QueryExecutor } from "./query-executor.interface";

export class PostgresExecutor implements QueryExecutor {

    execute(...data: any): boolean {
        console.log('Executando query com Oracle');
        return true;
    }

}
