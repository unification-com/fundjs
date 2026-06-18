//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBeaconRequest, QueryBeaconResponse, QueryBeaconTimestampRequest, QueryBeaconTimestampResponse, QueryBeaconTimestampsByHashRequest, QueryBeaconTimestampsByHashResponse, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse, QueryBeaconStorageRequest, QueryBeaconStorageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/beacon module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Beacon queries the metadata of a beacon. */
  beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
  /** BeaconTimestamp queries a timestamp of a beacon */
  beaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
  /**
   * BeaconTimestampsByHash queries the timestamps of a beacon that recorded a
   * given hash (one-to-many: the same hash can be recorded many times)
   */
  beaconTimestampsByHash(request: QueryBeaconTimestampsByHashRequest): Promise<QueryBeaconTimestampsByHashResponse>;
  /** BeaconsFiltered queries all beacon metadata for given search parameters */
  beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
  /** BeaconStorage queries beacon storage for for given beacon ID */
  beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.beacon = this.beacon.bind(this);
    this.beaconTimestamp = this.beaconTimestamp.bind(this);
    this.beaconTimestampsByHash = this.beaconTimestampsByHash.bind(this);
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
  beaconTimestampsByHash(request: QueryBeaconTimestampsByHashRequest): Promise<QueryBeaconTimestampsByHashResponse> {
    const data = QueryBeaconTimestampsByHashRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconTimestampsByHash", data);
    return promise.then(data => QueryBeaconTimestampsByHashResponse.decode(new BinaryReader(data)));
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
    beaconTimestampsByHash(request: QueryBeaconTimestampsByHashRequest): Promise<QueryBeaconTimestampsByHashResponse> {
      return queryService.beaconTimestampsByHash(request);
    },
    beaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse> {
      return queryService.beaconsFiltered(request);
    },
    beaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse> {
      return queryService.beaconStorage(request);
    }
  };
};