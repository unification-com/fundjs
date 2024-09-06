import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponseSDKType, QueryStreamsRequest, QueryStreamsResponseSDKType, QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponseSDKType, QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponseSDKType, QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponseSDKType, QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    calculateFlowRate(params: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponseSDKType>;
    streams(params?: QueryStreamsRequest): Promise<QueryStreamsResponseSDKType>;
    allStreamsForReceiver(params: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponseSDKType>;
    streamByReceiverSender(params: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponseSDKType>;
    streamReceiverSenderCurrentFlow(params: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponseSDKType>;
    allStreamsForSender(params: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponseSDKType>;
}
