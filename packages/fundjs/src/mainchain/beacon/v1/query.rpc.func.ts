//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBeaconRequest, QueryBeaconResponse, QueryBeaconTimestampRequest, QueryBeaconTimestampResponse, QueryBeaconTimestampsByHashRequest, QueryBeaconTimestampsByHashResponse, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse, QueryBeaconStorageRequest, QueryBeaconStorageResponse } from "./query";
/**
 * Params queries the parameters of x/beacon module.
 * @name getParams
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Beacon queries the metadata of a beacon.
 * @name getBeacon
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.Beacon
 */
export const getBeacon = buildQuery<QueryBeaconRequest, QueryBeaconResponse>({
  encode: QueryBeaconRequest.encode,
  decode: QueryBeaconResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "Beacon",
  deps: [QueryBeaconRequest, QueryBeaconResponse]
});
/**
 * BeaconTimestamp queries a timestamp of a beacon
 * @name getBeaconTimestamp
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.BeaconTimestamp
 */
export const getBeaconTimestamp = buildQuery<QueryBeaconTimestampRequest, QueryBeaconTimestampResponse>({
  encode: QueryBeaconTimestampRequest.encode,
  decode: QueryBeaconTimestampResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "BeaconTimestamp",
  deps: [QueryBeaconTimestampRequest, QueryBeaconTimestampResponse]
});
/**
 * BeaconTimestampsByHash queries the timestamps of a beacon that recorded a
 * given hash (one-to-many: the same hash can be recorded many times)
 * @name getBeaconTimestampsByHash
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.BeaconTimestampsByHash
 */
export const getBeaconTimestampsByHash = buildQuery<QueryBeaconTimestampsByHashRequest, QueryBeaconTimestampsByHashResponse>({
  encode: QueryBeaconTimestampsByHashRequest.encode,
  decode: QueryBeaconTimestampsByHashResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "BeaconTimestampsByHash",
  deps: [QueryBeaconTimestampsByHashRequest, QueryBeaconTimestampsByHashResponse]
});
/**
 * BeaconsFiltered queries all beacon metadata for given search parameters
 * @name getBeaconsFiltered
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.BeaconsFiltered
 */
export const getBeaconsFiltered = buildQuery<QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse>({
  encode: QueryBeaconsFilteredRequest.encode,
  decode: QueryBeaconsFilteredResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "BeaconsFiltered",
  deps: [QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponse]
});
/**
 * BeaconStorage queries beacon storage for for given beacon ID
 * @name getBeaconStorage
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.BeaconStorage
 */
export const getBeaconStorage = buildQuery<QueryBeaconStorageRequest, QueryBeaconStorageResponse>({
  encode: QueryBeaconStorageRequest.encode,
  decode: QueryBeaconStorageResponse.decode,
  service: "mainchain.beacon.v1.Query",
  method: "BeaconStorage",
  deps: [QueryBeaconStorageRequest, QueryBeaconStorageResponse]
});