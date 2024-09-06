import { Params, ParamsAmino, ParamsSDKType, WrkChain, WrkChainAmino, WrkChainSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export declare const WrkChainBlockGenesisExport: {
    typeUrl: string;
    is(o: any): o is WrkChainBlockGenesisExport;
    isSDK(o: any): o is WrkChainBlockGenesisExportSDKType;
    isAmino(o: any): o is WrkChainBlockGenesisExportAmino;
    encode(message: WrkChainBlockGenesisExport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlockGenesisExport;
    fromPartial(object: Partial<WrkChainBlockGenesisExport>): WrkChainBlockGenesisExport;
    fromAmino(object: WrkChainBlockGenesisExportAmino): WrkChainBlockGenesisExport;
    toAmino(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportAmino;
    fromAminoMsg(object: WrkChainBlockGenesisExportAminoMsg): WrkChainBlockGenesisExport;
    fromProtoMsg(message: WrkChainBlockGenesisExportProtoMsg): WrkChainBlockGenesisExport;
    toProto(message: WrkChainBlockGenesisExport): Uint8Array;
    toProtoMsg(message: WrkChainBlockGenesisExport): WrkChainBlockGenesisExportProtoMsg;
};
export declare const WrkChainExport: {
    typeUrl: string;
    is(o: any): o is WrkChainExport;
    isSDK(o: any): o is WrkChainExportSDKType;
    isAmino(o: any): o is WrkChainExportAmino;
    encode(message: WrkChainExport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WrkChainExport;
    fromPartial(object: Partial<WrkChainExport>): WrkChainExport;
    fromAmino(object: WrkChainExportAmino): WrkChainExport;
    toAmino(message: WrkChainExport): WrkChainExportAmino;
    fromAminoMsg(object: WrkChainExportAminoMsg): WrkChainExport;
    fromProtoMsg(message: WrkChainExportProtoMsg): WrkChainExport;
    toProto(message: WrkChainExport): Uint8Array;
    toProtoMsg(message: WrkChainExport): WrkChainExportProtoMsg;
};
