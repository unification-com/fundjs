//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBeaconRequest, QueryBeaconResponse, QueryBeaconTimestampRequest, QueryBeaconTimestampResponse, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse, QueryBeaconStorageRequest, QueryBeaconStorageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/beacon module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Beacon queries the metadata of a beacon. */
  beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
  /** BeaconTimestamp queries a timestamp of a beacon */
  beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
  /** BeaconsFiltered queries all beacon metadata for given search parameters */
  beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
  /** BeaconStorage queries beacon storage for for given beacon ID */
  beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.beacon = this.beacon.bind(this);
    this.beaconTimestamp = this.beaconTimestamp.bind(this);
    this.beaconsFiltered = this.beaconsFiltered.bind(this);
    this.beaconStorage = this.beaconStorage.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse> {
    const data = QueryBeaconRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "Beacon", data);
    return promise.then(data => QueryBeaconResponse.decode(new BinaryReader(data)));
  }
  beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse> {
    const data = QueryBeaconTimestampRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconTimestamp", data);
    return promise.then(data => QueryBeaconTimestampResponse.decode(new BinaryReader(data)));
  }
  beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse> {
    const data = QueryBeaconsFilteredRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconsFiltered", data);
    return promise.then(data => QueryBeaconsFilteredResponse.decode(new BinaryReader(data)));
  }
  beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse> {
    const data = QueryBeaconStorageRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconStorage", data);
    return promise.then(data => QueryBeaconStorageResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse> {
      return queryService.beacon(request);
    },
    beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse> {
      return queryService.beaconTimestamp(request);
    },
    beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse> {
      return queryService.beaconsFiltered(request);
    },
    beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse> {
      return queryService.beaconStorage(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseBeaconQuery<TData> extends ReactQueryParams<QueryBeaconResponse, TData> {
  request: QueryBeaconRequest;
}
export interface UseBeaconTimestampQuery<TData> extends ReactQueryParams<QueryBeaconTimestampResponse, TData> {
  request: QueryBeaconTimestampRequest;
}
export interface UseBeaconsFilteredQuery<TData> extends ReactQueryParams<QueryBeaconsFilteredResponse, TData> {
  request: QueryBeaconsFilteredRequest;
}
export interface UseBeaconStorageQuery<TData> extends ReactQueryParams<QueryBeaconStorageResponse, TData> {
  request: QueryBeaconStorageRequest;
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
  const useBeacon = <TData = QueryBeaconResponse,>({
    request,
    options
  }: UseBeaconQuery<TData>) => {
    return useQuery<QueryBeaconResponse, Error, TData>(["beaconQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.beacon(request);
    }, options);
  };
  const useBeaconTimestamp = <TData = QueryBeaconTimestampResponse,>({
    request,
    options
  }: UseBeaconTimestampQuery<TData>) => {
    return useQuery<QueryBeaconTimestampResponse, Error, TData>(["beaconTimestampQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.beaconTimestamp(request);
    }, options);
  };
  const useBeaconsFiltered = <TData = QueryBeaconsFilteredResponse,>({
    request,
    options
  }: UseBeaconsFilteredQuery<TData>) => {
    return useQuery<QueryBeaconsFilteredResponse, Error, TData>(["beaconsFilteredQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.beaconsFiltered(request);
    }, options);
  };
  const useBeaconStorage = <TData = QueryBeaconStorageResponse,>({
    request,
    options
  }: UseBeaconStorageQuery<TData>) => {
    return useQuery<QueryBeaconStorageResponse, Error, TData>(["beaconStorageQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.beaconStorage(request);
    }, options);
  };
  return {
    /** Params queries the parameters of x/beacon module. */useParams,
    /** Beacon queries the metadata of a beacon. */useBeacon,
    /** BeaconTimestamp queries a timestamp of a beacon */useBeaconTimestamp,
    /** BeaconsFiltered queries all beacon metadata for given search parameters */useBeaconsFiltered,
    /** BeaconStorage queries beacon storage for for given beacon ID */useBeaconStorage
  };
};