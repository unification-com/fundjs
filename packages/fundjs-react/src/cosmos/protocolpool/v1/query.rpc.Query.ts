//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryContinuousFundRequest, QueryContinuousFundResponse, QueryContinuousFundsRequest, QueryContinuousFundsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service for community pool module. */
export interface Query {
  /** CommunityPool queries the community pool coins. */
  communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
  /** ContinuousFund queries a continuous fund by the recipient is is associated with. */
  continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse>;
  /** ContinuousFunds queries all continuous funds in the store. */
  continuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse>;
  /** Params returns the total set of x/protocolpool parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.communityPool = this.communityPool.bind(this);
    this.continuousFund = this.continuousFund.bind(this);
    this.continuousFunds = this.continuousFunds.bind(this);
    this.params = this.params.bind(this);
  }
  communityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  }
  continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse> {
    const data = QueryContinuousFundRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFund", data);
    return promise.then(data => QueryContinuousFundResponse.decode(new BinaryReader(data)));
  }
  continuousFunds(request: QueryContinuousFundsRequest = {}): Promise<QueryContinuousFundsResponse> {
    const data = QueryContinuousFundsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFunds", data);
    return promise.then(data => QueryContinuousFundsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
      return queryService.communityPool(request);
    },
    continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse> {
      return queryService.continuousFund(request);
    },
    continuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse> {
      return queryService.continuousFunds(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UseCommunityPoolQuery<TData> extends ReactQueryParams<QueryCommunityPoolResponse, TData> {
  request?: QueryCommunityPoolRequest;
}
export interface UseContinuousFundQuery<TData> extends ReactQueryParams<QueryContinuousFundResponse, TData> {
  request: QueryContinuousFundRequest;
}
export interface UseContinuousFundsQuery<TData> extends ReactQueryParams<QueryContinuousFundsResponse, TData> {
  request?: QueryContinuousFundsRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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
  const useCommunityPool = <TData = QueryCommunityPoolResponse,>({
    request,
    options
  }: UseCommunityPoolQuery<TData>) => {
    return useQuery<QueryCommunityPoolResponse, Error, TData>(["communityPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.communityPool(request);
    }, options);
  };
  const useContinuousFund = <TData = QueryContinuousFundResponse,>({
    request,
    options
  }: UseContinuousFundQuery<TData>) => {
    return useQuery<QueryContinuousFundResponse, Error, TData>(["continuousFundQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.continuousFund(request);
    }, options);
  };
  const useContinuousFunds = <TData = QueryContinuousFundsResponse,>({
    request,
    options
  }: UseContinuousFundsQuery<TData>) => {
    return useQuery<QueryContinuousFundsResponse, Error, TData>(["continuousFundsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.continuousFunds(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  return {
    /** CommunityPool queries the community pool coins. */useCommunityPool,
    /** ContinuousFund queries a continuous fund by the recipient is is associated with. */useContinuousFund,
    /** ContinuousFunds queries all continuous funds in the store. */useContinuousFunds,
    /** Params returns the total set of x/protocolpool parameters. */useParams
  };
};