import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, WrkChain, WrkChainAmino, WrkChainSDKType, WrkChainBlock, WrkChainBlockAmino, WrkChainBlockSDKType } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryWrkChainRequest is the request type for the Query/WrkChain RPC method */
export interface QueryWrkChainRequest {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchainId: bigint;
}
export interface QueryWrkChainRequestProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainRequest";
    value: Uint8Array;
}
/** QueryWrkChainRequest is the request type for the Query/WrkChain RPC method */
export interface QueryWrkChainRequestAmino {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchain_id?: string;
}
export interface QueryWrkChainRequestAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainRequest";
    value: QueryWrkChainRequestAmino;
}
/** QueryWrkChainRequest is the request type for the Query/WrkChain RPC method */
export interface QueryWrkChainRequestSDKType {
    wrkchain_id: bigint;
}
/** QueryWrkChainResponse is the response type for the Query/WrkChain RPC method */
export interface QueryWrkChainResponse {
    wrkchain?: WrkChain;
}
export interface QueryWrkChainResponseProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainResponse";
    value: Uint8Array;
}
/** QueryWrkChainResponse is the response type for the Query/WrkChain RPC method */
export interface QueryWrkChainResponseAmino {
    wrkchain?: WrkChainAmino;
}
export interface QueryWrkChainResponseAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainResponse";
    value: QueryWrkChainResponseAmino;
}
/** QueryWrkChainResponse is the response type for the Query/WrkChain RPC method */
export interface QueryWrkChainResponseSDKType {
    wrkchain?: WrkChainSDKType;
}
/** QueryWrkChainBlockRequest is the request type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockRequest {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchainId: bigint;
    /** height is the block number of the hash to query for */
    height: bigint;
}
export interface QueryWrkChainBlockRequestProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockRequest";
    value: Uint8Array;
}
/** QueryWrkChainBlockRequest is the request type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockRequestAmino {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchain_id?: string;
    /** height is the block number of the hash to query for */
    height?: string;
}
export interface QueryWrkChainBlockRequestAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainBlockRequest";
    value: QueryWrkChainBlockRequestAmino;
}
/** QueryWrkChainBlockRequest is the request type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockRequestSDKType {
    wrkchain_id: bigint;
    height: bigint;
}
/** QueryWrkChainBlockResponse is the response type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockResponse {
    block?: WrkChainBlock;
    wrkchainId: bigint;
    owner: string;
}
export interface QueryWrkChainBlockResponseProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockResponse";
    value: Uint8Array;
}
/** QueryWrkChainBlockResponse is the response type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockResponseAmino {
    block?: WrkChainBlockAmino;
    wrkchain_id?: string;
    owner?: string;
}
export interface QueryWrkChainBlockResponseAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainBlockResponse";
    value: QueryWrkChainBlockResponseAmino;
}
/** QueryWrkChainBlockResponse is the response type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockResponseSDKType {
    block?: WrkChainBlockSDKType;
    wrkchain_id: bigint;
    owner: string;
}
/** QueryWrkChainsFilteredRequest is the request type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredRequest {
    /** moniker is the moniker of the wrkchain to search for */
    moniker: string;
    /** owner is an address to search for */
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryWrkChainsFilteredRequestProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest";
    value: Uint8Array;
}
/** QueryWrkChainsFilteredRequest is the request type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredRequestAmino {
    /** moniker is the moniker of the wrkchain to search for */
    moniker?: string;
    /** owner is an address to search for */
    owner?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryWrkChainsFilteredRequestAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest";
    value: QueryWrkChainsFilteredRequestAmino;
}
/** QueryWrkChainsFilteredRequest is the request type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredRequestSDKType {
    moniker: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryWrkChainsFilteredResponse is the response type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredResponse {
    wrkchains: WrkChain[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryWrkChainsFilteredResponseProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse";
    value: Uint8Array;
}
/** QueryWrkChainsFilteredResponse is the response type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredResponseAmino {
    wrkchains?: WrkChainAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryWrkChainsFilteredResponseAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse";
    value: QueryWrkChainsFilteredResponseAmino;
}
/** QueryWrkChainsFilteredResponse is the response type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredResponseSDKType {
    wrkchains: WrkChainSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryWrkChainStorageRequest is the request type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageRequest {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchainId: bigint;
}
export interface QueryWrkChainStorageRequestProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageRequest";
    value: Uint8Array;
}
/** QueryWrkChainStorageRequest is the request type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageRequestAmino {
    /** wrkchain_id is the id of the wrkchain to query for */
    wrkchain_id?: string;
}
export interface QueryWrkChainStorageRequestAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainStorageRequest";
    value: QueryWrkChainStorageRequestAmino;
}
/** QueryWrkChainStorageRequest is the request type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageRequestSDKType {
    wrkchain_id: bigint;
}
/** QueryWrkChainStorageResponse is the response type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageResponse {
    wrkchainId: bigint;
    owner: string;
    /** current_limit is the current in-state storage limit for this wrkchain */
    currentLimit: bigint;
    /** current_used is the number of in-state slots currently used */
    currentUsed: bigint;
    /** max is the maximum possible slots a wrkchain can have, as defined by the wrkchain module params */
    max: bigint;
    /** max_purchasable is the maximum number a wrkchain can purchase without exceeding max */
    maxPurchasable: bigint;
}
export interface QueryWrkChainStorageResponseProtoMsg {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageResponse";
    value: Uint8Array;
}
/** QueryWrkChainStorageResponse is the response type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageResponseAmino {
    wrkchain_id?: string;
    owner?: string;
    /** current_limit is the current in-state storage limit for this wrkchain */
    current_limit?: string;
    /** current_used is the number of in-state slots currently used */
    current_used?: string;
    /** max is the maximum possible slots a wrkchain can have, as defined by the wrkchain module params */
    max?: string;
    /** max_purchasable is the maximum number a wrkchain can purchase without exceeding max */
    max_purchasable?: string;
}
export interface QueryWrkChainStorageResponseAminoMsg {
    type: "/mainchain.wrkchain.v1.QueryWrkChainStorageResponse";
    value: QueryWrkChainStorageResponseAmino;
}
/** QueryWrkChainStorageResponse is the response type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageResponseSDKType {
    wrkchain_id: bigint;
    owner: string;
    current_limit: bigint;
    current_used: bigint;
    max: bigint;
    max_purchasable: bigint;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryWrkChainRequest: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainRequest;
    isSDK(o: any): o is QueryWrkChainRequestSDKType;
    isAmino(o: any): o is QueryWrkChainRequestAmino;
    encode(message: QueryWrkChainRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainRequest;
    fromPartial(object: Partial<QueryWrkChainRequest>): QueryWrkChainRequest;
    fromAmino(object: QueryWrkChainRequestAmino): QueryWrkChainRequest;
    toAmino(message: QueryWrkChainRequest): QueryWrkChainRequestAmino;
    fromAminoMsg(object: QueryWrkChainRequestAminoMsg): QueryWrkChainRequest;
    fromProtoMsg(message: QueryWrkChainRequestProtoMsg): QueryWrkChainRequest;
    toProto(message: QueryWrkChainRequest): Uint8Array;
    toProtoMsg(message: QueryWrkChainRequest): QueryWrkChainRequestProtoMsg;
};
export declare const QueryWrkChainResponse: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainResponse;
    isSDK(o: any): o is QueryWrkChainResponseSDKType;
    isAmino(o: any): o is QueryWrkChainResponseAmino;
    encode(message: QueryWrkChainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainResponse;
    fromPartial(object: Partial<QueryWrkChainResponse>): QueryWrkChainResponse;
    fromAmino(object: QueryWrkChainResponseAmino): QueryWrkChainResponse;
    toAmino(message: QueryWrkChainResponse): QueryWrkChainResponseAmino;
    fromAminoMsg(object: QueryWrkChainResponseAminoMsg): QueryWrkChainResponse;
    fromProtoMsg(message: QueryWrkChainResponseProtoMsg): QueryWrkChainResponse;
    toProto(message: QueryWrkChainResponse): Uint8Array;
    toProtoMsg(message: QueryWrkChainResponse): QueryWrkChainResponseProtoMsg;
};
export declare const QueryWrkChainBlockRequest: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainBlockRequest;
    isSDK(o: any): o is QueryWrkChainBlockRequestSDKType;
    isAmino(o: any): o is QueryWrkChainBlockRequestAmino;
    encode(message: QueryWrkChainBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockRequest;
    fromPartial(object: Partial<QueryWrkChainBlockRequest>): QueryWrkChainBlockRequest;
    fromAmino(object: QueryWrkChainBlockRequestAmino): QueryWrkChainBlockRequest;
    toAmino(message: QueryWrkChainBlockRequest): QueryWrkChainBlockRequestAmino;
    fromAminoMsg(object: QueryWrkChainBlockRequestAminoMsg): QueryWrkChainBlockRequest;
    fromProtoMsg(message: QueryWrkChainBlockRequestProtoMsg): QueryWrkChainBlockRequest;
    toProto(message: QueryWrkChainBlockRequest): Uint8Array;
    toProtoMsg(message: QueryWrkChainBlockRequest): QueryWrkChainBlockRequestProtoMsg;
};
export declare const QueryWrkChainBlockResponse: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainBlockResponse;
    isSDK(o: any): o is QueryWrkChainBlockResponseSDKType;
    isAmino(o: any): o is QueryWrkChainBlockResponseAmino;
    encode(message: QueryWrkChainBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockResponse;
    fromPartial(object: Partial<QueryWrkChainBlockResponse>): QueryWrkChainBlockResponse;
    fromAmino(object: QueryWrkChainBlockResponseAmino): QueryWrkChainBlockResponse;
    toAmino(message: QueryWrkChainBlockResponse): QueryWrkChainBlockResponseAmino;
    fromAminoMsg(object: QueryWrkChainBlockResponseAminoMsg): QueryWrkChainBlockResponse;
    fromProtoMsg(message: QueryWrkChainBlockResponseProtoMsg): QueryWrkChainBlockResponse;
    toProto(message: QueryWrkChainBlockResponse): Uint8Array;
    toProtoMsg(message: QueryWrkChainBlockResponse): QueryWrkChainBlockResponseProtoMsg;
};
export declare const QueryWrkChainsFilteredRequest: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainsFilteredRequest;
    isSDK(o: any): o is QueryWrkChainsFilteredRequestSDKType;
    isAmino(o: any): o is QueryWrkChainsFilteredRequestAmino;
    encode(message: QueryWrkChainsFilteredRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredRequest;
    fromPartial(object: Partial<QueryWrkChainsFilteredRequest>): QueryWrkChainsFilteredRequest;
    fromAmino(object: QueryWrkChainsFilteredRequestAmino): QueryWrkChainsFilteredRequest;
    toAmino(message: QueryWrkChainsFilteredRequest): QueryWrkChainsFilteredRequestAmino;
    fromAminoMsg(object: QueryWrkChainsFilteredRequestAminoMsg): QueryWrkChainsFilteredRequest;
    fromProtoMsg(message: QueryWrkChainsFilteredRequestProtoMsg): QueryWrkChainsFilteredRequest;
    toProto(message: QueryWrkChainsFilteredRequest): Uint8Array;
    toProtoMsg(message: QueryWrkChainsFilteredRequest): QueryWrkChainsFilteredRequestProtoMsg;
};
export declare const QueryWrkChainsFilteredResponse: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainsFilteredResponse;
    isSDK(o: any): o is QueryWrkChainsFilteredResponseSDKType;
    isAmino(o: any): o is QueryWrkChainsFilteredResponseAmino;
    encode(message: QueryWrkChainsFilteredResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredResponse;
    fromPartial(object: Partial<QueryWrkChainsFilteredResponse>): QueryWrkChainsFilteredResponse;
    fromAmino(object: QueryWrkChainsFilteredResponseAmino): QueryWrkChainsFilteredResponse;
    toAmino(message: QueryWrkChainsFilteredResponse): QueryWrkChainsFilteredResponseAmino;
    fromAminoMsg(object: QueryWrkChainsFilteredResponseAminoMsg): QueryWrkChainsFilteredResponse;
    fromProtoMsg(message: QueryWrkChainsFilteredResponseProtoMsg): QueryWrkChainsFilteredResponse;
    toProto(message: QueryWrkChainsFilteredResponse): Uint8Array;
    toProtoMsg(message: QueryWrkChainsFilteredResponse): QueryWrkChainsFilteredResponseProtoMsg;
};
export declare const QueryWrkChainStorageRequest: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainStorageRequest;
    isSDK(o: any): o is QueryWrkChainStorageRequestSDKType;
    isAmino(o: any): o is QueryWrkChainStorageRequestAmino;
    encode(message: QueryWrkChainStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageRequest;
    fromPartial(object: Partial<QueryWrkChainStorageRequest>): QueryWrkChainStorageRequest;
    fromAmino(object: QueryWrkChainStorageRequestAmino): QueryWrkChainStorageRequest;
    toAmino(message: QueryWrkChainStorageRequest): QueryWrkChainStorageRequestAmino;
    fromAminoMsg(object: QueryWrkChainStorageRequestAminoMsg): QueryWrkChainStorageRequest;
    fromProtoMsg(message: QueryWrkChainStorageRequestProtoMsg): QueryWrkChainStorageRequest;
    toProto(message: QueryWrkChainStorageRequest): Uint8Array;
    toProtoMsg(message: QueryWrkChainStorageRequest): QueryWrkChainStorageRequestProtoMsg;
};
export declare const QueryWrkChainStorageResponse: {
    typeUrl: string;
    is(o: any): o is QueryWrkChainStorageResponse;
    isSDK(o: any): o is QueryWrkChainStorageResponseSDKType;
    isAmino(o: any): o is QueryWrkChainStorageResponseAmino;
    encode(message: QueryWrkChainStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageResponse;
    fromPartial(object: Partial<QueryWrkChainStorageResponse>): QueryWrkChainStorageResponse;
    fromAmino(object: QueryWrkChainStorageResponseAmino): QueryWrkChainStorageResponse;
    toAmino(message: QueryWrkChainStorageResponse): QueryWrkChainStorageResponseAmino;
    fromAminoMsg(object: QueryWrkChainStorageResponseAminoMsg): QueryWrkChainStorageResponse;
    fromProtoMsg(message: QueryWrkChainStorageResponseProtoMsg): QueryWrkChainStorageResponse;
    toProto(message: QueryWrkChainStorageResponse): Uint8Array;
    toProtoMsg(message: QueryWrkChainStorageResponse): QueryWrkChainStorageResponseProtoMsg;
};
