//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Params, ParamsAmino, ParamsSDKType } from './beacon';
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
  typeUrl: '/mainchain.beacon.v1.MsgRegisterBeacon';
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
  type: '/mainchain.beacon.v1.MsgRegisterBeacon';
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
  typeUrl: '/mainchain.beacon.v1.MsgRegisterBeaconResponse';
  value: Uint8Array;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponseAmino {
  /** beacon_id is the id of the new beacon */
  beacon_id?: string;
}
export interface MsgRegisterBeaconResponseAminoMsg {
  type: '/mainchain.beacon.v1.MsgRegisterBeaconResponse';
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
  typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestamp';
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
  type: '/mainchain.beacon.v1.MsgRecordBeaconTimestamp';
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
  typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse';
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
  type: '/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse';
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
  typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage';
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
  type: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage';
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
  typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse';
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
  type: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse';
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
  typeUrl: '/mainchain.beacon.v1.MsgUpdateParams';
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
  type: 'mainchain/x/beacon/MsgUpdateParams';
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: '/mainchain.beacon.v1.MsgUpdateParamsResponse';
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: '/mainchain.beacon.v1.MsgUpdateParamsResponse';
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterBeacon(): MsgRegisterBeacon {
  return {
    moniker: '',
    name: '',
    owner: ''
  };
}
export const MsgRegisterBeacon = {
  typeUrl: '/mainchain.beacon.v1.MsgRegisterBeacon',
  is(o: any): o is MsgRegisterBeacon {
    return o && (o.$typeUrl === MsgRegisterBeacon.typeUrl || typeof o.moniker === 'string' && typeof o.name === 'string' && typeof o.owner === 'string');
  },
  isSDK(o: any): o is MsgRegisterBeaconSDKType {
    return o && (o.$typeUrl === MsgRegisterBeacon.typeUrl || typeof o.moniker === 'string' && typeof o.name === 'string' && typeof o.owner === 'string');
  },
  isAmino(o: any): o is MsgRegisterBeaconAmino {
    return o && (o.$typeUrl === MsgRegisterBeacon.typeUrl || typeof o.moniker === 'string' && typeof o.name === 'string' && typeof o.owner === 'string');
  },
  encode(message: MsgRegisterBeacon, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== '') {
      writer.uint32(10).string(message.moniker);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeacon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.moniker = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.owner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterBeacon>): MsgRegisterBeacon {
    const message = createBaseMsgRegisterBeacon();
    message.moniker = object.moniker ?? '';
    message.name = object.name ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: MsgRegisterBeaconAmino): MsgRegisterBeacon {
    const message = createBaseMsgRegisterBeacon();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgRegisterBeacon): MsgRegisterBeaconAmino {
    const obj: any = {};
    obj.moniker = message.moniker === '' ? undefined : message.moniker;
    obj.name = message.name === '' ? undefined : message.name;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBeaconAminoMsg): MsgRegisterBeacon {
    return MsgRegisterBeacon.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBeaconProtoMsg): MsgRegisterBeacon {
    return MsgRegisterBeacon.decode(message.value);
  },
  toProto(message: MsgRegisterBeacon): Uint8Array {
    return MsgRegisterBeacon.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBeacon): MsgRegisterBeaconProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgRegisterBeacon',
      value: MsgRegisterBeacon.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterBeacon.typeUrl, MsgRegisterBeacon);
function createBaseMsgRegisterBeaconResponse(): MsgRegisterBeaconResponse {
  return {
    beaconId: BigInt(0)
  };
}
export const MsgRegisterBeaconResponse = {
  typeUrl: '/mainchain.beacon.v1.MsgRegisterBeaconResponse',
  is(o: any): o is MsgRegisterBeaconResponse {
    return o && (o.$typeUrl === MsgRegisterBeaconResponse.typeUrl || typeof o.beaconId === 'bigint');
  },
  isSDK(o: any): o is MsgRegisterBeaconResponseSDKType {
    return o && (o.$typeUrl === MsgRegisterBeaconResponse.typeUrl || typeof o.beacon_id === 'bigint');
  },
  isAmino(o: any): o is MsgRegisterBeaconResponseAmino {
    return o && (o.$typeUrl === MsgRegisterBeaconResponse.typeUrl || typeof o.beacon_id === 'bigint');
  },
  encode(message: MsgRegisterBeaconResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeaconResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.beaconId = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterBeaconResponse>): MsgRegisterBeaconResponse {
    const message = createBaseMsgRegisterBeaconResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterBeaconResponseAmino): MsgRegisterBeaconResponse {
    const message = createBaseMsgRegisterBeaconResponse();
    if (object.beacon_id !== undefined && object.beacon_id !== null) {
      message.beaconId = BigInt(object.beacon_id);
    }
    return message;
  },
  toAmino(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBeaconResponseAminoMsg): MsgRegisterBeaconResponse {
    return MsgRegisterBeaconResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBeaconResponseProtoMsg): MsgRegisterBeaconResponse {
    return MsgRegisterBeaconResponse.decode(message.value);
  },
  toProto(message: MsgRegisterBeaconResponse): Uint8Array {
    return MsgRegisterBeaconResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBeaconResponse): MsgRegisterBeaconResponseProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgRegisterBeaconResponse',
      value: MsgRegisterBeaconResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterBeaconResponse.typeUrl, MsgRegisterBeaconResponse);
function createBaseMsgRecordBeaconTimestamp(): MsgRecordBeaconTimestamp {
  return {
    beaconId: BigInt(0),
    hash: '',
    submitTime: BigInt(0),
    owner: ''
  };
}
export const MsgRecordBeaconTimestamp = {
  typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestamp',
  is(o: any): o is MsgRecordBeaconTimestamp {
    return o && (o.$typeUrl === MsgRecordBeaconTimestamp.typeUrl || typeof o.beaconId === 'bigint' && typeof o.hash === 'string' && typeof o.submitTime === 'bigint' && typeof o.owner === 'string');
  },
  isSDK(o: any): o is MsgRecordBeaconTimestampSDKType {
    return o && (o.$typeUrl === MsgRecordBeaconTimestamp.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.hash === 'string' && typeof o.submit_time === 'bigint' && typeof o.owner === 'string');
  },
  isAmino(o: any): o is MsgRecordBeaconTimestampAmino {
    return o && (o.$typeUrl === MsgRecordBeaconTimestamp.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.hash === 'string' && typeof o.submit_time === 'bigint' && typeof o.owner === 'string');
  },
  encode(message: MsgRecordBeaconTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.hash !== '') {
      writer.uint32(18).string(message.hash);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitTime);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.beaconId = reader.uint64();
        break;
      case 2:
        message.hash = reader.string();
        break;
      case 3:
        message.submitTime = reader.uint64();
        break;
      case 4:
        message.owner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordBeaconTimestamp>): MsgRecordBeaconTimestamp {
    const message = createBaseMsgRecordBeaconTimestamp();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.hash = object.hash ?? '';
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: MsgRecordBeaconTimestampAmino): MsgRecordBeaconTimestamp {
    const message = createBaseMsgRecordBeaconTimestamp();
    if (object.beacon_id !== undefined && object.beacon_id !== null) {
      message.beaconId = BigInt(object.beacon_id);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = BigInt(object.submit_time);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.submit_time = message.submitTime !== BigInt(0) ? message.submitTime.toString() : undefined;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRecordBeaconTimestampAminoMsg): MsgRecordBeaconTimestamp {
    return MsgRecordBeaconTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordBeaconTimestampProtoMsg): MsgRecordBeaconTimestamp {
    return MsgRecordBeaconTimestamp.decode(message.value);
  },
  toProto(message: MsgRecordBeaconTimestamp): Uint8Array {
    return MsgRecordBeaconTimestamp.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordBeaconTimestamp): MsgRecordBeaconTimestampProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestamp',
      value: MsgRecordBeaconTimestamp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecordBeaconTimestamp.typeUrl, MsgRecordBeaconTimestamp);
function createBaseMsgRecordBeaconTimestampResponse(): MsgRecordBeaconTimestampResponse {
  return {
    beaconId: BigInt(0),
    timestampId: BigInt(0)
  };
}
export const MsgRecordBeaconTimestampResponse = {
  typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse',
  is(o: any): o is MsgRecordBeaconTimestampResponse {
    return o && (o.$typeUrl === MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beaconId === 'bigint' && typeof o.timestampId === 'bigint');
  },
  isSDK(o: any): o is MsgRecordBeaconTimestampResponseSDKType {
    return o && (o.$typeUrl === MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.timestamp_id === 'bigint');
  },
  isAmino(o: any): o is MsgRecordBeaconTimestampResponseAmino {
    return o && (o.$typeUrl === MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.timestamp_id === 'bigint');
  },
  encode(message: MsgRecordBeaconTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.beaconId = reader.uint64();
        break;
      case 2:
        message.timestampId = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordBeaconTimestampResponse>): MsgRecordBeaconTimestampResponse {
    const message = createBaseMsgRecordBeaconTimestampResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRecordBeaconTimestampResponseAmino): MsgRecordBeaconTimestampResponse {
    const message = createBaseMsgRecordBeaconTimestampResponse();
    if (object.beacon_id !== undefined && object.beacon_id !== null) {
      message.beaconId = BigInt(object.beacon_id);
    }
    if (object.timestamp_id !== undefined && object.timestamp_id !== null) {
      message.timestampId = BigInt(object.timestamp_id);
    }
    return message;
  },
  toAmino(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
    obj.timestamp_id = message.timestampId !== BigInt(0) ? message.timestampId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRecordBeaconTimestampResponseAminoMsg): MsgRecordBeaconTimestampResponse {
    return MsgRecordBeaconTimestampResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordBeaconTimestampResponseProtoMsg): MsgRecordBeaconTimestampResponse {
    return MsgRecordBeaconTimestampResponse.decode(message.value);
  },
  toProto(message: MsgRecordBeaconTimestampResponse): Uint8Array {
    return MsgRecordBeaconTimestampResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordBeaconTimestampResponse): MsgRecordBeaconTimestampResponseProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse',
      value: MsgRecordBeaconTimestampResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecordBeaconTimestampResponse.typeUrl, MsgRecordBeaconTimestampResponse);
function createBaseMsgPurchaseBeaconStateStorage(): MsgPurchaseBeaconStateStorage {
  return {
    beaconId: BigInt(0),
    number: BigInt(0),
    owner: ''
  };
}
export const MsgPurchaseBeaconStateStorage = {
  typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage',
  is(o: any): o is MsgPurchaseBeaconStateStorage {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beaconId === 'bigint' && typeof o.number === 'bigint' && typeof o.owner === 'string');
  },
  isSDK(o: any): o is MsgPurchaseBeaconStateStorageSDKType {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.number === 'bigint' && typeof o.owner === 'string');
  },
  isAmino(o: any): o is MsgPurchaseBeaconStateStorageAmino {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.number === 'bigint' && typeof o.owner === 'string');
  },
  encode(message: MsgPurchaseBeaconStateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.beaconId = reader.uint64();
        break;
      case 2:
        message.number = reader.uint64();
        break;
      case 3:
        message.owner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPurchaseBeaconStateStorage>): MsgPurchaseBeaconStateStorage {
    const message = createBaseMsgPurchaseBeaconStateStorage();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: MsgPurchaseBeaconStateStorageAmino): MsgPurchaseBeaconStateStorage {
    const message = createBaseMsgPurchaseBeaconStateStorage();
    if (object.beacon_id !== undefined && object.beacon_id !== null) {
      message.beaconId = BigInt(object.beacon_id);
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
    obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseBeaconStateStorageAminoMsg): MsgPurchaseBeaconStateStorage {
    return MsgPurchaseBeaconStateStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseBeaconStateStorageProtoMsg): MsgPurchaseBeaconStateStorage {
    return MsgPurchaseBeaconStateStorage.decode(message.value);
  },
  toProto(message: MsgPurchaseBeaconStateStorage): Uint8Array {
    return MsgPurchaseBeaconStateStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseBeaconStateStorage): MsgPurchaseBeaconStateStorageProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage',
      value: MsgPurchaseBeaconStateStorage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPurchaseBeaconStateStorage.typeUrl, MsgPurchaseBeaconStateStorage);
function createBaseMsgPurchaseBeaconStateStorageResponse(): MsgPurchaseBeaconStateStorageResponse {
  return {
    beaconId: BigInt(0),
    numberPurchased: BigInt(0),
    numCanPurchase: BigInt(0)
  };
}
export const MsgPurchaseBeaconStateStorageResponse = {
  typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse',
  is(o: any): o is MsgPurchaseBeaconStateStorageResponse {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beaconId === 'bigint' && typeof o.numberPurchased === 'bigint' && typeof o.numCanPurchase === 'bigint');
  },
  isSDK(o: any): o is MsgPurchaseBeaconStateStorageResponseSDKType {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.number_purchased === 'bigint' && typeof o.num_can_purchase === 'bigint');
  },
  isAmino(o: any): o is MsgPurchaseBeaconStateStorageResponseAmino {
    return o && (o.$typeUrl === MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beacon_id === 'bigint' && typeof o.number_purchased === 'bigint' && typeof o.num_can_purchase === 'bigint');
  },
  encode(message: MsgPurchaseBeaconStateStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.numberPurchased !== BigInt(0)) {
      writer.uint32(16).uint64(message.numberPurchased);
    }
    if (message.numCanPurchase !== BigInt(0)) {
      writer.uint32(24).uint64(message.numCanPurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.beaconId = reader.uint64();
        break;
      case 2:
        message.numberPurchased = reader.uint64();
        break;
      case 3:
        message.numCanPurchase = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPurchaseBeaconStateStorageResponse>): MsgPurchaseBeaconStateStorageResponse {
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
    message.numberPurchased = object.numberPurchased !== undefined && object.numberPurchased !== null ? BigInt(object.numberPurchased.toString()) : BigInt(0);
    message.numCanPurchase = object.numCanPurchase !== undefined && object.numCanPurchase !== null ? BigInt(object.numCanPurchase.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPurchaseBeaconStateStorageResponseAmino): MsgPurchaseBeaconStateStorageResponse {
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    if (object.beacon_id !== undefined && object.beacon_id !== null) {
      message.beaconId = BigInt(object.beacon_id);
    }
    if (object.number_purchased !== undefined && object.number_purchased !== null) {
      message.numberPurchased = BigInt(object.number_purchased);
    }
    if (object.num_can_purchase !== undefined && object.num_can_purchase !== null) {
      message.numCanPurchase = BigInt(object.num_can_purchase);
    }
    return message;
  },
  toAmino(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseAmino {
    const obj: any = {};
    obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
    obj.number_purchased = message.numberPurchased !== BigInt(0) ? message.numberPurchased.toString() : undefined;
    obj.num_can_purchase = message.numCanPurchase !== BigInt(0) ? message.numCanPurchase.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseBeaconStateStorageResponseAminoMsg): MsgPurchaseBeaconStateStorageResponse {
    return MsgPurchaseBeaconStateStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseBeaconStateStorageResponseProtoMsg): MsgPurchaseBeaconStateStorageResponse {
    return MsgPurchaseBeaconStateStorageResponse.decode(message.value);
  },
  toProto(message: MsgPurchaseBeaconStateStorageResponse): Uint8Array {
    return MsgPurchaseBeaconStateStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseBeaconStateStorageResponse): MsgPurchaseBeaconStateStorageResponseProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse',
      value: MsgPurchaseBeaconStateStorageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPurchaseBeaconStateStorageResponse.typeUrl, MsgPurchaseBeaconStateStorageResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: '',
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: '/mainchain.beacon.v1.MsgUpdateParams',
  aminoType: 'mainchain/x/beacon/MsgUpdateParams',
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === 'string' && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === 'string' && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === 'string' && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.authority = reader.string();
        break;
      case 2:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? '';
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === '' ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: 'mainchain/x/beacon/MsgUpdateParams',
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgUpdateParams',
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: '/mainchain.beacon.v1.MsgUpdateParamsResponse',
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: '/mainchain.beacon.v1.MsgUpdateParamsResponse',
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);