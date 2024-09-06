//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgRegisterWrkChain represents a message to register a new wrkchain */
export interface MsgRegisterWrkChain {
  /** moniker is a short identifier for a wrkchain */
  moniker: string;
  /** name is a long name for a wrkchain */
  name: string;
  /** genesis_hash is a hash of the genesis block of the wrkchain */
  genesisHash: string;
  /** base_type is the type of wrkchain, e.g. geth, cosmos etc. */
  baseType: string;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
export interface MsgRegisterWrkChainProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain";
  value: Uint8Array;
}
/** MsgRegisterWrkChain represents a message to register a new wrkchain */
export interface MsgRegisterWrkChainAmino {
  /** moniker is a short identifier for a wrkchain */
  moniker?: string;
  /** name is a long name for a wrkchain */
  name?: string;
  /** genesis_hash is a hash of the genesis block of the wrkchain */
  genesis_hash: string;
  /** base_type is the type of wrkchain, e.g. geth, cosmos etc. */
  base_type: string;
  /** owner is the address of the owner of the wrkchain */
  owner?: string;
}
export interface MsgRegisterWrkChainAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgRegisterWrkChain";
  value: MsgRegisterWrkChainAmino;
}
/** MsgRegisterWrkChain represents a message to register a new wrkchain */
export interface MsgRegisterWrkChainSDKType {
  moniker: string;
  name: string;
  genesis_hash: string;
  base_type: string;
  owner: string;
}
/** MsgRegisterWrkChainResponse defines the Msg/RegisterWrkChain response type. */
export interface MsgRegisterWrkChainResponse {
  /** wrkchain_id is the id of the new wrkchain */
  wrkchainId: bigint;
}
export interface MsgRegisterWrkChainResponseProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse";
  value: Uint8Array;
}
/** MsgRegisterWrkChainResponse defines the Msg/RegisterWrkChain response type. */
export interface MsgRegisterWrkChainResponseAmino {
  /** wrkchain_id is the id of the new wrkchain */
  wrkchain_id?: string;
}
export interface MsgRegisterWrkChainResponseAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse";
  value: MsgRegisterWrkChainResponseAmino;
}
/** MsgRegisterWrkChainResponse defines the Msg/RegisterWrkChain response type. */
export interface MsgRegisterWrkChainResponseSDKType {
  wrkchain_id: bigint;
}
/** MsgRecordWrkChainBlock represents a message to submit a set of block hashes for a registered wrkchain */
export interface MsgRecordWrkChainBlock {
  /** wrkchain_id is the id of the wrkchain the hashes are being submitted for */
  wrkchainId: bigint;
  /** height is the block height/number of the hashes being submitted */
  height: bigint;
  /** block_hash is the main block hash */
  blockHash: string;
  /** parent_hash is an optional parent block hash for the given height/block number */
  parentHash: string;
  /** hash1 is an optional supplementary hash to be submitted, for example TxHash */
  hash1: string;
  /** hash2 is an optional supplementary hash to be submitted, for example TxHash */
  hash2: string;
  /** hash3 is an optional supplementary hash to be submitted, for example TxHash */
  hash3: string;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
export interface MsgRecordWrkChainBlockProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock";
  value: Uint8Array;
}
/** MsgRecordWrkChainBlock represents a message to submit a set of block hashes for a registered wrkchain */
export interface MsgRecordWrkChainBlockAmino {
  /** wrkchain_id is the id of the wrkchain the hashes are being submitted for */
  wrkchain_id?: string;
  /** height is the block height/number of the hashes being submitted */
  height?: string;
  /** block_hash is the main block hash */
  block_hash: string;
  /** parent_hash is an optional parent block hash for the given height/block number */
  parent_hash: string;
  /** hash1 is an optional supplementary hash to be submitted, for example TxHash */
  hash1?: string;
  /** hash2 is an optional supplementary hash to be submitted, for example TxHash */
  hash2?: string;
  /** hash3 is an optional supplementary hash to be submitted, for example TxHash */
  hash3?: string;
  /** owner is the address of the owner of the wrkchain */
  owner?: string;
}
export interface MsgRecordWrkChainBlockAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock";
  value: MsgRecordWrkChainBlockAmino;
}
/** MsgRecordWrkChainBlock represents a message to submit a set of block hashes for a registered wrkchain */
export interface MsgRecordWrkChainBlockSDKType {
  wrkchain_id: bigint;
  height: bigint;
  block_hash: string;
  parent_hash: string;
  hash1: string;
  hash2: string;
  hash3: string;
  owner: string;
}
/** MsgRecordWrkChainBlockResponse defines the Msg/RecordWrkChainBlock response type. */
export interface MsgRecordWrkChainBlockResponse {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** height is the height of the submitted block hashes */
  height: bigint;
}
export interface MsgRecordWrkChainBlockResponseProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse";
  value: Uint8Array;
}
/** MsgRecordWrkChainBlockResponse defines the Msg/RecordWrkChainBlock response type. */
export interface MsgRecordWrkChainBlockResponseAmino {
  /** wrkchain_id is the id of the wrkchain */
  wrkchain_id?: string;
  /** height is the height of the submitted block hashes */
  height?: string;
}
export interface MsgRecordWrkChainBlockResponseAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse";
  value: MsgRecordWrkChainBlockResponseAmino;
}
/** MsgRecordWrkChainBlockResponse defines the Msg/RecordWrkChainBlock response type. */
export interface MsgRecordWrkChainBlockResponseSDKType {
  wrkchain_id: bigint;
  height: bigint;
}
/** MsgPurchaseWrkChainStateStorage represents a message to purchase more wrkchain storage */
export interface MsgPurchaseWrkChainStateStorage {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchainId: bigint;
  /** number is the number of state storage spaces to purchase */
  number: bigint;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
export interface MsgPurchaseWrkChainStateStorageProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage";
  value: Uint8Array;
}
/** MsgPurchaseWrkChainStateStorage represents a message to purchase more wrkchain storage */
export interface MsgPurchaseWrkChainStateStorageAmino {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchain_id?: string;
  /** number is the number of state storage spaces to purchase */
  number?: string;
  /** owner is the address of the owner of the wrkchain */
  owner?: string;
}
export interface MsgPurchaseWrkChainStateStorageAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage";
  value: MsgPurchaseWrkChainStateStorageAmino;
}
/** MsgPurchaseWrkChainStateStorage represents a message to purchase more wrkchain storage */
export interface MsgPurchaseWrkChainStateStorageSDKType {
  wrkchain_id: bigint;
  number: bigint;
  owner: string;
}
/** MsgPurchaseWrkChainStateStorageResponse defines the Msg/PurchaseWrkChainStateStorage response type. */
export interface MsgPurchaseWrkChainStateStorageResponse {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchainId: bigint;
  /** number_purchased is the number of state storage spaces purchased */
  numberPurchased: bigint;
  /** num_can_purchase is the number of remaining slots available for purchase */
  numCanPurchase: bigint;
}
export interface MsgPurchaseWrkChainStateStorageResponseProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse";
  value: Uint8Array;
}
/** MsgPurchaseWrkChainStateStorageResponse defines the Msg/PurchaseWrkChainStateStorage response type. */
export interface MsgPurchaseWrkChainStateStorageResponseAmino {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchain_id?: string;
  /** number_purchased is the number of state storage spaces purchased */
  number_purchased?: string;
  /** num_can_purchase is the number of remaining slots available for purchase */
  num_can_purchase?: string;
}
export interface MsgPurchaseWrkChainStateStorageResponseAminoMsg {
  type: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse";
  value: MsgPurchaseWrkChainStateStorageResponseAmino;
}
/** MsgPurchaseWrkChainStateStorageResponse defines the Msg/PurchaseWrkChainStateStorage response type. */
export interface MsgPurchaseWrkChainStateStorageResponseSDKType {
  wrkchain_id: bigint;
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
   * params defines the x/wrkchain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams";
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
   * params defines the x/wrkchain parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "mainchain/x/wrkchain/MsgUpdateParams";
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
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse";
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
  type: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterWrkChain(): MsgRegisterWrkChain {
  return {
    moniker: "",
    name: "",
    genesisHash: "",
    baseType: "",
    owner: ""
  };
}
export const MsgRegisterWrkChain = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
  is(o: any): o is MsgRegisterWrkChain {
    return o && (o.$typeUrl === MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesisHash === "string" && typeof o.baseType === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgRegisterWrkChainSDKType {
    return o && (o.$typeUrl === MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis_hash === "string" && typeof o.base_type === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgRegisterWrkChainAmino {
    return o && (o.$typeUrl === MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis_hash === "string" && typeof o.base_type === "string" && typeof o.owner === "string");
  },
  encode(message: MsgRegisterWrkChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.genesisHash !== "") {
      writer.uint32(34).string(message.genesisHash);
    }
    if (message.baseType !== "") {
      writer.uint32(42).string(message.baseType);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWrkChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.genesisHash = reader.string();
          break;
        case 5:
          message.baseType = reader.string();
          break;
        case 6:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterWrkChain>): MsgRegisterWrkChain {
    const message = createBaseMsgRegisterWrkChain();
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.genesisHash = object.genesisHash ?? "";
    message.baseType = object.baseType ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterWrkChainAmino): MsgRegisterWrkChain {
    const message = createBaseMsgRegisterWrkChain();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.genesis_hash !== undefined && object.genesis_hash !== null) {
      message.genesisHash = object.genesis_hash;
    }
    if (object.base_type !== undefined && object.base_type !== null) {
      message.baseType = object.base_type;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgRegisterWrkChain): MsgRegisterWrkChainAmino {
    const obj: any = {};
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.name = message.name === "" ? undefined : message.name;
    obj.genesis_hash = message.genesisHash ?? "";
    obj.base_type = message.baseType ?? "";
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterWrkChainAminoMsg): MsgRegisterWrkChain {
    return MsgRegisterWrkChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterWrkChainProtoMsg): MsgRegisterWrkChain {
    return MsgRegisterWrkChain.decode(message.value);
  },
  toProto(message: MsgRegisterWrkChain): Uint8Array {
    return MsgRegisterWrkChain.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterWrkChain): MsgRegisterWrkChainProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
      value: MsgRegisterWrkChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterWrkChain.typeUrl, MsgRegisterWrkChain);
function createBaseMsgRegisterWrkChainResponse(): MsgRegisterWrkChainResponse {
  return {
    wrkchainId: BigInt(0)
  };
}
export const MsgRegisterWrkChainResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse",
  is(o: any): o is MsgRegisterWrkChainResponse {
    return o && (o.$typeUrl === MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchainId === "bigint");
  },
  isSDK(o: any): o is MsgRegisterWrkChainResponseSDKType {
    return o && (o.$typeUrl === MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchain_id === "bigint");
  },
  isAmino(o: any): o is MsgRegisterWrkChainResponseAmino {
    return o && (o.$typeUrl === MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchain_id === "bigint");
  },
  encode(message: MsgRegisterWrkChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWrkChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterWrkChainResponse>): MsgRegisterWrkChainResponse {
    const message = createBaseMsgRegisterWrkChainResponse();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRegisterWrkChainResponseAmino): MsgRegisterWrkChainResponse {
    const message = createBaseMsgRegisterWrkChainResponse();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    return message;
  },
  toAmino(message: MsgRegisterWrkChainResponse): MsgRegisterWrkChainResponseAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterWrkChainResponseAminoMsg): MsgRegisterWrkChainResponse {
    return MsgRegisterWrkChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterWrkChainResponseProtoMsg): MsgRegisterWrkChainResponse {
    return MsgRegisterWrkChainResponse.decode(message.value);
  },
  toProto(message: MsgRegisterWrkChainResponse): Uint8Array {
    return MsgRegisterWrkChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterWrkChainResponse): MsgRegisterWrkChainResponseProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse",
      value: MsgRegisterWrkChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterWrkChainResponse.typeUrl, MsgRegisterWrkChainResponse);
function createBaseMsgRecordWrkChainBlock(): MsgRecordWrkChainBlock {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0),
    blockHash: "",
    parentHash: "",
    hash1: "",
    hash2: "",
    hash3: "",
    owner: ""
  };
}
export const MsgRecordWrkChainBlock = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
  is(o: any): o is MsgRecordWrkChainBlock {
    return o && (o.$typeUrl === MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.height === "bigint" && typeof o.blockHash === "string" && typeof o.parentHash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgRecordWrkChainBlockSDKType {
    return o && (o.$typeUrl === MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint" && typeof o.block_hash === "string" && typeof o.parent_hash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgRecordWrkChainBlockAmino {
    return o && (o.$typeUrl === MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint" && typeof o.block_hash === "string" && typeof o.parent_hash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
  },
  encode(message: MsgRecordWrkChainBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.blockHash !== "") {
      writer.uint32(26).string(message.blockHash);
    }
    if (message.parentHash !== "") {
      writer.uint32(34).string(message.parentHash);
    }
    if (message.hash1 !== "") {
      writer.uint32(42).string(message.hash1);
    }
    if (message.hash2 !== "") {
      writer.uint32(50).string(message.hash2);
    }
    if (message.hash3 !== "") {
      writer.uint32(58).string(message.hash3);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordWrkChainBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.blockHash = reader.string();
          break;
        case 4:
          message.parentHash = reader.string();
          break;
        case 5:
          message.hash1 = reader.string();
          break;
        case 6:
          message.hash2 = reader.string();
          break;
        case 7:
          message.hash3 = reader.string();
          break;
        case 8:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordWrkChainBlock>): MsgRecordWrkChainBlock {
    const message = createBaseMsgRecordWrkChainBlock();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.parentHash = object.parentHash ?? "";
    message.hash1 = object.hash1 ?? "";
    message.hash2 = object.hash2 ?? "";
    message.hash3 = object.hash3 ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgRecordWrkChainBlockAmino): MsgRecordWrkChainBlock {
    const message = createBaseMsgRecordWrkChainBlock();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.parent_hash !== undefined && object.parent_hash !== null) {
      message.parentHash = object.parent_hash;
    }
    if (object.hash1 !== undefined && object.hash1 !== null) {
      message.hash1 = object.hash1;
    }
    if (object.hash2 !== undefined && object.hash2 !== null) {
      message.hash2 = object.hash2;
    }
    if (object.hash3 !== undefined && object.hash3 !== null) {
      message.hash3 = object.hash3;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgRecordWrkChainBlock): MsgRecordWrkChainBlockAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.block_hash = message.blockHash ?? "";
    obj.parent_hash = message.parentHash ?? "";
    obj.hash1 = message.hash1 === "" ? undefined : message.hash1;
    obj.hash2 = message.hash2 === "" ? undefined : message.hash2;
    obj.hash3 = message.hash3 === "" ? undefined : message.hash3;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRecordWrkChainBlockAminoMsg): MsgRecordWrkChainBlock {
    return MsgRecordWrkChainBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordWrkChainBlockProtoMsg): MsgRecordWrkChainBlock {
    return MsgRecordWrkChainBlock.decode(message.value);
  },
  toProto(message: MsgRecordWrkChainBlock): Uint8Array {
    return MsgRecordWrkChainBlock.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordWrkChainBlock): MsgRecordWrkChainBlockProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
      value: MsgRecordWrkChainBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecordWrkChainBlock.typeUrl, MsgRecordWrkChainBlock);
function createBaseMsgRecordWrkChainBlockResponse(): MsgRecordWrkChainBlockResponse {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0)
  };
}
export const MsgRecordWrkChainBlockResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse",
  is(o: any): o is MsgRecordWrkChainBlockResponse {
    return o && (o.$typeUrl === MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is MsgRecordWrkChainBlockResponseSDKType {
    return o && (o.$typeUrl === MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is MsgRecordWrkChainBlockResponseAmino {
    return o && (o.$typeUrl === MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
  },
  encode(message: MsgRecordWrkChainBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordWrkChainBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecordWrkChainBlockResponse>): MsgRecordWrkChainBlockResponse {
    const message = createBaseMsgRecordWrkChainBlockResponse();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRecordWrkChainBlockResponseAmino): MsgRecordWrkChainBlockResponse {
    const message = createBaseMsgRecordWrkChainBlockResponse();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: MsgRecordWrkChainBlockResponse): MsgRecordWrkChainBlockResponseAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRecordWrkChainBlockResponseAminoMsg): MsgRecordWrkChainBlockResponse {
    return MsgRecordWrkChainBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecordWrkChainBlockResponseProtoMsg): MsgRecordWrkChainBlockResponse {
    return MsgRecordWrkChainBlockResponse.decode(message.value);
  },
  toProto(message: MsgRecordWrkChainBlockResponse): Uint8Array {
    return MsgRecordWrkChainBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecordWrkChainBlockResponse): MsgRecordWrkChainBlockResponseProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse",
      value: MsgRecordWrkChainBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecordWrkChainBlockResponse.typeUrl, MsgRecordWrkChainBlockResponse);
function createBaseMsgPurchaseWrkChainStateStorage(): MsgPurchaseWrkChainStateStorage {
  return {
    wrkchainId: BigInt(0),
    number: BigInt(0),
    owner: ""
  };
}
export const MsgPurchaseWrkChainStateStorage = {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
  is(o: any): o is MsgPurchaseWrkChainStateStorage {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgPurchaseWrkChainStateStorageSDKType {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgPurchaseWrkChainStateStorageAmino {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
  },
  encode(message: MsgPurchaseWrkChainStateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseWrkChainStateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
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
  fromPartial(object: Partial<MsgPurchaseWrkChainStateStorage>): MsgPurchaseWrkChainStateStorage {
    const message = createBaseMsgPurchaseWrkChainStateStorage();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgPurchaseWrkChainStateStorageAmino): MsgPurchaseWrkChainStateStorage {
    const message = createBaseMsgPurchaseWrkChainStateStorage();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgPurchaseWrkChainStateStorage): MsgPurchaseWrkChainStateStorageAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseWrkChainStateStorageAminoMsg): MsgPurchaseWrkChainStateStorage {
    return MsgPurchaseWrkChainStateStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseWrkChainStateStorageProtoMsg): MsgPurchaseWrkChainStateStorage {
    return MsgPurchaseWrkChainStateStorage.decode(message.value);
  },
  toProto(message: MsgPurchaseWrkChainStateStorage): Uint8Array {
    return MsgPurchaseWrkChainStateStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseWrkChainStateStorage): MsgPurchaseWrkChainStateStorageProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
      value: MsgPurchaseWrkChainStateStorage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPurchaseWrkChainStateStorage.typeUrl, MsgPurchaseWrkChainStateStorage);
function createBaseMsgPurchaseWrkChainStateStorageResponse(): MsgPurchaseWrkChainStateStorageResponse {
  return {
    wrkchainId: BigInt(0),
    numberPurchased: BigInt(0),
    numCanPurchase: BigInt(0)
  };
}
export const MsgPurchaseWrkChainStateStorageResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse",
  is(o: any): o is MsgPurchaseWrkChainStateStorageResponse {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.numberPurchased === "bigint" && typeof o.numCanPurchase === "bigint");
  },
  isSDK(o: any): o is MsgPurchaseWrkChainStateStorageResponseSDKType {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
  },
  isAmino(o: any): o is MsgPurchaseWrkChainStateStorageResponseAmino {
    return o && (o.$typeUrl === MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
  },
  encode(message: MsgPurchaseWrkChainStateStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.numberPurchased !== BigInt(0)) {
      writer.uint32(16).uint64(message.numberPurchased);
    }
    if (message.numCanPurchase !== BigInt(0)) {
      writer.uint32(24).uint64(message.numCanPurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
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
  fromPartial(object: Partial<MsgPurchaseWrkChainStateStorageResponse>): MsgPurchaseWrkChainStateStorageResponse {
    const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.numberPurchased = object.numberPurchased !== undefined && object.numberPurchased !== null ? BigInt(object.numberPurchased.toString()) : BigInt(0);
    message.numCanPurchase = object.numCanPurchase !== undefined && object.numCanPurchase !== null ? BigInt(object.numCanPurchase.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPurchaseWrkChainStateStorageResponseAmino): MsgPurchaseWrkChainStateStorageResponse {
    const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.number_purchased !== undefined && object.number_purchased !== null) {
      message.numberPurchased = BigInt(object.number_purchased);
    }
    if (object.num_can_purchase !== undefined && object.num_can_purchase !== null) {
      message.numCanPurchase = BigInt(object.num_can_purchase);
    }
    return message;
  },
  toAmino(message: MsgPurchaseWrkChainStateStorageResponse): MsgPurchaseWrkChainStateStorageResponseAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.number_purchased = message.numberPurchased !== BigInt(0) ? message.numberPurchased.toString() : undefined;
    obj.num_can_purchase = message.numCanPurchase !== BigInt(0) ? message.numCanPurchase.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseWrkChainStateStorageResponseAminoMsg): MsgPurchaseWrkChainStateStorageResponse {
    return MsgPurchaseWrkChainStateStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseWrkChainStateStorageResponseProtoMsg): MsgPurchaseWrkChainStateStorageResponse {
    return MsgPurchaseWrkChainStateStorageResponse.decode(message.value);
  },
  toProto(message: MsgPurchaseWrkChainStateStorageResponse): Uint8Array {
    return MsgPurchaseWrkChainStateStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseWrkChainStateStorageResponse): MsgPurchaseWrkChainStateStorageResponseProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse",
      value: MsgPurchaseWrkChainStateStorageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPurchaseWrkChainStateStorageResponse.typeUrl, MsgPurchaseWrkChainStateStorageResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
  aminoType: "mainchain/x/wrkchain/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
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
    message.authority = object.authority ?? "";
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
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "mainchain/x/wrkchain/MsgUpdateParams",
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
      typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
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
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);