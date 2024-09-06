import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Connection queries an IBC connection end. */
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
};
export interface UseConnectionQuery<TData> extends ReactQueryParams<QueryConnectionResponse, TData> {
    request: QueryConnectionRequest;
}
export interface UseConnectionsQuery<TData> extends ReactQueryParams<QueryConnectionsResponse, TData> {
    request?: QueryConnectionsRequest;
}
export interface UseClientConnectionsQuery<TData> extends ReactQueryParams<QueryClientConnectionsResponse, TData> {
    request: QueryClientConnectionsRequest;
}
export interface UseConnectionClientStateQuery<TData> extends ReactQueryParams<QueryConnectionClientStateResponse, TData> {
    request: QueryConnectionClientStateRequest;
}
export interface UseConnectionConsensusStateQuery<TData> extends ReactQueryParams<QueryConnectionConsensusStateResponse, TData> {
    request: QueryConnectionConsensusStateRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Connection queries an IBC connection end. */ useConnection: <TData = QueryConnectionResponse>({ request, options }: UseConnectionQuery<TData>) => any;
    /** Connections queries all the IBC connections of a chain. */ useConnections: <TData = QueryConnectionsResponse>({ request, options }: UseConnectionsQuery<TData>) => any;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: <TData = QueryClientConnectionsResponse>({ request, options }: UseClientConnectionsQuery<TData>) => any;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: <TData = QueryConnectionClientStateResponse>({ request, options }: UseConnectionClientStateQuery<TData>) => any;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: <TData = QueryConnectionConsensusStateResponse>({ request, options }: UseConnectionConsensusStateQuery<TData>) => any;
};
