import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export declare const StreamExport: {
    typeUrl: string;
    is(o: any): o is StreamExport;
    isSDK(o: any): o is StreamExportSDKType;
    isAmino(o: any): o is StreamExportAmino;
    encode(message: StreamExport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StreamExport;
    fromPartial(object: Partial<StreamExport>): StreamExport;
    fromAmino(object: StreamExportAmino): StreamExport;
    toAmino(message: StreamExport): StreamExportAmino;
    fromAminoMsg(object: StreamExportAminoMsg): StreamExport;
    fromProtoMsg(message: StreamExportProtoMsg): StreamExport;
    toProto(message: StreamExport): Uint8Array;
    toProtoMsg(message: StreamExport): StreamExportProtoMsg;
};
