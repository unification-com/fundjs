import { Params, ParamsAmino, ParamsSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export interface MsgUpdateParamsResponse {
}
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
export interface MsgUpdateParamsResponseAmino {
}
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
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterWrkChain: {
    typeUrl: string;
    is(o: any): o is MsgRegisterWrkChain;
    isSDK(o: any): o is MsgRegisterWrkChainSDKType;
    isAmino(o: any): o is MsgRegisterWrkChainAmino;
    encode(message: MsgRegisterWrkChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChain;
    fromPartial(object: Partial<MsgRegisterWrkChain>): MsgRegisterWrkChain;
    fromAmino(object: MsgRegisterWrkChainAmino): MsgRegisterWrkChain;
    toAmino(message: MsgRegisterWrkChain): MsgRegisterWrkChainAmino;
    fromAminoMsg(object: MsgRegisterWrkChainAminoMsg): MsgRegisterWrkChain;
    fromProtoMsg(message: MsgRegisterWrkChainProtoMsg): MsgRegisterWrkChain;
    toProto(message: MsgRegisterWrkChain): Uint8Array;
    toProtoMsg(message: MsgRegisterWrkChain): MsgRegisterWrkChainProtoMsg;
};
export declare const MsgRegisterWrkChainResponse: {
    typeUrl: string;
    is(o: any): o is MsgRegisterWrkChainResponse;
    isSDK(o: any): o is MsgRegisterWrkChainResponseSDKType;
    isAmino(o: any): o is MsgRegisterWrkChainResponseAmino;
    encode(message: MsgRegisterWrkChainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChainResponse;
    fromPartial(object: Partial<MsgRegisterWrkChainResponse>): MsgRegisterWrkChainResponse;
    fromAmino(object: MsgRegisterWrkChainResponseAmino): MsgRegisterWrkChainResponse;
    toAmino(message: MsgRegisterWrkChainResponse): MsgRegisterWrkChainResponseAmino;
    fromAminoMsg(object: MsgRegisterWrkChainResponseAminoMsg): MsgRegisterWrkChainResponse;
    fromProtoMsg(message: MsgRegisterWrkChainResponseProtoMsg): MsgRegisterWrkChainResponse;
    toProto(message: MsgRegisterWrkChainResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterWrkChainResponse): MsgRegisterWrkChainResponseProtoMsg;
};
export declare const MsgRecordWrkChainBlock: {
    typeUrl: string;
    is(o: any): o is MsgRecordWrkChainBlock;
    isSDK(o: any): o is MsgRecordWrkChainBlockSDKType;
    isAmino(o: any): o is MsgRecordWrkChainBlockAmino;
    encode(message: MsgRecordWrkChainBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlock;
    fromPartial(object: Partial<MsgRecordWrkChainBlock>): MsgRecordWrkChainBlock;
    fromAmino(object: MsgRecordWrkChainBlockAmino): MsgRecordWrkChainBlock;
    toAmino(message: MsgRecordWrkChainBlock): MsgRecordWrkChainBlockAmino;
    fromAminoMsg(object: MsgRecordWrkChainBlockAminoMsg): MsgRecordWrkChainBlock;
    fromProtoMsg(message: MsgRecordWrkChainBlockProtoMsg): MsgRecordWrkChainBlock;
    toProto(message: MsgRecordWrkChainBlock): Uint8Array;
    toProtoMsg(message: MsgRecordWrkChainBlock): MsgRecordWrkChainBlockProtoMsg;
};
export declare const MsgRecordWrkChainBlockResponse: {
    typeUrl: string;
    is(o: any): o is MsgRecordWrkChainBlockResponse;
    isSDK(o: any): o is MsgRecordWrkChainBlockResponseSDKType;
    isAmino(o: any): o is MsgRecordWrkChainBlockResponseAmino;
    encode(message: MsgRecordWrkChainBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlockResponse;
    fromPartial(object: Partial<MsgRecordWrkChainBlockResponse>): MsgRecordWrkChainBlockResponse;
    fromAmino(object: MsgRecordWrkChainBlockResponseAmino): MsgRecordWrkChainBlockResponse;
    toAmino(message: MsgRecordWrkChainBlockResponse): MsgRecordWrkChainBlockResponseAmino;
    fromAminoMsg(object: MsgRecordWrkChainBlockResponseAminoMsg): MsgRecordWrkChainBlockResponse;
    fromProtoMsg(message: MsgRecordWrkChainBlockResponseProtoMsg): MsgRecordWrkChainBlockResponse;
    toProto(message: MsgRecordWrkChainBlockResponse): Uint8Array;
    toProtoMsg(message: MsgRecordWrkChainBlockResponse): MsgRecordWrkChainBlockResponseProtoMsg;
};
export declare const MsgPurchaseWrkChainStateStorage: {
    typeUrl: string;
    is(o: any): o is MsgPurchaseWrkChainStateStorage;
    isSDK(o: any): o is MsgPurchaseWrkChainStateStorageSDKType;
    isAmino(o: any): o is MsgPurchaseWrkChainStateStorageAmino;
    encode(message: MsgPurchaseWrkChainStateStorage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorage;
    fromPartial(object: Partial<MsgPurchaseWrkChainStateStorage>): MsgPurchaseWrkChainStateStorage;
    fromAmino(object: MsgPurchaseWrkChainStateStorageAmino): MsgPurchaseWrkChainStateStorage;
    toAmino(message: MsgPurchaseWrkChainStateStorage): MsgPurchaseWrkChainStateStorageAmino;
    fromAminoMsg(object: MsgPurchaseWrkChainStateStorageAminoMsg): MsgPurchaseWrkChainStateStorage;
    fromProtoMsg(message: MsgPurchaseWrkChainStateStorageProtoMsg): MsgPurchaseWrkChainStateStorage;
    toProto(message: MsgPurchaseWrkChainStateStorage): Uint8Array;
    toProtoMsg(message: MsgPurchaseWrkChainStateStorage): MsgPurchaseWrkChainStateStorageProtoMsg;
};
export declare const MsgPurchaseWrkChainStateStorageResponse: {
    typeUrl: string;
    is(o: any): o is MsgPurchaseWrkChainStateStorageResponse;
    isSDK(o: any): o is MsgPurchaseWrkChainStateStorageResponseSDKType;
    isAmino(o: any): o is MsgPurchaseWrkChainStateStorageResponseAmino;
    encode(message: MsgPurchaseWrkChainStateStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorageResponse;
    fromPartial(object: Partial<MsgPurchaseWrkChainStateStorageResponse>): MsgPurchaseWrkChainStateStorageResponse;
    fromAmino(object: MsgPurchaseWrkChainStateStorageResponseAmino): MsgPurchaseWrkChainStateStorageResponse;
    toAmino(message: MsgPurchaseWrkChainStateStorageResponse): MsgPurchaseWrkChainStateStorageResponseAmino;
    fromAminoMsg(object: MsgPurchaseWrkChainStateStorageResponseAminoMsg): MsgPurchaseWrkChainStateStorageResponse;
    fromProtoMsg(message: MsgPurchaseWrkChainStateStorageResponseProtoMsg): MsgPurchaseWrkChainStateStorageResponse;
    toProto(message: MsgPurchaseWrkChainStateStorageResponse): Uint8Array;
    toProtoMsg(message: MsgPurchaseWrkChainStateStorageResponse): MsgPurchaseWrkChainStateStorageResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
