import { QueryExecutor } from "./query-executor.interface";

export class OracleExecutor implements QueryExecutor {

    execute(...data: any): boolean {

        console.log('Executando query com Oracle');
        return true;

    }
}
