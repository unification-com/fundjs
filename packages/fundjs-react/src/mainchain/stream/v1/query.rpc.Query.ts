//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.calculateFlowRate = this.calculateFlowRate.bind(this);
    this.streams = this.streams.bind(this);
    this.allStreamsForReceiver = this.allStreamsForReceiver.bind(this);
    this.streamByReceiverSender = this.streamByReceiverSender.bind(this);
    this.streamReceiverSenderCurrentFlow = this.streamReceiverSenderCurrentFlow.bind(this);
    this.allStreamsForSender = this.allStreamsForSender.bind(this);
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
    }
  };
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
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useCalculateFlowRate = <TData = QueryCalculateFlowRateResponse,>({
    request,
    options
  }: UseCalculateFlowRateQuery<TData>) => {
    return useQuery<QueryCalculateFlowRateResponse, Error, TData>(["calculateFlowRateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calculateFlowRate(request);
    }, options);
  };
  const useStreams = <TData = QueryStreamsResponse,>({
    request,
    options
  }: UseStreamsQuery<TData>) => {
    return useQuery<QueryStreamsResponse, Error, TData>(["streamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.streams(request);
    }, options);
  };
  const useAllStreamsForReceiver = <TData = QueryAllStreamsForReceiverResponse,>({
    request,
    options
  }: UseAllStreamsForReceiverQuery<TData>) => {
    return useQuery<QueryAllStreamsForReceiverResponse, Error, TData>(["allStreamsForReceiverQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allStreamsForReceiver(request);
    }, options);
  };
  const useStreamByReceiverSender = <TData = QueryStreamByReceiverSenderResponse,>({
    request,
    options
  }: UseStreamByReceiverSenderQuery<TData>) => {
    return useQuery<QueryStreamByReceiverSenderResponse, Error, TData>(["streamByReceiverSenderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.streamByReceiverSender(request);
    }, options);
  };
  const useStreamReceiverSenderCurrentFlow = <TData = QueryStreamReceiverSenderCurrentFlowResponse,>({
    request,
    options
  }: UseStreamReceiverSenderCurrentFlowQuery<TData>) => {
    return useQuery<QueryStreamReceiverSenderCurrentFlowResponse, Error, TData>(["streamReceiverSenderCurrentFlowQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.streamReceiverSenderCurrentFlow(request);
    }, options);
  };
  const useAllStreamsForSender = <TData = QueryAllStreamsForSenderResponse,>({
    request,
    options
  }: UseAllStreamsForSenderQuery<TData>) => {
    return useQuery<QueryAllStreamsForSenderResponse, Error, TData>(["allStreamsForSenderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allStreamsForSender(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */useCalculateFlowRate,
    /** Streams queries all Streams. */useStreams,
    /** AllStreamsForReceiver queries all Streams for a given receiver address */useAllStreamsForReceiver,
    /** StreamByReceiverSender queries a stream for a given receiver and sender pair */useStreamByReceiverSender,
    /** StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */useStreamReceiverSenderCurrentFlow,
    /** AllStreamsForSender queries all Streams for a given sender address */useAllStreamsForSender
  };
};