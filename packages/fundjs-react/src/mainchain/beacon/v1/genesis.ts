//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Beacon, BeaconAmino, BeaconSDKType } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingBeaconId: BigInt(0),
    registeredBeacons: []
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.beacon.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.startingBeaconId === "bigint" && Array.isArray(o.registeredBeacons) && (!o.registeredBeacons.length || BeaconExport.is(o.registeredBeacons[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && typeof o.starting_beacon_id === "bigint" && Array.isArray(o.registered_beacons) && (!o.registered_beacons.length || BeaconExport.isSDK(o.registered_beacons[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.starting_beacon_id === "bigint" && Array.isArray(o.registered_beacons) && (!o.registered_beacons.length || BeaconExport.isAmino(o.registered_beacons[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingBeaconId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingBeaconId);
    }
    for (const v of message.registeredBeacons) {
      BeaconExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.startingBeaconId = reader.uint64();
          break;
        case 3:
          message.registeredBeacons.push(BeaconExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.startingBeaconId = object.startingBeaconId !== undefined && object.startingBeaconId !== null ? BigInt(object.startingBeaconId.toString()) : BigInt(0);
    message.registeredBeacons = object.registeredBeacons?.map(e => BeaconExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.starting_beacon_id !== undefined && object.starting_beacon_id !== null) {
      message.startingBeaconId = BigInt(object.starting_beacon_id);
    }
    message.registeredBeacons = object.registered_beacons?.map(e => BeaconExport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.starting_beacon_id = message.startingBeaconId !== BigInt(0) ? message.startingBeaconId.toString() : undefined;
    if (message.registeredBeacons) {
      obj.registered_beacons = message.registeredBeacons.map(e => e ? BeaconExport.toAmino(e) : undefined);
    } else {
      obj.registered_beacons = message.registeredBeacons;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseBeaconTimestampGenesisExport(): BeaconTimestampGenesisExport {
  return {
    id: BigInt(0),
    t: BigInt(0),
    h: ""
  };
}
export const BeaconTimestampGenesisExport = {
  typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport",
  is(o: any): o is BeaconTimestampGenesisExport {
    return o && (o.$typeUrl === BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
  },
  isSDK(o: any): o is BeaconTimestampGenesisExportSDKType {
    return o && (o.$typeUrl === BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
  },
  isAmino(o: any): o is BeaconTimestampGenesisExportAmino {
    return o && (o.$typeUrl === BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
  },
  encode(message: BeaconTimestampGenesisExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.t !== BigInt(0)) {
      writer.uint32(16).uint64(message.t);
    }
    if (message.h !== "") {
      writer.uint32(26).string(message.h);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestampGenesisExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconTimestampGenesisExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.t = reader.uint64();
          break;
        case 3:
          message.h = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BeaconTimestampGenesisExport>): BeaconTimestampGenesisExport {
    const message = createBaseBeaconTimestampGenesisExport();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.t = object.t !== undefined && object.t !== null ? BigInt(object.t.toString()) : BigInt(0);
    message.h = object.h ?? "";
    return message;
  },
  fromAmino(object: BeaconTimestampGenesisExportAmino): BeaconTimestampGenesisExport {
    const message = createBaseBeaconTimestampGenesisExport();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.t !== undefined && object.t !== null) {
      message.t = BigInt(object.t);
    }
    if (object.h !== undefined && object.h !== null) {
      message.h = object.h;
    }
    return message;
  },
  toAmino(message: BeaconTimestampGenesisExport): BeaconTimestampGenesisExportAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.t = message.t !== BigInt(0) ? message.t.toString() : undefined;
    obj.h = message.h === "" ? undefined : message.h;
    return obj;
  },
  fromAminoMsg(object: BeaconTimestampGenesisExportAminoMsg): BeaconTimestampGenesisExport {
    return BeaconTimestampGenesisExport.fromAmino(object.value);
  },
  fromProtoMsg(message: BeaconTimestampGenesisExportProtoMsg): BeaconTimestampGenesisExport {
    return BeaconTimestampGenesisExport.decode(message.value);
  },
  toProto(message: BeaconTimestampGenesisExport): Uint8Array {
    return BeaconTimestampGenesisExport.encode(message).finish();
  },
  toProtoMsg(message: BeaconTimestampGenesisExport): BeaconTimestampGenesisExportProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport",
      value: BeaconTimestampGenesisExport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BeaconTimestampGenesisExport.typeUrl, BeaconTimestampGenesisExport);
function createBaseBeaconExport(): BeaconExport {
  return {
    beacon: Beacon.fromPartial({}),
    inStateLimit: BigInt(0),
    timestamps: []
  };
}
export const BeaconExport = {
  typeUrl: "/mainchain.beacon.v1.BeaconExport",
  is(o: any): o is BeaconExport {
    return o && (o.$typeUrl === BeaconExport.typeUrl || Beacon.is(o.beacon) && typeof o.inStateLimit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || BeaconTimestampGenesisExport.is(o.timestamps[0])));
  },
  isSDK(o: any): o is BeaconExportSDKType {
    return o && (o.$typeUrl === BeaconExport.typeUrl || Beacon.isSDK(o.beacon) && typeof o.in_state_limit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || BeaconTimestampGenesisExport.isSDK(o.timestamps[0])));
  },
  isAmino(o: any): o is BeaconExportAmino {
    return o && (o.$typeUrl === BeaconExport.typeUrl || Beacon.isAmino(o.beacon) && typeof o.in_state_limit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || BeaconTimestampGenesisExport.isAmino(o.timestamps[0])));
  },
  encode(message: BeaconExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beacon !== undefined) {
      Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    for (const v of message.timestamps) {
      BeaconTimestampGenesisExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacon = Beacon.decode(reader, reader.uint32());
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        case 3:
          message.timestamps.push(BeaconTimestampGenesisExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BeaconExport>): BeaconExport {
    const message = createBaseBeaconExport();
    message.beacon = object.beacon !== undefined && object.beacon !== null ? Beacon.fromPartial(object.beacon) : undefined;
    message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
    message.timestamps = object.timestamps?.map(e => BeaconTimestampGenesisExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BeaconExportAmino): BeaconExport {
    const message = createBaseBeaconExport();
    if (object.beacon !== undefined && object.beacon !== null) {
      message.beacon = Beacon.fromAmino(object.beacon);
    }
    if (object.in_state_limit !== undefined && object.in_state_limit !== null) {
      message.inStateLimit = BigInt(object.in_state_limit);
    }
    message.timestamps = object.timestamps?.map(e => BeaconTimestampGenesisExport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BeaconExport): BeaconExportAmino {
    const obj: any = {};
    obj.beacon = message.beacon ? Beacon.toAmino(message.beacon) : undefined;
    obj.in_state_limit = message.inStateLimit !== BigInt(0) ? message.inStateLimit.toString() : undefined;
    if (message.timestamps) {
      obj.timestamps = message.timestamps.map(e => e ? BeaconTimestampGenesisExport.toAmino(e) : undefined);
    } else {
      obj.timestamps = message.timestamps;
    }
    return obj;
  },
  fromAminoMsg(object: BeaconExportAminoMsg): BeaconExport {
    return BeaconExport.fromAmino(object.value);
  },
  fromProtoMsg(message: BeaconExportProtoMsg): BeaconExport {
    return BeaconExport.decode(message.value);
  },
  toProto(message: BeaconExport): Uint8Array {
    return BeaconExport.encode(message).finish();
  },
  toProtoMsg(message: BeaconExport): BeaconExportProtoMsg {
    return {
      typeUrl: "/mainchain.beacon.v1.BeaconExport",
      value: BeaconExport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BeaconExport.typeUrl, BeaconExport);