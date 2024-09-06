import { Params, ParamsAmino, ParamsSDKType } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeacon {
    /** moniker is a short identifier for a beacon */
    moniker: string;
    /** name is a long name for a beacon */
    name: string;
    /** owner is the address of the owner of the beacon */
    owner: string;
}
export interface MsgRegisterBeaconProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon";
    value: Uint8Array;
}
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeaconAmino {
    /** moniker is a short identifier for a beacon */
    moniker?: string;
    /** name is a long name for a beacon */
    name?: string;
    /** owner is the address of the owner of the beacon */
    owner?: string;
}
export interface MsgRegisterBeaconAminoMsg {
    type: "/mainchain.beacon.v1.MsgRegisterBeacon";
    value: MsgRegisterBeaconAmino;
}
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeaconSDKType {
    moniker: string;
    name: string;
    owner: string;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponse {
    /** beacon_id is the id of the new beacon */
    beaconId: bigint;
}
export interface MsgRegisterBeaconResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse";
    value: Uint8Array;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponseAmino {
    /** beacon_id is the id of the new beacon */
    beacon_id?: string;
}
export interface MsgRegisterBeaconResponseAminoMsg {
    type: "/mainchain.beacon.v1.MsgRegisterBeaconResponse";
    value: MsgRegisterBeaconResponseAmino;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponseSDKType {
    beacon_id: bigint;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestamp {
    /** beacon_id is the id of the beacon the timestamp is being submitted for */
    beaconId: bigint;
    /** hash is the hash or data being submitted */
    hash: string;
    /** submit_time is a unix epoch value of the submission time */
    submitTime: bigint;
    /** owner is the address of the owner of the beacon */
    owner: string;
}
export interface MsgRecordBeaconTimestampProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp";
    value: Uint8Array;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestampAmino {
    /** beacon_id is the id of the beacon the timestamp is being submitted for */
    beacon_id?: string;
    /** hash is the hash or data being submitted */
    hash?: string;
    /** submit_time is a unix epoch value of the submission time */
    submit_time?: string;
    /** owner is the address of the owner of the beacon */
    owner?: string;
}
export interface MsgRecordBeaconTimestampAminoMsg {
    type: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp";
    value: MsgRecordBeaconTimestampAmino;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestampSDKType {
    beacon_id: bigint;
    hash: string;
    submit_time: bigint;
    owner: string;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponse {
    /** beacon_id is the id of the beacon */
    beaconId: bigint;
    /** timestamp_id is the id of the new timestamp */
    timestampId: bigint;
}
export interface MsgRecordBeaconTimestampResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse";
    value: Uint8Array;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponseAmino {
    /** beacon_id is the id of the beacon */
    beacon_id?: string;
    /** timestamp_id is the id of the new timestamp */
    timestamp_id?: string;
}
export interface MsgRecordBeaconTimestampResponseAminoMsg {
    type: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse";
    value: MsgRecordBeaconTimestampResponseAmino;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponseSDKType {
    beacon_id: bigint;
    timestamp_id: bigint;
}
/** MsgPurchaseBeaconStateStorage represents a message to purchase more beacon storage */
export interface MsgPurchaseBeaconStateStorage {
    /** beacon_id is the id of the beacon the storage is being purchased for */
    beaconId: bigint;
    /** number is the number of state storage spaces to purchase */
    number: bigint;
    /** owner is the address of the owner of the beacon */
    owner: string;
}
export interface MsgPurchaseBeaconStateStorageProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage";
    value: Uint8Array;
}
/** MsgPurchaseBeaconStateStorage represents a message to purchase more beacon storage */
export interface MsgPurchaseBeaconStateStorageAmino {
    /** beacon_id is the id of the beacon the storage is being purchased for */
    beacon_id?: string;
    /** number is the number of state storage spaces to purchase */
    number?: string;
    /** owner is the address of the owner of the beacon */
    owner?: string;
}
export interface MsgPurchaseBeaconStateStorageAminoMsg {
    type: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage";
    value: MsgPurchaseBeaconStateStorageAmino;
}
/** MsgPurchaseBeaconStateStorage represents a message to purchase more beacon storage */
export interface MsgPurchaseBeaconStateStorageSDKType {
    beacon_id: bigint;
    number: bigint;
    owner: string;
}
/** MsgPurchaseBeaconStateStorageResponse defines the Msg/PurchaseBeaconStateStorage response type. */
export interface MsgPurchaseBeaconStateStorageResponse {
    /** beacon_id is the id of the beacon the storage is being purchased for */
    beaconId: bigint;
    /** number_purchased is the number of state storage spaces purchased */
    numberPurchased: bigint;
    /** num_can_purchase is the number of remaining slots available for purchase */
    numCanPurchase: bigint;
}
export interface MsgPurchaseBeaconStateStorageResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse";
    value: Uint8Array;
}
/** MsgPurchaseBeaconStateStorageResponse defines the Msg/PurchaseBeaconStateStorage response type. */
export interface MsgPurchaseBeaconStateStorageResponseAmino {
    /** beacon_id is the id of the beacon the storage is being purchased for */
    beacon_id?: string;
    /** number_purchased is the number of state storage spaces purchased */
    number_purchased?: string;
    /** num_can_purchase is the number of remaining slots available for purchase */
    num_can_purchase?: string;
}
export interface MsgPurchaseBeaconStateStorageResponseAminoMsg {
    type: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse";
    value: MsgPurchaseBeaconStateStorageResponseAmino;
}
/** MsgPurchaseBeaconStateStorageResponse defines the Msg/PurchaseBeaconStateStorage response type. */
export interface MsgPurchaseBeaconStateStorageResponseSDKType {
    beacon_id: bigint;
    number_purchased: bigint;
    num_can_purchase: bigint;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/beacon parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /**
     * params defines the x/beacon parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "mainchain/x/beacon/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/mainchain.beacon.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/mainchain.beacon.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterBeacon: {
    typeUrl: string;
    is(o: any): o is MsgRegisterBeacon;
    isSDK(o: any): o is MsgRegisterBeaconSDKType;
    isAmino(o: any): o is MsgRegisterBeaconAmino;
    encode(message: MsgRegisterBeacon, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeacon;
    fromPartial(object: Partial<MsgRegisterBeacon>): MsgRegisterBeacon;
    fromAmino(object: MsgRegisterBeaconAmino): MsgRegisterBeacon;
    toAmino(message: MsgRegisterBeacon): MsgRegisterBeaconAmino;
    fromAminoMsg(object: MsgRegisterBeaconAminoMsg): MsgRegisterBeacon;
    fromProtoMsg(message: MsgRegisterBeaconProtoMsg): MsgRegisterBeacon;
    toProto(message: MsgRegisterBeacon): Uint8Array;
    toProtoMsg(message: MsgRegisterBeacon): MsgRegisterBeaconProtoMsg;
};
export declare const MsgRegisterBeaconResponse: {
    typeUrl: string;
    is(o: any): o is MsgRegisterBeaconResponse;
    isSDK(o: any): o is MsgRegisterBeaconResponseSDKType;
    isAmino(o: any): o is MsgRegisterBeaconResponseAmino;
    encode(message: MsgRegisterBeaconResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeaconResponse;
    fromPartial(object: Partial<MsgRegisterBeaconResponse>): MsgRegisterBeaconResponse;
    fromAmino(object: MsgRegisterBeaconResponseAmino): MsgRegisterBeaconResponse;
    toAmino(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseAmino;
    fromAminoMsg(object: MsgRegisterBeaconResponseAminoMsg): MsgRegisterBeaconResponse;
    fromProtoMsg(message: MsgRegisterBeaconResponseProtoMsg): MsgRegisterBeaconResponse;
    toProto(message: MsgRegisterBeaconResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseProtoMsg;
};
export declare const MsgRecordBeaconTimestamp: {
    typeUrl: string;
    is(o: any): o is MsgRecordBeaconTimestamp;
    isSDK(o: any): o is MsgRecordBeaconTimestampSDKType;
    isAmino(o: any): o is MsgRecordBeaconTimestampAmino;
    encode(message: MsgRecordBeaconTimestamp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestamp;
    fromPartial(object: Partial<MsgRecordBeaconTimestamp>): MsgRecordBeaconTimestamp;
    fromAmino(object: MsgRecordBeaconTimestampAmino): MsgRecordBeaconTimestamp;
    toAmino(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampAmino;
    fromAminoMsg(object: MsgRecordBeaconTimestampAminoMsg): MsgRecordBeaconTimestamp;
    fromProtoMsg(message: MsgRecordBeaconTimestampProtoMsg): MsgRecordBeaconTimestamp;
    toProto(message: MsgRecordBeaconTimestamp): Uint8Array;
    toProtoMsg(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampProtoMsg;
};
export declare const MsgRecordBeaconTimestampResponse: {
    typeUrl: string;
    is(o: any): o is MsgRecordBeaconTimestampResponse;
    isSDK(o: any): o is MsgRecordBeaconTimestampResponseSDKType;
    isAmino(o: any): o is MsgRecordBeaconTimestampResponseAmino;
    encode(message: MsgRecordBeaconTimestampResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestampResponse;
    fromPartial(object: Partial<MsgRecordBeaconTimestampResponse>): MsgRecordBeaconTimestampResponse;
    fromAmino(object: MsgRecordBeaconTimestampResponseAmino): MsgRecordBeaconTimestampResponse;
    toAmino(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseAmino;
    fromAminoMsg(object: MsgRecordBeaconTimestampResponseAminoMsg): MsgRecordBeaconTimestampResponse;
    fromProtoMsg(message: MsgRecordBeaconTimestampResponseProtoMsg): MsgRecordBeaconTimestampResponse;
    toProto(message: MsgRecordBeaconTimestampResponse): Uint8Array;
    toProtoMsg(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseProtoMsg;
};
export declare const MsgPurchaseBeaconStateStorage: {
    typeUrl: string;
    is(o: any): o is MsgPurchaseBeaconStateStorage;
    isSDK(o: any): o is MsgPurchaseBeaconStateStorageSDKType;
    isAmino(o: any): o is MsgPurchaseBeaconStateStorageAmino;
    encode(message: MsgPurchaseBeaconStateStorage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorage;
    fromPartial(object: Partial<MsgPurchaseBeaconStateStorage>): MsgPurchaseBeaconStateStorage;
    fromAmino(object: MsgPurchaseBeaconStateStorageAmino): MsgPurchaseBeaconStateStorage;
    toAmino(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageAmino;
    fromAminoMsg(object: MsgPurchaseBeaconStateStorageAminoMsg): MsgPurchaseBeaconStateStorage;
    fromProtoMsg(message: MsgPurchaseBeaconStateStorageProtoMsg): MsgPurchaseBeaconStateStorage;
    toProto(message: MsgPurchaseBeaconStateStorage): Uint8Array;
    toProtoMsg(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageProtoMsg;
};
export declare const MsgPurchaseBeaconStateStorageResponse: {
    typeUrl: string;
    is(o: any): o is MsgPurchaseBeaconStateStorageResponse;
    isSDK(o: any): o is MsgPurchaseBeaconStateStorageResponseSDKType;
    isAmino(o: any): o is MsgPurchaseBeaconStateStorageResponseAmino;
    encode(message: MsgPurchaseBeaconStateStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorageResponse;
    fromPartial(object: Partial<MsgPurchaseBeaconStateStorageResponse>): MsgPurchaseBeaconStateStorageResponse;
    fromAmino(object: MsgPurchaseBeaconStateStorageResponseAmino): MsgPurchaseBeaconStateStorageResponse;
    toAmino(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseAmino;
    fromAminoMsg(object: MsgPurchaseBeaconStateStorageResponseAminoMsg): MsgPurchaseBeaconStateStorageResponse;
    fromProtoMsg(message: MsgPurchaseBeaconStateStorageResponseProtoMsg): MsgPurchaseBeaconStateStorageResponse;
    toProto(message: MsgPurchaseBeaconStateStorageResponse): Uint8Array;
    toProtoMsg(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
