//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, WrkChain, WrkChainAmino, WrkChainSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingWrkchainId: bigint;
  registeredWrkchains: WrkChainExport[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  starting_wrkchain_id?: string;
  registered_wrkchains?: WrkChainExportAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/mainchain.wrkchain.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  starting_wrkchain_id: bigint;
  registered_wrkchains: WrkChainExportSDKType[];
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExport {
  he: bigint;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: bigint;
}
export interface WrkChainBlockGenesisExportProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport";
  value: Uint8Array;
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExportAmino {
  he?: string;
  bh?: string;
  ph?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  st?: string;
}
export interface WrkChainBlockGenesisExportAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport";
  value: WrkChainBlockGenesisExportAmino;
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExportSDKType {
  he: bigint;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: bigint;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExport {
  wrkchain: WrkChain;
  inStateLimit: bigint;
  blocks: WrkChainBlockGenesisExport[];
}
export interface WrkChainExportProtoMsg {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainExport";
  value: Uint8Array;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExportAmino {
  wrkchain?: WrkChainAmino;
  in_state_limit?: string;
  blocks?: WrkChainBlockGenesisExportAmino[];
}
export interface WrkChainExportAminoMsg {
  type: "/mainchain.wrkchain.v1.WrkChainExport";
  value: WrkChainExportAmino;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExportSDKType {
  wrkchain: WrkChainSDKType;
  in_state_limit: bigint;
  blocks: WrkChainBlockGenesisExportSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingWrkchainId: BigInt(0),
    registeredWrkchains: []
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.wrkchain.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.startingWrkchainId === "bigint" && Array.isArray(o.registeredWrkchains) && (!o.registeredWrkchains.length || WrkChainExport.is(o.registeredWrkchains[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && typeof o.starting_wrkchain_id === "bigint" && Array.isArray(o.registered_wrkchains) && (!o.registered_wrkchains.length || WrkChainExport.isSDK(o.registered_wrkchains[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.starting_wrkchain_id === "bigint" && Array.isArray(o.registered_wrkchains) && (!o.registered_wrkchains.length || WrkChainExport.isAmino(o.registered_wrkchains[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingWrkchainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingWrkchainId);
    }
    for (const v of message.registeredWrkchains) {
      WrkChainExport.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.startingWrkchainId = reader.uint64();
          break;
        case 3:
          message.registeredWrkchains.push(WrkChainExport.decode(reader, reader.uint32()));
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
    message.startingWrkchainId = object.startingWrkchainId !== undefined && object.startingWrkchainId !== null ? BigInt(object.startingWrkchainId.toString()) : BigInt(0);
    message.registeredWrkchains = object.registeredWrkchains?.map(e => WrkChainExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.starting_wrkchain_id !== undefined && object.starting_wrkchain_id !== null) {
      message.startingWrkchainId = BigInt(object.starting_wrkchain_id);
    }
    message.registeredWrkchains = object.registered_wrkchains?.map(e => WrkChainExport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.starting_wrkchain_id = message.startingWrkchainId !== BigInt(0) ? message.startingWrkchainId.toString() : undefined;
    if (message.registeredWrkchains) {
      obj.registered_wrkchains = message.registeredWrkchains.map(e => e ? WrkChainExport.toAmino(e) : undefined);
    } else {
      obj.registered_wrkchains = message.registeredWrkchains;
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
      typeUrl: "/mainchain.wrkchain.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseWrkChainBlockGenesisExport(): WrkChainBlockGenesisExport {
  return {
    he: BigInt(0),
    bh: "",
    ph: "",
    h1: "",
    h2: "",
    h3: "",
    st: BigInt(0)
  };
}
export const WrkChainBlockGenesisExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
  is(o: any): o is WrkChainBlockGenesisExport {
    return o && (o.$typeUrl === WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
  },
  isSDK(o: any): o is WrkChainBlockGenesisExportSDKType {
    return o && (o.$typeUrl === WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
  },
  isAmino(o: any): o is WrkChainBlockGenesisExportAmino {
    return o && (o.$typeUrl === WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
  },
  encode(message: WrkChainBlockGenesisExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.he !== BigInt(0)) {
      writer.uint32(8).uint64(message.he);
    }
    if (message.bh !== "") {
      writer.uint32(18).string(message.bh);
    }
    if (message.ph !== "") {
      writer.uint32(26).string(message.ph);
    }
    if (message.h1 !== "") {
      writer.uint32(34).string(message.h1);
    }
    if (message.h2 !== "") {
      writer.uint32(42).string(message.h2);
    }
    if (message.h3 !== "") {
      writer.uint32(50).string(message.h3);
    }
    if (message.st !== BigInt(0)) {
      writer.uint32(56).uint64(message.st);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlockGenesisExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainBlockGenesisExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.he = reader.uint64();
          break;
        case 2:
          message.bh = reader.string();
          break;
        case 3:
          message.ph = reader.string();
          break;
        case 4:
          message.h1 = reader.string();
          break;
        case 5:
          message.h2 = reader.string();
          break;
        case 6:
          message.h3 = reader.string();
          break;
        case 7:
          message.st = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainBlockGenesisExport>): WrkChainBlockGenesisExport {
    const message = createBaseWrkChainBlockGenesisExport();
    message.he = object.he !== undefined && object.he !== null ? BigInt(object.he.toString()) : BigInt(0);
    message.bh = object.bh ?? "";
    message.ph = object.ph ?? "";
    message.h1 = object.h1 ?? "";
    message.h2 = object.h2 ?? "";
    message.h3 = object.h3 ?? "";
    message.st = object.st !== undefined && object.st !== null ? BigInt(object.st.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WrkChainBlockGenesisExportAmino): WrkChainBlockGenesisExport {
    const message = createBaseWrkChainBlockGenesisExport();
    if (object.he !== undefined && object.he !== null) {
      message.he = BigInt(object.he);
    }
    if (object.bh !== undefined && object.bh !== null) {
      message.bh = object.bh;
    }
    if (object.ph !== undefined && object.ph !== null) {
      message.ph = object.ph;
    }
    if (object.h1 !== undefined && object.h1 !== null) {
      message.h1 = object.h1;
    }
    if (object.h2 !== undefined && object.h2 !== null) {
      message.h2 = object.h2;
    }
    if (object.h3 !== undefined && object.h3 !== null) {
      message.h3 = object.h3;
    }
    if (object.st !== undefined && object.st !== null) {
      message.st = BigInt(object.st);
    }
    return message;
  },
  toAmino(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportAmino {
    const obj: any = {};
    obj.he = message.he !== BigInt(0) ? message.he.toString() : undefined;
    obj.bh = message.bh === "" ? undefined : message.bh;
    obj.ph = message.ph === "" ? undefined : message.ph;
    obj.h1 = message.h1 === "" ? undefined : message.h1;
    obj.h2 = message.h2 === "" ? undefined : message.h2;
    obj.h3 = message.h3 === "" ? undefined : message.h3;
    obj.st = message.st !== BigInt(0) ? message.st.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WrkChainBlockGenesisExportAminoMsg): WrkChainBlockGenesisExport {
    return WrkChainBlockGenesisExport.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainBlockGenesisExportProtoMsg): WrkChainBlockGenesisExport {
    return WrkChainBlockGenesisExport.decode(message.value);
  },
  toProto(message: WrkChainBlockGenesisExport): Uint8Array {
    return WrkChainBlockGenesisExport.encode(message).finish();
  },
  toProtoMsg(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
      value: WrkChainBlockGenesisExport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WrkChainBlockGenesisExport.typeUrl, WrkChainBlockGenesisExport);
function createBaseWrkChainExport(): WrkChainExport {
  return {
    wrkchain: WrkChain.fromPartial({}),
    inStateLimit: BigInt(0),
    blocks: []
  };
}
export const WrkChainExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
  is(o: any): o is WrkChainExport {
    return o && (o.$typeUrl === WrkChainExport.typeUrl || WrkChain.is(o.wrkchain) && typeof o.inStateLimit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || WrkChainBlockGenesisExport.is(o.blocks[0])));
  },
  isSDK(o: any): o is WrkChainExportSDKType {
    return o && (o.$typeUrl === WrkChainExport.typeUrl || WrkChain.isSDK(o.wrkchain) && typeof o.in_state_limit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || WrkChainBlockGenesisExport.isSDK(o.blocks[0])));
  },
  isAmino(o: any): o is WrkChainExportAmino {
    return o && (o.$typeUrl === WrkChainExport.typeUrl || WrkChain.isAmino(o.wrkchain) && typeof o.in_state_limit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || WrkChainBlockGenesisExport.isAmino(o.blocks[0])));
  },
  encode(message: WrkChainExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchain !== undefined) {
      WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    for (const v of message.blocks) {
      WrkChainBlockGenesisExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchain = WrkChain.decode(reader, reader.uint32());
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        case 3:
          message.blocks.push(WrkChainBlockGenesisExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrkChainExport>): WrkChainExport {
    const message = createBaseWrkChainExport();
    message.wrkchain = object.wrkchain !== undefined && object.wrkchain !== null ? WrkChain.fromPartial(object.wrkchain) : undefined;
    message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
    message.blocks = object.blocks?.map(e => WrkChainBlockGenesisExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: WrkChainExportAmino): WrkChainExport {
    const message = createBaseWrkChainExport();
    if (object.wrkchain !== undefined && object.wrkchain !== null) {
      message.wrkchain = WrkChain.fromAmino(object.wrkchain);
    }
    if (object.in_state_limit !== undefined && object.in_state_limit !== null) {
      message.inStateLimit = BigInt(object.in_state_limit);
    }
    message.blocks = object.blocks?.map(e => WrkChainBlockGenesisExport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: WrkChainExport): WrkChainExportAmino {
    const obj: any = {};
    obj.wrkchain = message.wrkchain ? WrkChain.toAmino(message.wrkchain) : undefined;
    obj.in_state_limit = message.inStateLimit !== BigInt(0) ? message.inStateLimit.toString() : undefined;
    if (message.blocks) {
      obj.blocks = message.blocks.map(e => e ? WrkChainBlockGenesisExport.toAmino(e) : undefined);
    } else {
      obj.blocks = message.blocks;
    }
    return obj;
  },
  fromAminoMsg(object: WrkChainExportAminoMsg): WrkChainExport {
    return WrkChainExport.fromAmino(object.value);
  },
  fromProtoMsg(message: WrkChainExportProtoMsg): WrkChainExport {
    return WrkChainExport.decode(message.value);
  },
  toProto(message: WrkChainExport): Uint8Array {
    return WrkChainExport.encode(message).finish();
  },
  toProtoMsg(message: WrkChainExport): WrkChainExportProtoMsg {
    return {
      typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
      value: WrkChainExport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WrkChainExport.typeUrl, WrkChainExport);