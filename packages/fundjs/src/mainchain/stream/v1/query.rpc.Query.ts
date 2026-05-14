//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponse, QueryStreamsRequest, QueryStreamsResponse, QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponse, QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponse, QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponse, QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponse, QueryAllStreamsByPairRequest, QueryAllStreamsByPairResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * CalculateFlowRate can be used to calculate a flow rate (coins per second)
   * to be used when creating/updating a stream
   */
  calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse>;
  /** Streams queries all Streams. */
  streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse>;
  /** AllStreamsForReceiver queries all Streams for a given receiver address */
  allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse>;
  /**
   * StreamByReceiverSender queries a stream for a given receiver, sender and
   * denom triple
   */
  streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse>;
  /**
   * StreamReceiverSenderCurrentFlow queries a stream by the given
   * receiver/sender/denom triple and returns the current flow data
   */
  streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse>;
  /** AllStreamsForSender queries all Streams for a given sender address */
  allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse>;
  /**
   * AllStreamsByPair queries all Streams between a given (sender, receiver)
   * pair across denoms
   */
  allStreamsByPair(request: QueryAllStreamsByPairRequest): Promise<QueryAllStreamsByPairResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.calculateFlowRate = this.calculateFlowRate.bind(this);
    this.streams = this.streams.bind(this);
    this.allStreamsForReceiver = this.allStreamsForReceiver.bind(this);
    this.streamByReceiverSender = this.streamByReceiverSender.bind(this);
    this.streamReceiverSenderCurrentFlow = this.streamReceiverSenderCurrentFlow.bind(this);
    this.allStreamsForSender = this.allStreamsForSender.bind(this);
    this.allStreamsByPair = this.allStreamsByPair.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse> {
    const data = QueryCalculateFlowRateRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "CalculateFlowRate", data);
    return promise.then(data => QueryCalculateFlowRateResponse.decode(new BinaryReader(data)));
  }
  streams(request: QueryStreamsRequest = {
    pagination: undefined
  }): Promise<QueryStreamsResponse> {
    const data = QueryStreamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "Streams", data);
    return promise.then(data => QueryStreamsResponse.decode(new BinaryReader(data)));
  }
  allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse> {
    const data = QueryAllStreamsForReceiverRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForReceiver", data);
    return promise.then(data => QueryAllStreamsForReceiverResponse.decode(new BinaryReader(data)));
  }
  streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse> {
    const data = QueryStreamByReceiverSenderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamByReceiverSender", data);
    return promise.then(data => QueryStreamByReceiverSenderResponse.decode(new BinaryReader(data)));
  }
  streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse> {
    const data = QueryStreamReceiverSenderCurrentFlowRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamReceiverSenderCurrentFlow", data);
    return promise.then(data => QueryStreamReceiverSenderCurrentFlowResponse.decode(new BinaryReader(data)));
  }
  allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse> {
    const data = QueryAllStreamsForSenderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForSender", data);
    return promise.then(data => QueryAllStreamsForSenderResponse.decode(new BinaryReader(data)));
  }
  allStreamsByPair(request: QueryAllStreamsByPairRequest): Promise<QueryAllStreamsByPairResponse> {
    const data = QueryAllStreamsByPairRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsByPair", data);
    return promise.then(data => QueryAllStreamsByPairResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    calculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse> {
      return queryService.calculateFlowRate(request);
    },
    streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse> {
      return queryService.streams(request);
    },
    allStreamsForReceiver(request: QueryAllStreamsForReceiverRequest): Promise<QueryAllStreamsForReceiverResponse> {
      return queryService.allStreamsForReceiver(request);
    },
    streamByReceiverSender(request: QueryStreamByReceiverSenderRequest): Promise<QueryStreamByReceiverSenderResponse> {
      return queryService.streamByReceiverSender(request);
    },
    streamReceiverSenderCurrentFlow(request: QueryStreamReceiverSenderCurrentFlowRequest): Promise<QueryStreamReceiverSenderCurrentFlowResponse> {
      return queryService.streamReceiverSenderCurrentFlow(request);
    },
    allStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse> {
      return queryService.allStreamsForSender(request);
    },
    allStreamsByPair(request: QueryAllStreamsByPairRequest): Promise<QueryAllStreamsByPairResponse> {
      return queryService.allStreamsByPair(request);
    }
  };
};