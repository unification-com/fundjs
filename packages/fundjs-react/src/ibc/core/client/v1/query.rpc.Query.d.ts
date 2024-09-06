import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** Status queries the status of an IBC client. */
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
};
export interface UseClientStateQuery<TData> extends ReactQueryParams<QueryClientStateResponse, TData> {
    request: QueryClientStateRequest;
}
export interface UseClientStatesQuery<TData> extends ReactQueryParams<QueryClientStatesResponse, TData> {
    request?: QueryClientStatesRequest;
}
export interface UseConsensusStateQuery<TData> extends ReactQueryParams<QueryConsensusStateResponse, TData> {
    request: QueryConsensusStateRequest;
}
export interface UseConsensusStatesQuery<TData> extends ReactQueryParams<QueryConsensusStatesResponse, TData> {
    request: QueryConsensusStatesRequest;
}
export interface UseClientStatusQuery<TData> extends ReactQueryParams<QueryClientStatusResponse, TData> {
    request: QueryClientStatusRequest;
}
export interface UseClientParamsQuery<TData> extends ReactQueryParams<QueryClientParamsResponse, TData> {
    request?: QueryClientParamsRequest;
}
export interface UseUpgradedClientStateQuery<TData> extends ReactQueryParams<QueryUpgradedClientStateResponse, TData> {
    request?: QueryUpgradedClientStateRequest;
}
export interface UseUpgradedConsensusStateQuery<TData> extends ReactQueryParams<QueryUpgradedConsensusStateResponse, TData> {
    request?: QueryUpgradedConsensusStateRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ClientState queries an IBC light client. */ useClientState: <TData = QueryClientStateResponse>({ request, options }: UseClientStateQuery<TData>) => any;
    /** ClientStates queries all the IBC light clients of a chain. */ useClientStates: <TData = QueryClientStatesResponse>({ request, options }: UseClientStatesQuery<TData>) => any;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: <TData = QueryConsensusStateResponse>({ request, options }: UseConsensusStateQuery<TData>) => any;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: <TData = QueryConsensusStatesResponse>({ request, options }: UseConsensusStatesQuery<TData>) => any;
    /** Status queries the status of an IBC client. */ useClientStatus: <TData = QueryClientStatusResponse>({ request, options }: UseClientStatusQuery<TData>) => any;
    /** ClientParams queries all parameters of the ibc client. */ useClientParams: <TData = QueryClientParamsResponse>({ request, options }: UseClientParamsQuery<TData>) => any;
    /** UpgradedClientState queries an Upgraded IBC light client. */ useUpgradedClientState: <TData = QueryUpgradedClientStateResponse>({ request, options }: UseUpgradedClientStateQuery<TData>) => any;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ useUpgradedConsensusState: <TData = QueryUpgradedConsensusStateResponse>({ request, options }: UseUpgradedConsensusStateQuery<TData>) => any;
};
