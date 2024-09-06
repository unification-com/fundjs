import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, Beacon, BeaconAmino, BeaconSDKType, BeaconTimestamp, BeaconTimestampAmino, BeaconTimestampSDKType } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/mainchain.beacon.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/mainchain.beacon.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequest {
    /** beacon_id is the id of the beacon to query for */
    beaconId: bigint;
}
export interface QueryBeaconRequestProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest";
    value: Uint8Array;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequestAmino {
    /** beacon_id is the id of the beacon to query for */
    beacon_id?: string;
}
export interface QueryBeaconRequestAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconRequest";
    value: QueryBeaconRequestAmino;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequestSDKType {
    beacon_id: bigint;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponse {
    beacon?: Beacon;
}
export interface QueryBeaconResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse";
    value: Uint8Array;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponseAmino {
    beacon?: BeaconAmino;
}
export interface QueryBeaconResponseAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconResponse";
    value: QueryBeaconResponseAmino;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponseSDKType {
    beacon?: BeaconSDKType;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequest {
    /** beacon_id is the id of the beacon to query for */
    beaconId: bigint;
    /** timestamp_id is the id of the timestamp to query for */
    timestampId: bigint;
}
export interface QueryBeaconTimestampRequestProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest";
    value: Uint8Array;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequestAmino {
    /** beacon_id is the id of the beacon to query for */
    beacon_id?: string;
    /** timestamp_id is the id of the timestamp to query for */
    timestamp_id?: string;
}
export interface QueryBeaconTimestampRequestAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconTimestampRequest";
    value: QueryBeaconTimestampRequestAmino;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequestSDKType {
    beacon_id: bigint;
    timestamp_id: bigint;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponse {
    timestamp?: BeaconTimestamp;
    beaconId: bigint;
    owner: string;
}
export interface QueryBeaconTimestampResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse";
    value: Uint8Array;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponseAmino {
    timestamp?: BeaconTimestampAmino;
    beacon_id?: string;
    owner?: string;
}
export interface QueryBeaconTimestampResponseAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconTimestampResponse";
    value: QueryBeaconTimestampResponseAmino;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponseSDKType {
    timestamp?: BeaconTimestampSDKType;
    beacon_id: bigint;
    owner: string;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequest {
    /** moniker is the moniker of the beacon to search for */
    moniker: string;
    /** owner is an address to search for */
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBeaconsFilteredRequestProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest";
    value: Uint8Array;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequestAmino {
    /** moniker is the moniker of the beacon to search for */
    moniker?: string;
    /** owner is an address to search for */
    owner?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBeaconsFilteredRequestAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest";
    value: QueryBeaconsFilteredRequestAmino;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequestSDKType {
    moniker: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponse {
    beacons: Beacon[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBeaconsFilteredResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse";
    value: Uint8Array;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponseAmino {
    beacons?: BeaconAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBeaconsFilteredResponseAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse";
    value: QueryBeaconsFilteredResponseAmino;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponseSDKType {
    beacons: BeaconSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequest {
    /** beacon_id is the id of the beacon to query for */
    beaconId: bigint;
}
export interface QueryBeaconStorageRequestProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest";
    value: Uint8Array;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequestAmino {
    /** beacon_id is the id of the beacon to query for */
    beacon_id?: string;
}
export interface QueryBeaconStorageRequestAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconStorageRequest";
    value: QueryBeaconStorageRequestAmino;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequestSDKType {
    beacon_id: bigint;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponse {
    beaconId: bigint;
    owner: string;
    /** current_limit is the current in-state storage limit for this beacon */
    currentLimit: bigint;
    /** current_used is the number of in-state slots currently used */
    currentUsed: bigint;
    /** max is the maximum possible slots a beacon can have, as defined by the beacon module params */
    max: bigint;
    /** max_purchasable is the maximum number a beacon can purchase without exceeding max */
    maxPurchasable: bigint;
}
export interface QueryBeaconStorageResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse";
    value: Uint8Array;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponseAmino {
    beacon_id?: string;
    owner?: string;
    /** current_limit is the current in-state storage limit for this beacon */
    current_limit?: string;
    /** current_used is the number of in-state slots currently used */
    current_used?: string;
    /** max is the maximum possible slots a beacon can have, as defined by the beacon module params */
    max?: string;
    /** max_purchasable is the maximum number a beacon can purchase without exceeding max */
    max_purchasable?: string;
}
export interface QueryBeaconStorageResponseAminoMsg {
    type: "/mainchain.beacon.v1.QueryBeaconStorageResponse";
    value: QueryBeaconStorageResponseAmino;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponseSDKType {
    beacon_id: bigint;
    owner: string;
    current_limit: bigint;
    current_used: bigint;
    max: bigint;
    max_purchasable: bigint;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryBeaconRequest: {
    typeUrl: string;
    is(o: any): o is QueryBeaconRequest;
    isSDK(o: any): o is QueryBeaconRequestSDKType;
    isAmino(o: any): o is QueryBeaconRequestAmino;
    encode(message: QueryBeaconRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconRequest;
    fromPartial(object: Partial<QueryBeaconRequest>): QueryBeaconRequest;
    fromAmino(object: QueryBeaconRequestAmino): QueryBeaconRequest;
    toAmino(message: QueryBeaconRequest): QueryBeaconRequestAmino;
    fromAminoMsg(object: QueryBeaconRequestAminoMsg): QueryBeaconRequest;
    fromProtoMsg(message: QueryBeaconRequestProtoMsg): QueryBeaconRequest;
    toProto(message: QueryBeaconRequest): Uint8Array;
    toProtoMsg(message: QueryBeaconRequest): QueryBeaconRequestProtoMsg;
};
export declare const QueryBeaconResponse: {
    typeUrl: string;
    is(o: any): o is QueryBeaconResponse;
    isSDK(o: any): o is QueryBeaconResponseSDKType;
    isAmino(o: any): o is QueryBeaconResponseAmino;
    encode(message: QueryBeaconResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconResponse;
    fromPartial(object: Partial<QueryBeaconResponse>): QueryBeaconResponse;
    fromAmino(object: QueryBeaconResponseAmino): QueryBeaconResponse;
    toAmino(message: QueryBeaconResponse): QueryBeaconResponseAmino;
    fromAminoMsg(object: QueryBeaconResponseAminoMsg): QueryBeaconResponse;
    fromProtoMsg(message: QueryBeaconResponseProtoMsg): QueryBeaconResponse;
    toProto(message: QueryBeaconResponse): Uint8Array;
    toProtoMsg(message: QueryBeaconResponse): QueryBeaconResponseProtoMsg;
};
export declare const QueryBeaconTimestampRequest: {
    typeUrl: string;
    is(o: any): o is QueryBeaconTimestampRequest;
    isSDK(o: any): o is QueryBeaconTimestampRequestSDKType;
    isAmino(o: any): o is QueryBeaconTimestampRequestAmino;
    encode(message: QueryBeaconTimestampRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampRequest;
    fromPartial(object: Partial<QueryBeaconTimestampRequest>): QueryBeaconTimestampRequest;
    fromAmino(object: QueryBeaconTimestampRequestAmino): QueryBeaconTimestampRequest;
    toAmino(message: QueryBeaconTimestampRequest): QueryBeaconTimestampRequestAmino;
    fromAminoMsg(object: QueryBeaconTimestampRequestAminoMsg): QueryBeaconTimestampRequest;
    fromProtoMsg(message: QueryBeaconTimestampRequestProtoMsg): QueryBeaconTimestampRequest;
    toProto(message: QueryBeaconTimestampRequest): Uint8Array;
    toProtoMsg(message: QueryBeaconTimestampRequest): QueryBeaconTimestampRequestProtoMsg;
};
export declare const QueryBeaconTimestampResponse: {
    typeUrl: string;
    is(o: any): o is QueryBeaconTimestampResponse;
    isSDK(o: any): o is QueryBeaconTimestampResponseSDKType;
    isAmino(o: any): o is QueryBeaconTimestampResponseAmino;
    encode(message: QueryBeaconTimestampResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampResponse;
    fromPartial(object: Partial<QueryBeaconTimestampResponse>): QueryBeaconTimestampResponse;
    fromAmino(object: QueryBeaconTimestampResponseAmino): QueryBeaconTimestampResponse;
    toAmino(message: QueryBeaconTimestampResponse): QueryBeaconTimestampResponseAmino;
    fromAminoMsg(object: QueryBeaconTimestampResponseAminoMsg): QueryBeaconTimestampResponse;
    fromProtoMsg(message: QueryBeaconTimestampResponseProtoMsg): QueryBeaconTimestampResponse;
    toProto(message: QueryBeaconTimestampResponse): Uint8Array;
    toProtoMsg(message: QueryBeaconTimestampResponse): QueryBeaconTimestampResponseProtoMsg;
};
export declare const QueryBeaconsFilteredRequest: {
    typeUrl: string;
    is(o: any): o is QueryBeaconsFilteredRequest;
    isSDK(o: any): o is QueryBeaconsFilteredRequestSDKType;
    isAmino(o: any): o is QueryBeaconsFilteredRequestAmino;
    encode(message: QueryBeaconsFilteredRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredRequest;
    fromPartial(object: Partial<QueryBeaconsFilteredRequest>): QueryBeaconsFilteredRequest;
    fromAmino(object: QueryBeaconsFilteredRequestAmino): QueryBeaconsFilteredRequest;
    toAmino(message: QueryBeaconsFilteredRequest): QueryBeaconsFilteredRequestAmino;
    fromAminoMsg(object: QueryBeaconsFilteredRequestAminoMsg): QueryBeaconsFilteredRequest;
    fromProtoMsg(message: QueryBeaconsFilteredRequestProtoMsg): QueryBeaconsFilteredRequest;
    toProto(message: QueryBeaconsFilteredRequest): Uint8Array;
    toProtoMsg(message: QueryBeaconsFilteredRequest): QueryBeaconsFilteredRequestProtoMsg;
};
export declare const QueryBeaconsFilteredResponse: {
    typeUrl: string;
    is(o: any): o is QueryBeaconsFilteredResponse;
    isSDK(o: any): o is QueryBeaconsFilteredResponseSDKType;
    isAmino(o: any): o is QueryBeaconsFilteredResponseAmino;
    encode(message: QueryBeaconsFilteredResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredResponse;
    fromPartial(object: Partial<QueryBeaconsFilteredResponse>): QueryBeaconsFilteredResponse;
    fromAmino(object: QueryBeaconsFilteredResponseAmino): QueryBeaconsFilteredResponse;
    toAmino(message: QueryBeaconsFilteredResponse): QueryBeaconsFilteredResponseAmino;
    fromAminoMsg(object: QueryBeaconsFilteredResponseAminoMsg): QueryBeaconsFilteredResponse;
    fromProtoMsg(message: QueryBeaconsFilteredResponseProtoMsg): QueryBeaconsFilteredResponse;
    toProto(message: QueryBeaconsFilteredResponse): Uint8Array;
    toProtoMsg(message: QueryBeaconsFilteredResponse): QueryBeaconsFilteredResponseProtoMsg;
};
export declare const QueryBeaconStorageRequest: {
    typeUrl: string;
    is(o: any): o is QueryBeaconStorageRequest;
    isSDK(o: any): o is QueryBeaconStorageRequestSDKType;
    isAmino(o: any): o is QueryBeaconStorageRequestAmino;
    encode(message: QueryBeaconStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageRequest;
    fromPartial(object: Partial<QueryBeaconStorageRequest>): QueryBeaconStorageRequest;
    fromAmino(object: QueryBeaconStorageRequestAmino): QueryBeaconStorageRequest;
    toAmino(message: QueryBeaconStorageRequest): QueryBeaconStorageRequestAmino;
    fromAminoMsg(object: QueryBeaconStorageRequestAminoMsg): QueryBeaconStorageRequest;
    fromProtoMsg(message: QueryBeaconStorageRequestProtoMsg): QueryBeaconStorageRequest;
    toProto(message: QueryBeaconStorageRequest): Uint8Array;
    toProtoMsg(message: QueryBeaconStorageRequest): QueryBeaconStorageRequestProtoMsg;
};
export declare const QueryBeaconStorageResponse: {
    typeUrl: string;
    is(o: any): o is QueryBeaconStorageResponse;
    isSDK(o: any): o is QueryBeaconStorageResponseSDKType;
    isAmino(o: any): o is QueryBeaconStorageResponseAmino;
    encode(message: QueryBeaconStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageResponse;
    fromPartial(object: Partial<QueryBeaconStorageResponse>): QueryBeaconStorageResponse;
    fromAmino(object: QueryBeaconStorageResponseAmino): QueryBeaconStorageResponse;
    toAmino(message: QueryBeaconStorageResponse): QueryBeaconStorageResponseAmino;
    fromAminoMsg(object: QueryBeaconStorageResponseAminoMsg): QueryBeaconStorageResponse;
    fromProtoMsg(message: QueryBeaconStorageResponseProtoMsg): QueryBeaconStorageResponse;
    toProto(message: QueryBeaconStorageResponse): Uint8Array;
    toProtoMsg(message: QueryBeaconStorageResponse): QueryBeaconStorageResponseProtoMsg;
};
