import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
export interface UseDenomTraceQuery<TData> extends ReactQueryParams<QueryDenomTraceResponse, TData> {
    request: QueryDenomTraceRequest;
}
export interface UseDenomTracesQuery<TData> extends ReactQueryParams<QueryDenomTracesResponse, TData> {
    request?: QueryDenomTracesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** DenomTrace queries a denomination trace information. */ useDenomTrace: <TData = QueryDenomTraceResponse>({ request, options }: UseDenomTraceQuery<TData>) => any;
    /** DenomTraces queries all denomination traces. */ useDenomTraces: <TData = QueryDenomTracesResponse>({ request, options }: UseDenomTracesQuery<TData>) => any;
    /** Params queries all parameters of the ibc-transfer module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
};
