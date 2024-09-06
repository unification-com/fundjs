import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponse, QueryStreamsRequest, QueryStreamsResponse, QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponse, QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponse, QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponse, QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */
    calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse>;
    /** Streams queries all Streams. */
    streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse>;
    /** AllStreamsForReceiver queries all Streams for a given receiver address */
    allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse>;
    /** StreamByReceiverSender queries a stream for a given receiver and sender pair */
    streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse>;
    /** StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */
    streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse>;
    /** AllStreamsForSender queries all Streams for a given sender address */
    allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse>;
    streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse>;
    allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse>;
    streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse>;
    streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse>;
    allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse>;
    streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse>;
    allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse>;
    streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse>;
    streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse>;
    allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseCalculateFlowRateQuery<TData> extends ReactQueryParams<QueryCalculateFlowRateResponse, TData> {
    request: QueryCalculateFlowRateRequest;
}
export interface UseStreamsQuery<TData> extends ReactQueryParams<QueryStreamsResponse, TData> {
    request?: QueryStreamsRequest;
}
export interface UseAllStreamsForReceiverQuery<TData> extends ReactQueryParams<QueryAllStreamsForReceiverResponse, TData> {
    request: QueryAllStreamsForReceiverRequest;
}
export interface UseStreamByReceiverSenderQuery<TData> extends ReactQueryParams<QueryStreamByReceiverSenderResponse, TData> {
    request: QueryStreamByReceiverSenderRequest;
}
export interface UseStreamReceiverSenderCurrentFlowQuery<TData> extends ReactQueryParams<QueryStreamReceiverSenderCurrentFlowResponse, TData> {
    request: QueryStreamReceiverSenderCurrentFlowRequest;
}
export interface UseAllStreamsForSenderQuery<TData> extends ReactQueryParams<QueryAllStreamsForSenderResponse, TData> {
    request: QueryAllStreamsForSenderRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Parameters queries the parameters of the module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */ useCalculateFlowRate: <TData = QueryCalculateFlowRateResponse>({ request, options }: UseCalculateFlowRateQuery<TData>) => any;
    /** Streams queries all Streams. */ useStreams: <TData = QueryStreamsResponse>({ request, options }: UseStreamsQuery<TData>) => any;
    /** AllStreamsForReceiver queries all Streams for a given receiver address */ useAllStreamsForReceiver: <TData = QueryAllStreamsForReceiverResponse>({ request, options }: UseAllStreamsForReceiverQuery<TData>) => any;
    /** StreamByReceiverSender queries a stream for a given receiver and sender pair */ useStreamByReceiverSender: <TData = QueryStreamByReceiverSenderResponse>({ request, options }: UseStreamByReceiverSenderQuery<TData>) => any;
    /** StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */ useStreamReceiverSenderCurrentFlow: <TData = QueryStreamReceiverSenderCurrentFlowResponse>({ request, options }: UseStreamReceiverSenderCurrentFlowQuery<TData>) => any;
    /** AllStreamsForSender queries all Streams for a given sender address */ useAllStreamsForSender: <TData = QueryAllStreamsForSenderResponse>({ request, options }: UseAllStreamsForSenderQuery<TData>) => any;
};
