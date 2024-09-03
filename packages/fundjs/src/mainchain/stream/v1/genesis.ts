//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the stream module's genesis state. */
export interface GenesisState {
  params: Params;
  streams: StreamExport[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/mainchain.stream.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the stream module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  streams?: StreamExportAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/mainchain.stream.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the stream module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  streams: StreamExportSDKType[];
}
/** StreamExport holds genesis export data for a stream */
export interface StreamExport {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet making the update */
  sender: string;
  /** stream is the stream data */
  stream: Stream;
}
export interface StreamExportProtoMsg {
  typeUrl: "/mainchain.stream.v1.StreamExport";
  value: Uint8Array;
}
/** StreamExport holds genesis export data for a stream */
export interface StreamExportAmino {
  /** receiver is the wallet that will receive stream payments */
  receiver?: string;
  /** sender is the wallet making the update */
  sender?: string;
  /** stream is the stream data */
  stream?: StreamAmino;
}
export interface StreamExportAminoMsg {
  type: "/mainchain.stream.v1.StreamExport";
  value: StreamExportAmino;
}
/** StreamExport holds genesis export data for a stream */
export interface StreamExportSDKType {
  receiver: string;
  sender: string;
  stream: StreamSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    streams: []
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.stream.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.streams) && (!o.streams.length || StreamExport.is(o.streams[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.streams) && (!o.streams.length || StreamExport.isSDK(o.streams[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.streams) && (!o.streams.length || StreamExport.isAmino(o.streams[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streams) {
      StreamExport.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.streams.push(StreamExport.decode(reader, reader.uint32()));
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
    message.streams = object.streams?.map(e => StreamExport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.streams = object.streams?.map(e => StreamExport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.streams) {
      obj.streams = message.streams.map(e => e ? StreamExport.toAmino(e) : undefined);
    } else {
      obj.streams = message.streams;
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
      typeUrl: "/mainchain.stream.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseStreamExport(): StreamExport {
  return {
    receiver: "",
    sender: "",
    stream: Stream.fromPartial({})
  };
}
export const StreamExport = {
  typeUrl: "/mainchain.stream.v1.StreamExport",
  is(o: any): o is StreamExport {
    return o && (o.$typeUrl === StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Stream.is(o.stream));
  },
  isSDK(o: any): o is StreamExportSDKType {
    return o && (o.$typeUrl === StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Stream.isSDK(o.stream));
  },
  isAmino(o: any): o is StreamExportAmino {
    return o && (o.$typeUrl === StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Stream.isAmino(o.stream));
  },
  encode(message: StreamExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.stream = Stream.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StreamExport>): StreamExport {
    const message = createBaseStreamExport();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    message.stream = object.stream !== undefined && object.stream !== null ? Stream.fromPartial(object.stream) : undefined;
    return message;
  },
  fromAmino(object: StreamExportAmino): StreamExport {
    const message = createBaseStreamExport();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = Stream.fromAmino(object.stream);
    }
    return message;
  },
  toAmino(message: StreamExport): StreamExportAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.stream = message.stream ? Stream.toAmino(message.stream) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamExportAminoMsg): StreamExport {
    return StreamExport.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamExportProtoMsg): StreamExport {
    return StreamExport.decode(message.value);
  },
  toProto(message: StreamExport): Uint8Array {
    return StreamExport.encode(message).finish();
  },
  toProtoMsg(message: StreamExport): StreamExportProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.StreamExport",
      value: StreamExport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StreamExport.typeUrl, StreamExport);