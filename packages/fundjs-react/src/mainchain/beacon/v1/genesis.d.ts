import { Params, ParamsAmino, ParamsSDKType, Beacon, BeaconAmino, BeaconSDKType } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the beacon module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    startingBeaconId: bigint;
    registeredBeacons: BeaconExport[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/mainchain.beacon.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the beacon module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    starting_beacon_id?: string;
    registered_beacons?: BeaconExportAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/mainchain.beacon.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the beacon module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    starting_beacon_id: bigint;
    registered_beacons: BeaconExportSDKType[];
}
/**
 * BeaconTimestampGenesisExport is a trimmed version of BeaconTimestamp
 * for genesis exports to conserve space
 */
export interface BeaconTimestampGenesisExport {
    id: bigint;
    t: bigint;
    h: string;
}
export interface BeaconTimestampGenesisExportProtoMsg {
    typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport";
    value: Uint8Array;
}
/**
 * BeaconTimestampGenesisExport is a trimmed version of BeaconTimestamp
 * for genesis exports to conserve space
 */
export interface BeaconTimestampGenesisExportAmino {
    id?: string;
    t?: string;
    h?: string;
}
export interface BeaconTimestampGenesisExportAminoMsg {
    type: "/mainchain.beacon.v1.BeaconTimestampGenesisExport";
    value: BeaconTimestampGenesisExportAmino;
}
/**
 * BeaconTimestampGenesisExport is a trimmed version of BeaconTimestamp
 * for genesis exports to conserve space
 */
export interface BeaconTimestampGenesisExportSDKType {
    id: bigint;
    t: bigint;
    h: string;
}
/** BeaconExport holds genesis export data for a beacon, including submitted timestamps */
export interface BeaconExport {
    beacon: Beacon;
    inStateLimit: bigint;
    timestamps: BeaconTimestampGenesisExport[];
}
export interface BeaconExportProtoMsg {
    typeUrl: "/mainchain.beacon.v1.BeaconExport";
    value: Uint8Array;
}
/** BeaconExport holds genesis export data for a beacon, including submitted timestamps */
export interface BeaconExportAmino {
    beacon?: BeaconAmino;
    in_state_limit?: string;
    timestamps?: BeaconTimestampGenesisExportAmino[];
}
export interface BeaconExportAminoMsg {
    type: "/mainchain.beacon.v1.BeaconExport";
    value: BeaconExportAmino;
}
/** BeaconExport holds genesis export data for a beacon, including submitted timestamps */
export interface BeaconExportSDKType {
    beacon: BeaconSDKType;
    in_state_limit: bigint;
    timestamps: BeaconTimestampGenesisExportSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const BeaconTimestampGenesisExport: {
    typeUrl: string;
    is(o: any): o is BeaconTimestampGenesisExport;
    isSDK(o: any): o is BeaconTimestampGenesisExportSDKType;
    isAmino(o: any): o is BeaconTimestampGenesisExportAmino;
    encode(message: BeaconTimestampGenesisExport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestampGenesisExport;
    fromPartial(object: Partial<BeaconTimestampGenesisExport>): BeaconTimestampGenesisExport;
    fromAmino(object: BeaconTimestampGenesisExportAmino): BeaconTimestampGenesisExport;
    toAmino(message: BeaconTimestampGenesisExport): BeaconTimestampGenesisExportAmino;
    fromAminoMsg(object: BeaconTimestampGenesisExportAminoMsg): BeaconTimestampGenesisExport;
    fromProtoMsg(message: BeaconTimestampGenesisExportProtoMsg): BeaconTimestampGenesisExport;
    toProto(message: BeaconTimestampGenesisExport): Uint8Array;
    toProtoMsg(message: BeaconTimestampGenesisExport): BeaconTimestampGenesisExportProtoMsg;
};
export declare const BeaconExport: {
    typeUrl: string;
    is(o: any): o is BeaconExport;
    isSDK(o: any): o is BeaconExportSDKType;
    isAmino(o: any): o is BeaconExportAmino;
    encode(message: BeaconExport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BeaconExport;
    fromPartial(object: Partial<BeaconExport>): BeaconExport;
    fromAmino(object: BeaconExportAmino): BeaconExport;
    toAmino(message: BeaconExport): BeaconExportAmino;
    fromAminoMsg(object: BeaconExportAminoMsg): BeaconExport;
    fromProtoMsg(message: BeaconExportProtoMsg): BeaconExport;
    toProto(message: BeaconExport): Uint8Array;
    toProtoMsg(message: BeaconExport): BeaconExportProtoMsg;
};
