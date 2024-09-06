import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryWrkChainRequest, QueryWrkChainResponse, QueryWrkChainBlockRequest, QueryWrkChainBlockResponse, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse, QueryWrkChainStorageRequest, QueryWrkChainStorageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/wrkchain module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** WrkChain queries the metadata of a wrkchain. */
    wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
    /** WrkChainBlock queries a submitted hash of a wrkchain */
    wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
    /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */
    wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
    /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */
    wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
    wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
    wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
    wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
    wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
    wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
    wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseWrkChainQuery<TData> extends ReactQueryParams<QueryWrkChainResponse, TData> {
    request: QueryWrkChainRequest;
}
export interface UseWrkChainBlockQuery<TData> extends ReactQueryParams<QueryWrkChainBlockResponse, TData> {
    request: QueryWrkChainBlockRequest;
}
export interface UseWrkChainsFilteredQuery<TData> extends ReactQueryParams<QueryWrkChainsFilteredResponse, TData> {
    request: QueryWrkChainsFilteredRequest;
}
export interface UseWrkChainStorageQuery<TData> extends ReactQueryParams<QueryWrkChainStorageResponse, TData> {
    request: QueryWrkChainStorageRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of x/wrkchain module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** WrkChain queries the metadata of a wrkchain. */ useWrkChain: <TData = QueryWrkChainResponse>({ request, options }: UseWrkChainQuery<TData>) => any;
    /** WrkChainBlock queries a submitted hash of a wrkchain */ useWrkChainBlock: <TData = QueryWrkChainBlockResponse>({ request, options }: UseWrkChainBlockQuery<TData>) => any;
    /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */ useWrkChainsFiltered: <TData = QueryWrkChainsFilteredResponse>({ request, options }: UseWrkChainsFilteredQuery<TData>) => any;
    /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */ useWrkChainStorage: <TData = QueryWrkChainStorageResponse>({ request, options }: UseWrkChainStorageQuery<TData>) => any;
};
