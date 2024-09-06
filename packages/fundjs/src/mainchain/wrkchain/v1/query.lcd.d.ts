import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryWrkChainRequest, QueryWrkChainResponseSDKType, QueryWrkChainBlockRequest, QueryWrkChainBlockResponseSDKType, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponseSDKType, QueryWrkChainStorageRequest, QueryWrkChainStorageResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    wrkChain(params: QueryWrkChainRequest): Promise<QueryWrkChainResponseSDKType>;
    wrkChainBlock(params: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponseSDKType>;
    wrkChainsFiltered(params: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponseSDKType>;
    wrkChainStorage(params: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponseSDKType>;
}
