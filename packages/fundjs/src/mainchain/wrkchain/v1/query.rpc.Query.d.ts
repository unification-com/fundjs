import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
