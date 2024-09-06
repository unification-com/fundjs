import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBeaconRequest, QueryBeaconResponse, QueryBeaconTimestampRequest, QueryBeaconTimestampResponse, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse, QueryBeaconStorageRequest, QueryBeaconStorageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/beacon module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Beacon queries the metadata of a beacon. */
    beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
    /** BeaconTimestamp queries a timestamp of a beacon */
    beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
    /** BeaconsFiltered queries all beacon metadata for given search parameters */
    beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
    /** BeaconStorage queries beacon storage for for given beacon ID */
    beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
    beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
    beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
    beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
    beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
    beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
    beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseBeaconQuery<TData> extends ReactQueryParams<QueryBeaconResponse, TData> {
    request: QueryBeaconRequest;
}
export interface UseBeaconTimestampQuery<TData> extends ReactQueryParams<QueryBeaconTimestampResponse, TData> {
    request: QueryBeaconTimestampRequest;
}
export interface UseBeaconsFilteredQuery<TData> extends ReactQueryParams<QueryBeaconsFilteredResponse, TData> {
    request: QueryBeaconsFilteredRequest;
}
export interface UseBeaconStorageQuery<TData> extends ReactQueryParams<QueryBeaconStorageResponse, TData> {
    request: QueryBeaconStorageRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of x/beacon module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Beacon queries the metadata of a beacon. */ useBeacon: <TData = QueryBeaconResponse>({ request, options }: UseBeaconQuery<TData>) => any;
    /** BeaconTimestamp queries a timestamp of a beacon */ useBeaconTimestamp: <TData = QueryBeaconTimestampResponse>({ request, options }: UseBeaconTimestampQuery<TData>) => any;
    /** BeaconsFiltered queries all beacon metadata for given search parameters */ useBeaconsFiltered: <TData = QueryBeaconsFilteredResponse>({ request, options }: UseBeaconsFilteredQuery<TData>) => any;
    /** BeaconStorage queries beacon storage for for given beacon ID */ useBeaconStorage: <TData = QueryBeaconStorageResponse>({ request, options }: UseBeaconStorageQuery<TData>) => any;
};
