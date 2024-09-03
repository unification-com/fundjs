//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponseSDKType, QueryStreamsRequest, QueryStreamsResponseSDKType, QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponseSDKType, QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponseSDKType, QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponseSDKType, QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.calculateFlowRate = this.calculateFlowRate.bind(this);
    this.streams = this.streams.bind(this);
    this.allStreamsForReceiver = this.allStreamsForReceiver.bind(this);
    this.streamByReceiverSender = this.streamByReceiverSender.bind(this);
    this.streamReceiverSenderCurrentFlow = this.streamReceiverSenderCurrentFlow.bind(this);
    this.allStreamsForSender = this.allStreamsForSender.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `mainchain/stream/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */
  async calculateFlowRate(params: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.coin !== "undefined") {
      options.params.coin = params.coin;
    }
    if (typeof params?.period !== "undefined") {
      options.params.period = params.period;
    }
    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }
    const endpoint = `mainchain/stream/v1/calculate_flow_Rate`;
    return await this.req.get<QueryCalculateFlowRateResponseSDKType>(endpoint, options);
  }
  /* Streams queries all Streams. */
  async streams(params: QueryStreamsRequest = {
    pagination: undefined
  }): Promise<QueryStreamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mainchain/stream/v1/streams/all`;
    return await this.req.get<QueryStreamsResponseSDKType>(endpoint, options);
  }
  /* AllStreamsForReceiver queries all Streams for a given receiver address */
  async allStreamsForReceiver(params: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}`;
    return await this.req.get<QueryAllStreamsForReceiverResponseSDKType>(endpoint, options);
  }
  /* StreamByReceiverSender queries a stream for a given receiver and sender pair */
  async streamByReceiverSender(params: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponseSDKType> {
    const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}/${params.senderAddr}`;
    return await this.req.get<QueryStreamByReceiverSenderResponseSDKType>(endpoint);
  }
  /* StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */
  async streamReceiverSenderCurrentFlow(params: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponseSDKType> {
    const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}/${params.senderAddr}/current_flow`;
    return await this.req.get<QueryStreamReceiverSenderCurrentFlowResponseSDKType>(endpoint);
  }
  /* AllStreamsForSender queries all Streams for a given sender address */
  async allStreamsForSender(params: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mainchain/stream/v1/streams/sender/${params.senderAddr}`;
    return await this.req.get<QueryAllStreamsForSenderResponseSDKType>(endpoint, options);
  }
}