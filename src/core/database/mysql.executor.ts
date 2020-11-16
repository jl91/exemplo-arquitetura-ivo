import { QueryExecutor } from "./query-executor.interface";

export class MysqlExecutor implements QueryExecutor {

    execute(...data: any): boolean {

        console.log('Executando query Com mysql');
        return true;

    }
}
