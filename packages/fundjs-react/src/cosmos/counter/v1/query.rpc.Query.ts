//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** GetCount queries the parameters of x/Counter module. */
  getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getCount = this.getCount.bind(this);
  }
  getCount(request: QueryGetCountRequest = {}): Promise<QueryGetCountResponse> {
    const data = QueryGetCountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.counter.v1.Query", "GetCount", data);
    return promise.then(data => QueryGetCountResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse> {
      return queryService.getCount(request);
    }
  };
};
export interface UseGetCountQuery<TData> extends ReactQueryParams<QueryGetCountResponse, TData> {
  request?: QueryGetCountRequest;
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
  const useGetCount = <TData = QueryGetCountResponse,>({
    request,
    options
  }: UseGetCountQuery<TData>) => {
    return useQuery<QueryGetCountResponse, Error, TData>(["getCountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getCount(request);
    }, options);
  };
  return {
    /** GetCount queries the parameters of x/Counter module. */useGetCount
  };
};