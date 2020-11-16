import { QueryExecutor } from "./query-executor.interface";

export interface Connection {

    id: number | string;

    connect: (config: object) => QueryExecutor;
}
