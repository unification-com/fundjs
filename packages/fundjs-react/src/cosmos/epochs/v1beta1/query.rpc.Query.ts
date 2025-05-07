//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryEpochInfosRequest, QueryEpochInfosResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  epochInfos(request?: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  epochInfos(request: QueryEpochInfosRequest = {}): Promise<QueryEpochInfosResponse> {
    const data = QueryEpochInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochInfosResponse.decode(new BinaryReader(data)));
  }
  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochInfos(request?: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse> {
      return queryService.epochInfos(request);
    },
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
      return queryService.currentEpoch(request);
    }
  };
};
export interface UseEpochInfosQuery<TData> extends ReactQueryParams<QueryEpochInfosResponse, TData> {
  request?: QueryEpochInfosRequest;
}
export interface UseCurrentEpochQuery<TData> extends ReactQueryParams<QueryCurrentEpochResponse, TData> {
  request: QueryCurrentEpochRequest;
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
  const useEpochInfos = <TData = QueryEpochInfosResponse,>({
    request,
    options
  }: UseEpochInfosQuery<TData>) => {
    return useQuery<QueryEpochInfosResponse, Error, TData>(["epochInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochInfos(request);
    }, options);
  };
  const useCurrentEpoch = <TData = QueryCurrentEpochResponse,>({
    request,
    options
  }: UseCurrentEpochQuery<TData>) => {
    return useQuery<QueryCurrentEpochResponse, Error, TData>(["currentEpochQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentEpoch(request);
    }, options);
  };
  return {
    /** EpochInfos provide running epochInfos */useEpochInfos,
    /** CurrentEpoch provide current epoch of specified identifier */useCurrentEpoch
  };
};