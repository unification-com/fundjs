import { BinaryReader, BinaryWriter } from "../../../binary";
/** Beacon holds metadata about a registered beacon */
export interface Beacon {
    /** beacon_id is the id of the beacon */
    beaconId: bigint;
    /** moniker is the readable id of the beacon */
    moniker: string;
    /** name is the human friendly name of the beacon */
    name: string;
    /** last_timestamp_id is the current highest recorded timestamp id for the beacon */
    lastTimestampId: bigint;
    /** first_id_in_state is the lowest recorded timestamp id currently held in state for the beacon */
    firstIdInState: bigint;
    /** num_in_state is the current number of timestamps stored in state for the beacon */
    numInState: bigint;
    /** reg_time is the unix epoch of the beacon's registration time */
    regTime: bigint;
    /** owner is the owner address of the beacon */
    owner: string;
}
export interface BeaconProtoMsg {
    typeUrl: "/mainchain.beacon.v1.Beacon";
    value: Uint8Array;
}
/** Beacon holds metadata about a registered beacon */
export interface BeaconAmino {
    /** beacon_id is the id of the beacon */
    beacon_id?: string;
    /** moniker is the readable id of the beacon */
    moniker?: string;
    /** name is the human friendly name of the beacon */
    name?: string;
    /** last_timestamp_id is the current highest recorded timestamp id for the beacon */
    last_timestamp_id?: string;
    /** first_id_in_state is the lowest recorded timestamp id currently held in state for the beacon */
    first_id_in_state?: string;
    /** num_in_state is the current number of timestamps stored in state for the beacon */
    num_in_state?: string;
    /** reg_time is the unix epoch of the beacon's registration time */
    reg_time?: string;
    /** owner is the owner address of the beacon */
    owner?: string;
}
export interface BeaconAminoMsg {
    type: "/mainchain.beacon.v1.Beacon";
    value: BeaconAmino;
}
/** Beacon holds metadata about a registered beacon */
export interface BeaconSDKType {
    beacon_id: bigint;
    moniker: string;
    name: string;
    last_timestamp_id: bigint;
    first_id_in_state: bigint;
    num_in_state: bigint;
    reg_time: bigint;
    owner: string;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimit {
    /** beacon_id is the id of the beacon */
    beaconId: bigint;
    /** in_state_limit is the current maximum number of timestmamps that will be held in state for the beacon */
    inStateLimit: bigint;
}
export interface BeaconStorageLimitProtoMsg {
    typeUrl: "/mainchain.beacon.v1.BeaconStorageLimit";
    value: Uint8Array;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimitAmino {
    /** beacon_id is the id of the beacon */
    beacon_id?: string;
    /** in_state_limit is the current maximum number of timestmamps that will be held in state for the beacon */
    in_state_limit?: string;
}
export interface BeaconStorageLimitAminoMsg {
    type: "/mainchain.beacon.v1.BeaconStorageLimit";
    value: BeaconStorageLimitAmino;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimitSDKType {
    beacon_id: bigint;
    in_state_limit: bigint;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestamp {
    /** timestamp_id is the id of the timestamp */
    timestampId: bigint;
    /** submit_time is the unix epoch of the timestamp's record time */
    submitTime: bigint;
    /** hash is the actual data stored for the timestamp */
    hash: string;
}
export interface BeaconTimestampProtoMsg {
    typeUrl: "/mainchain.beacon.v1.BeaconTimestamp";
    value: Uint8Array;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestampAmino {
    /** timestamp_id is the id of the timestamp */
    timestamp_id?: string;
    /** submit_time is the unix epoch of the timestamp's record time */
    submit_time?: string;
    /** hash is the actual data stored for the timestamp */
    hash?: string;
}
export interface BeaconTimestampAminoMsg {
    type: "/mainchain.beacon.v1.BeaconTimestamp";
    value: BeaconTimestampAmino;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestampSDKType {
    timestamp_id: bigint;
    submit_time: bigint;
    hash: string;
}
/** Params defines the parameters for the beacon module. */
export interface Params {
    /** fee_register is the cost to register a beacon */
    feeRegister: bigint;
    /** fee_record is the cost to record a single timestamp */
    feeRecord: bigint;
    /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
    feePurchaseStorage: bigint;
    /** denom is the expected denomination to pay for fees, e.g. nund */
    denom: string;
    /** default_storage_limit is the default in-state storage limit for all new beacons */
    defaultStorageLimit: bigint;
    /** max_storage_limit is the maximum in-state storage slots any one beacon can have */
    maxStorageLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/mainchain.beacon.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the beacon module. */
export interface ParamsAmino {
    /** fee_register is the cost to register a beacon */
    fee_register?: string;
    /** fee_record is the cost to record a single timestamp */
    fee_record?: string;
    /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
    fee_purchase_storage?: string;
    /** denom is the expected denomination to pay for fees, e.g. nund */
    denom?: string;
    /** default_storage_limit is the default in-state storage limit for all new beacons */
    default_storage_limit?: string;
    /** max_storage_limit is the maximum in-state storage slots any one beacon can have */
    max_storage_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/mainchain.beacon.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the beacon module. */
export interface ParamsSDKType {
    fee_register: bigint;
    fee_record: bigint;
    fee_purchase_storage: bigint;
    denom: string;
    default_storage_limit: bigint;
    max_storage_limit: bigint;
}
export declare const Beacon: {
    typeUrl: string;
    is(o: any): o is Beacon;
    isSDK(o: any): o is BeaconSDKType;
    isAmino(o: any): o is BeaconAmino;
    encode(message: Beacon, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Beacon;
    fromPartial(object: Partial<Beacon>): Beacon;
    fromAmino(object: BeaconAmino): Beacon;
    toAmino(message: Beacon): BeaconAmino;
    fromAminoMsg(object: BeaconAminoMsg): Beacon;
    fromProtoMsg(message: BeaconProtoMsg): Beacon;
    toProto(message: Beacon): Uint8Array;
    toProtoMsg(message: Beacon): BeaconProtoMsg;
};
export declare const BeaconStorageLimit: {
    typeUrl: string;
    is(o: any): o is BeaconStorageLimit;
    isSDK(o: any): o is BeaconStorageLimitSDKType;
    isAmino(o: any): o is BeaconStorageLimitAmino;
    encode(message: BeaconStorageLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BeaconStorageLimit;
    fromPartial(object: Partial<BeaconStorageLimit>): BeaconStorageLimit;
    fromAmino(object: BeaconStorageLimitAmino): BeaconStorageLimit;
    toAmino(message: BeaconStorageLimit): BeaconStorageLimitAmino;
    fromAminoMsg(object: BeaconStorageLimitAminoMsg): BeaconStorageLimit;
    fromProtoMsg(message: BeaconStorageLimitProtoMsg): BeaconStorageLimit;
    toProto(message: BeaconStorageLimit): Uint8Array;
    toProtoMsg(message: BeaconStorageLimit): BeaconStorageLimitProtoMsg;
};
export declare const BeaconTimestamp: {
    typeUrl: string;
    is(o: any): o is BeaconTimestamp;
    isSDK(o: any): o is BeaconTimestampSDKType;
    isAmino(o: any): o is BeaconTimestampAmino;
    encode(message: BeaconTimestamp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestamp;
    fromPartial(object: Partial<BeaconTimestamp>): BeaconTimestamp;
    fromAmino(object: BeaconTimestampAmino): BeaconTimestamp;
    toAmino(message: BeaconTimestamp): BeaconTimestampAmino;
    fromAminoMsg(object: BeaconTimestampAminoMsg): BeaconTimestamp;
    fromProtoMsg(message: BeaconTimestampProtoMsg): BeaconTimestamp;
    toProto(message: BeaconTimestamp): Uint8Array;
    toProtoMsg(message: BeaconTimestamp): BeaconTimestampProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
