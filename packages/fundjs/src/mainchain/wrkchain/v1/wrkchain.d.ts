import { BinaryReader, BinaryWriter } from "../../../binary";
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChain {
    /** wrkchain_id is the id of the wrkchain */
    wrkchainId: bigint;
    /** moniker is the readable id of the wrkchain */
    moniker: string;
    /** name is the human friendly name of the wrkchain */
    name: string;
    /** genesis is an optional hash of the wrkchain's genesis block */
    genesis: string;
    /** type is the wrkchain type, e.g. geth, cosmos etc. */
    type: string;
    /** lastblock is the current highest recorded height for the wrkchain */
    lastblock: bigint;
    /** num_blocks is the current number of block hashes stored in state for the wrkchain */
    numBlocks: bigint;
    /** lowest_height is the lowest recorded height currently held in state for the wrkchain */
    lowestHeight: bigint;
    /** reg_time is the unix epoch of the wrkchain's registration time */
    regTime: bigint;
    /** owner is the owner address of the wrkchain */
    owner: string;
}
export interface WrkChainProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.WrkChain";
    value: Uint8Array;
}
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChainAmino {
    /** wrkchain_id is the id of the wrkchain */
    wrkchain_id?: string;
    /** moniker is the readable id of the wrkchain */
    moniker?: string;
    /** name is the human friendly name of the wrkchain */
    name?: string;
    /** genesis is an optional hash of the wrkchain's genesis block */
    genesis?: string;
    /** type is the wrkchain type, e.g. geth, cosmos etc. */
    type?: string;
    /** lastblock is the current highest recorded height for the wrkchain */
    lastblock?: string;
    /** num_blocks is the current number of block hashes stored in state for the wrkchain */
    num_blocks?: string;
    /** lowest_height is the lowest recorded height currently held in state for the wrkchain */
    lowest_height?: string;
    /** reg_time is the unix epoch of the wrkchain's registration time */
    reg_time?: string;
    /** owner is the owner address of the wrkchain */
    owner?: string;
}
export interface WrkChainAminoMsg {
    type: "/mainchain.wrkchain.v1.WrkChain";
    value: WrkChainAmino;
}
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChainSDKType {
    wrkchain_id: bigint;
    moniker: string;
    name: string;
    genesis: string;
    type: string;
    lastblock: bigint;
    num_blocks: bigint;
    lowest_height: bigint;
    reg_time: bigint;
    owner: string;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimit {
    /** wrkchain_id is the id of the wrkchain */
    wrkchainId: bigint;
    /** in_state_limit is the current maximum number of blocks that will be held in state for the wrkchain */
    inStateLimit: bigint;
}
export interface WrkChainStorageLimitProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit";
    value: Uint8Array;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimitAmino {
    /** wrkchain_id is the id of the wrkchain */
    wrkchain_id?: string;
    /** in_state_limit is the current maximum number of blocks that will be held in state for the wrkchain */
    in_state_limit?: string;
}
export interface WrkChainStorageLimitAminoMsg {
    type: "/mainchain.wrkchain.v1.WrkChainStorageLimit";
    value: WrkChainStorageLimitAmino;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimitSDKType {
    wrkchain_id: bigint;
    in_state_limit: bigint;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlock {
    /** height is the block number/height of the stored wrkchain block hash */
    height: bigint;
    /** blockhash is the block hash of the stored wrkchain block */
    blockhash: string;
    /** parenthash is the optional hash of the parent block of the stored wrkchain block hash */
    parenthash: string;
    /** hash1 is an optional hash of any type of the stored wrkchain block hash */
    hash1: string;
    /** hash2 is an optional hash of any type of the stored wrkchain block hash */
    hash2: string;
    /** hash3 is an optional hash of any type of the stored wrkchain block hash */
    hash3: string;
    /** sub_time is the unix epoch of the wkrchain hash submission */
    subTime: bigint;
}
export interface WrkChainBlockProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock";
    value: Uint8Array;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlockAmino {
    /** height is the block number/height of the stored wrkchain block hash */
    height?: string;
    /** blockhash is the block hash of the stored wrkchain block */
    blockhash?: string;
    /** parenthash is the optional hash of the parent block of the stored wrkchain block hash */
    parenthash?: string;
    /** hash1 is an optional hash of any type of the stored wrkchain block hash */
    hash1?: string;
    /** hash2 is an optional hash of any type of the stored wrkchain block hash */
    hash2?: string;
    /** hash3 is an optional hash of any type of the stored wrkchain block hash */
    hash3?: string;
    /** sub_time is the unix epoch of the wkrchain hash submission */
    sub_time?: string;
}
export interface WrkChainBlockAminoMsg {
    type: "/mainchain.wrkchain.v1.WrkChainBlock";
    value: WrkChainBlockAmino;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlockSDKType {
    height: bigint;
    blockhash: string;
    parenthash: string;
    hash1: string;
    hash2: string;
    hash3: string;
    sub_time: bigint;
}
/** Params defines the parameters for the wrkchain module. */
export interface Params {
    /** fee_register is the cost to register a wkrchain */
    feeRegister: bigint;
    /** fee_record is the cost to record a single wkrchain hash */
    feeRecord: bigint;
    /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
    feePurchaseStorage: bigint;
    /** denom is the expected denomination to pay for fees, e.g. nund */
    denom: string;
    /** default_storage_limit is the default in-state storage limit for all new wkrchains */
    defaultStorageLimit: bigint;
    /** max_storage_limit is the maximum in-state storage slots any one wkrchain can have */
    maxStorageLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the wrkchain module. */
export interface ParamsAmino {
    /** fee_register is the cost to register a wkrchain */
    fee_register?: string;
    /** fee_record is the cost to record a single wkrchain hash */
    fee_record?: string;
    /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
    fee_purchase_storage?: string;
    /** denom is the expected denomination to pay for fees, e.g. nund */
    denom?: string;
    /** default_storage_limit is the default in-state storage limit for all new wkrchains */
    default_storage_limit?: string;
    /** max_storage_limit is the maximum in-state storage slots any one wkrchain can have */
    max_storage_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/mainchain.wrkchain.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the wrkchain module. */
export interface ParamsSDKType {
    fee_register: bigint;
    fee_record: bigint;
    fee_purchase_storage: bigint;
    denom: string;
    default_storage_limit: bigint;
    max_storage_limit: bigint;
}
export declare const WrkChain: {
    typeUrl: string;
    is(o: any): o is WrkChain;
    isSDK(o: any): o is WrkChainSDKType;
    isAmino(o: any): o is WrkChainAmino;
    encode(message: WrkChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WrkChain;
    fromPartial(object: Partial<WrkChain>): WrkChain;
    fromAmino(object: WrkChainAmino): WrkChain;
    toAmino(message: WrkChain): WrkChainAmino;
    fromAminoMsg(object: WrkChainAminoMsg): WrkChain;
    fromProtoMsg(message: WrkChainProtoMsg): WrkChain;
    toProto(message: WrkChain): Uint8Array;
    toProtoMsg(message: WrkChain): WrkChainProtoMsg;
};
export declare const WrkChainStorageLimit: {
    typeUrl: string;
    is(o: any): o is WrkChainStorageLimit;
    isSDK(o: any): o is WrkChainStorageLimitSDKType;
    isAmino(o: any): o is WrkChainStorageLimitAmino;
    encode(message: WrkChainStorageLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WrkChainStorageLimit;
    fromPartial(object: Partial<WrkChainStorageLimit>): WrkChainStorageLimit;
    fromAmino(object: WrkChainStorageLimitAmino): WrkChainStorageLimit;
    toAmino(message: WrkChainStorageLimit): WrkChainStorageLimitAmino;
    fromAminoMsg(object: WrkChainStorageLimitAminoMsg): WrkChainStorageLimit;
    fromProtoMsg(message: WrkChainStorageLimitProtoMsg): WrkChainStorageLimit;
    toProto(message: WrkChainStorageLimit): Uint8Array;
    toProtoMsg(message: WrkChainStorageLimit): WrkChainStorageLimitProtoMsg;
};
export declare const WrkChainBlock: {
    typeUrl: string;
    is(o: any): o is WrkChainBlock;
    isSDK(o: any): o is WrkChainBlockSDKType;
    isAmino(o: any): o is WrkChainBlockAmino;
    encode(message: WrkChainBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlock;
    fromPartial(object: Partial<WrkChainBlock>): WrkChainBlock;
    fromAmino(object: WrkChainBlockAmino): WrkChainBlock;
    toAmino(message: WrkChainBlock): WrkChainBlockAmino;
    fromAminoMsg(object: WrkChainBlockAminoMsg): WrkChainBlock;
    fromProtoMsg(message: WrkChainBlockProtoMsg): WrkChainBlock;
    toProto(message: WrkChainBlock): Uint8Array;
    toProtoMsg(message: WrkChainBlock): WrkChainBlockProtoMsg;
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
