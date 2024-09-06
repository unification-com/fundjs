import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
