//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../../../cosmos/base/query/v1beta1/pagination';
import { GlobalDecoderRegistry } from '../../../registry';
import { Params, ParamsAmino, ParamsSDKType, WrkChain, WrkChainAmino, WrkChainBlock, WrkChainBlockAmino, WrkChainBlockSDKType,WrkChainSDKType } from './wrkchain';
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/mainchain.wrkchain.v1.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/mainchain.wrkchain.v1.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryParamsResponse';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainRequest';
  value: Uint8Array;
}
/** QueryWrkChainRequest is the request type for the Query/WrkChain RPC method */
export interface QueryWrkChainRequestAmino {
  /** wrkchain_id is the id of the wrkchain to query for */
  wrkchain_id?: string;
}
export interface QueryWrkChainRequestAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryWrkChainRequest';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainResponse';
  value: Uint8Array;
}
/** QueryWrkChainResponse is the response type for the Query/WrkChain RPC method */
export interface QueryWrkChainResponseAmino {
  wrkchain?: WrkChainAmino;
}
export interface QueryWrkChainResponseAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryWrkChainResponse';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockRequest';
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
  type: '/mainchain.wrkchain.v1.QueryWrkChainBlockRequest';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockResponse';
  value: Uint8Array;
}
/** QueryWrkChainBlockResponse is the response type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockResponseAmino {
  block?: WrkChainBlockAmino;
  wrkchain_id?: string;
  owner?: string;
}
export interface QueryWrkChainBlockResponseAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryWrkChainBlockResponse';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest';
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
  type: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse';
  value: Uint8Array;
}
/** QueryWrkChainsFilteredResponse is the response type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredResponseAmino {
  wrkchains?: WrkChainAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryWrkChainsFilteredResponseAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageRequest';
  value: Uint8Array;
}
/** QueryWrkChainStorageRequest is the request type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageRequestAmino {
  /** wrkchain_id is the id of the wrkchain to query for */
  wrkchain_id?: string;
}
export interface QueryWrkChainStorageRequestAminoMsg {
  type: '/mainchain.wrkchain.v1.QueryWrkChainStorageRequest';
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
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageResponse';
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
  type: '/mainchain.wrkchain.v1.QueryWrkChainStorageResponse';
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/mainchain.wrkchain.v1.QueryParamsRequest',
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: '/mainchain.wrkchain.v1.QueryParamsResponse',
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryWrkChainRequest(): QueryWrkChainRequest {
  return {
    wrkchainId: BigInt(0)
  };
}
export const QueryWrkChainRequest = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainRequest',
  is(o: any): o is QueryWrkChainRequest {
    return o && (o.$typeUrl === QueryWrkChainRequest.typeUrl || typeof o.wrkchainId === 'bigint');
  },
  isSDK(o: any): o is QueryWrkChainRequestSDKType {
    return o && (o.$typeUrl === QueryWrkChainRequest.typeUrl || typeof o.wrkchain_id === 'bigint');
  },
  isAmino(o: any): o is QueryWrkChainRequestAmino {
    return o && (o.$typeUrl === QueryWrkChainRequest.typeUrl || typeof o.wrkchain_id === 'bigint');
  },
  encode(message: QueryWrkChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainRequest();
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
  fromPartial(object: Partial<QueryWrkChainRequest>): QueryWrkChainRequest {
    const message = createBaseQueryWrkChainRequest();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWrkChainRequestAmino): QueryWrkChainRequest {
    const message = createBaseQueryWrkChainRequest();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    return message;
  },
  toAmino(message: QueryWrkChainRequest): QueryWrkChainRequestAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainRequestAminoMsg): QueryWrkChainRequest {
    return QueryWrkChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainRequestProtoMsg): QueryWrkChainRequest {
    return QueryWrkChainRequest.decode(message.value);
  },
  toProto(message: QueryWrkChainRequest): Uint8Array {
    return QueryWrkChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainRequest): QueryWrkChainRequestProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainRequest',
      value: QueryWrkChainRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainRequest.typeUrl, QueryWrkChainRequest);
function createBaseQueryWrkChainResponse(): QueryWrkChainResponse {
  return {
    wrkchain: undefined
  };
}
export const QueryWrkChainResponse = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainResponse',
  is(o: any): o is QueryWrkChainResponse {
    return o && o.$typeUrl === QueryWrkChainResponse.typeUrl;
  },
  isSDK(o: any): o is QueryWrkChainResponseSDKType {
    return o && o.$typeUrl === QueryWrkChainResponse.typeUrl;
  },
  isAmino(o: any): o is QueryWrkChainResponseAmino {
    return o && o.$typeUrl === QueryWrkChainResponse.typeUrl;
  },
  encode(message: QueryWrkChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchain !== undefined) {
      WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.wrkchain = WrkChain.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWrkChainResponse>): QueryWrkChainResponse {
    const message = createBaseQueryWrkChainResponse();
    message.wrkchain = object.wrkchain !== undefined && object.wrkchain !== null ? WrkChain.fromPartial(object.wrkchain) : undefined;
    return message;
  },
  fromAmino(object: QueryWrkChainResponseAmino): QueryWrkChainResponse {
    const message = createBaseQueryWrkChainResponse();
    if (object.wrkchain !== undefined && object.wrkchain !== null) {
      message.wrkchain = WrkChain.fromAmino(object.wrkchain);
    }
    return message;
  },
  toAmino(message: QueryWrkChainResponse): QueryWrkChainResponseAmino {
    const obj: any = {};
    obj.wrkchain = message.wrkchain ? WrkChain.toAmino(message.wrkchain) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainResponseAminoMsg): QueryWrkChainResponse {
    return QueryWrkChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainResponseProtoMsg): QueryWrkChainResponse {
    return QueryWrkChainResponse.decode(message.value);
  },
  toProto(message: QueryWrkChainResponse): Uint8Array {
    return QueryWrkChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainResponse): QueryWrkChainResponseProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainResponse',
      value: QueryWrkChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainResponse.typeUrl, QueryWrkChainResponse);
function createBaseQueryWrkChainBlockRequest(): QueryWrkChainBlockRequest {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0)
  };
}
export const QueryWrkChainBlockRequest = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockRequest',
  is(o: any): o is QueryWrkChainBlockRequest {
    return o && (o.$typeUrl === QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchainId === 'bigint' && typeof o.height === 'bigint');
  },
  isSDK(o: any): o is QueryWrkChainBlockRequestSDKType {
    return o && (o.$typeUrl === QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.height === 'bigint');
  },
  isAmino(o: any): o is QueryWrkChainBlockRequestAmino {
    return o && (o.$typeUrl === QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.height === 'bigint');
  },
  encode(message: QueryWrkChainBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainBlockRequest();
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
  fromPartial(object: Partial<QueryWrkChainBlockRequest>): QueryWrkChainBlockRequest {
    const message = createBaseQueryWrkChainBlockRequest();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWrkChainBlockRequestAmino): QueryWrkChainBlockRequest {
    const message = createBaseQueryWrkChainBlockRequest();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryWrkChainBlockRequest): QueryWrkChainBlockRequestAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainBlockRequestAminoMsg): QueryWrkChainBlockRequest {
    return QueryWrkChainBlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainBlockRequestProtoMsg): QueryWrkChainBlockRequest {
    return QueryWrkChainBlockRequest.decode(message.value);
  },
  toProto(message: QueryWrkChainBlockRequest): Uint8Array {
    return QueryWrkChainBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainBlockRequest): QueryWrkChainBlockRequestProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockRequest',
      value: QueryWrkChainBlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainBlockRequest.typeUrl, QueryWrkChainBlockRequest);
function createBaseQueryWrkChainBlockResponse(): QueryWrkChainBlockResponse {
  return {
    block: undefined,
    wrkchainId: BigInt(0),
    owner: ''
  };
}
export const QueryWrkChainBlockResponse = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockResponse',
  is(o: any): o is QueryWrkChainBlockResponse {
    return o && (o.$typeUrl === QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchainId === 'bigint' && typeof o.owner === 'string');
  },
  isSDK(o: any): o is QueryWrkChainBlockResponseSDKType {
    return o && (o.$typeUrl === QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.owner === 'string');
  },
  isAmino(o: any): o is QueryWrkChainBlockResponseAmino {
    return o && (o.$typeUrl === QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.owner === 'string');
  },
  encode(message: QueryWrkChainBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      WrkChainBlock.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.wrkchainId);
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.block = WrkChainBlock.decode(reader, reader.uint32());
        break;
      case 2:
        message.wrkchainId = reader.uint64();
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
  fromPartial(object: Partial<QueryWrkChainBlockResponse>): QueryWrkChainBlockResponse {
    const message = createBaseQueryWrkChainBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? WrkChainBlock.fromPartial(object.block) : undefined;
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: QueryWrkChainBlockResponseAmino): QueryWrkChainBlockResponse {
    const message = createBaseQueryWrkChainBlockResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = WrkChainBlock.fromAmino(object.block);
    }
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryWrkChainBlockResponse): QueryWrkChainBlockResponseAmino {
    const obj: any = {};
    obj.block = message.block ? WrkChainBlock.toAmino(message.block) : undefined;
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainBlockResponseAminoMsg): QueryWrkChainBlockResponse {
    return QueryWrkChainBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainBlockResponseProtoMsg): QueryWrkChainBlockResponse {
    return QueryWrkChainBlockResponse.decode(message.value);
  },
  toProto(message: QueryWrkChainBlockResponse): Uint8Array {
    return QueryWrkChainBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainBlockResponse): QueryWrkChainBlockResponseProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainBlockResponse',
      value: QueryWrkChainBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainBlockResponse.typeUrl, QueryWrkChainBlockResponse);
function createBaseQueryWrkChainsFilteredRequest(): QueryWrkChainsFilteredRequest {
  return {
    moniker: '',
    owner: '',
    pagination: undefined
  };
}
export const QueryWrkChainsFilteredRequest = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest',
  is(o: any): o is QueryWrkChainsFilteredRequest {
    return o && (o.$typeUrl === QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === 'string' && typeof o.owner === 'string');
  },
  isSDK(o: any): o is QueryWrkChainsFilteredRequestSDKType {
    return o && (o.$typeUrl === QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === 'string' && typeof o.owner === 'string');
  },
  isAmino(o: any): o is QueryWrkChainsFilteredRequestAmino {
    return o && (o.$typeUrl === QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === 'string' && typeof o.owner === 'string');
  },
  encode(message: QueryWrkChainsFilteredRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== '') {
      writer.uint32(10).string(message.moniker);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainsFilteredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.moniker = reader.string();
        break;
      case 2:
        message.owner = reader.string();
        break;
      case 3:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWrkChainsFilteredRequest>): QueryWrkChainsFilteredRequest {
    const message = createBaseQueryWrkChainsFilteredRequest();
    message.moniker = object.moniker ?? '';
    message.owner = object.owner ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWrkChainsFilteredRequestAmino): QueryWrkChainsFilteredRequest {
    const message = createBaseQueryWrkChainsFilteredRequest();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWrkChainsFilteredRequest): QueryWrkChainsFilteredRequestAmino {
    const obj: any = {};
    obj.moniker = message.moniker === '' ? undefined : message.moniker;
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainsFilteredRequestAminoMsg): QueryWrkChainsFilteredRequest {
    return QueryWrkChainsFilteredRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainsFilteredRequestProtoMsg): QueryWrkChainsFilteredRequest {
    return QueryWrkChainsFilteredRequest.decode(message.value);
  },
  toProto(message: QueryWrkChainsFilteredRequest): Uint8Array {
    return QueryWrkChainsFilteredRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainsFilteredRequest): QueryWrkChainsFilteredRequestProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest',
      value: QueryWrkChainsFilteredRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainsFilteredRequest.typeUrl, QueryWrkChainsFilteredRequest);
function createBaseQueryWrkChainsFilteredResponse(): QueryWrkChainsFilteredResponse {
  return {
    wrkchains: [],
    pagination: undefined
  };
}
export const QueryWrkChainsFilteredResponse = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse',
  is(o: any): o is QueryWrkChainsFilteredResponse {
    return o && (o.$typeUrl === QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || WrkChain.is(o.wrkchains[0])));
  },
  isSDK(o: any): o is QueryWrkChainsFilteredResponseSDKType {
    return o && (o.$typeUrl === QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || WrkChain.isSDK(o.wrkchains[0])));
  },
  isAmino(o: any): o is QueryWrkChainsFilteredResponseAmino {
    return o && (o.$typeUrl === QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || WrkChain.isAmino(o.wrkchains[0])));
  },
  encode(message: QueryWrkChainsFilteredResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.wrkchains) {
      WrkChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainsFilteredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.wrkchains.push(WrkChain.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWrkChainsFilteredResponse>): QueryWrkChainsFilteredResponse {
    const message = createBaseQueryWrkChainsFilteredResponse();
    message.wrkchains = object.wrkchains?.map(e => WrkChain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWrkChainsFilteredResponseAmino): QueryWrkChainsFilteredResponse {
    const message = createBaseQueryWrkChainsFilteredResponse();
    message.wrkchains = object.wrkchains?.map(e => WrkChain.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWrkChainsFilteredResponse): QueryWrkChainsFilteredResponseAmino {
    const obj: any = {};
    if (message.wrkchains) {
      obj.wrkchains = message.wrkchains.map(e => e ? WrkChain.toAmino(e) : undefined);
    } else {
      obj.wrkchains = message.wrkchains;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainsFilteredResponseAminoMsg): QueryWrkChainsFilteredResponse {
    return QueryWrkChainsFilteredResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainsFilteredResponseProtoMsg): QueryWrkChainsFilteredResponse {
    return QueryWrkChainsFilteredResponse.decode(message.value);
  },
  toProto(message: QueryWrkChainsFilteredResponse): Uint8Array {
    return QueryWrkChainsFilteredResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainsFilteredResponse): QueryWrkChainsFilteredResponseProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse',
      value: QueryWrkChainsFilteredResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainsFilteredResponse.typeUrl, QueryWrkChainsFilteredResponse);
function createBaseQueryWrkChainStorageRequest(): QueryWrkChainStorageRequest {
  return {
    wrkchainId: BigInt(0)
  };
}
export const QueryWrkChainStorageRequest = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageRequest',
  is(o: any): o is QueryWrkChainStorageRequest {
    return o && (o.$typeUrl === QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchainId === 'bigint');
  },
  isSDK(o: any): o is QueryWrkChainStorageRequestSDKType {
    return o && (o.$typeUrl === QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchain_id === 'bigint');
  },
  isAmino(o: any): o is QueryWrkChainStorageRequestAmino {
    return o && (o.$typeUrl === QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchain_id === 'bigint');
  },
  encode(message: QueryWrkChainStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainStorageRequest();
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
  fromPartial(object: Partial<QueryWrkChainStorageRequest>): QueryWrkChainStorageRequest {
    const message = createBaseQueryWrkChainStorageRequest();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWrkChainStorageRequestAmino): QueryWrkChainStorageRequest {
    const message = createBaseQueryWrkChainStorageRequest();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    return message;
  },
  toAmino(message: QueryWrkChainStorageRequest): QueryWrkChainStorageRequestAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainStorageRequestAminoMsg): QueryWrkChainStorageRequest {
    return QueryWrkChainStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainStorageRequestProtoMsg): QueryWrkChainStorageRequest {
    return QueryWrkChainStorageRequest.decode(message.value);
  },
  toProto(message: QueryWrkChainStorageRequest): Uint8Array {
    return QueryWrkChainStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainStorageRequest): QueryWrkChainStorageRequestProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageRequest',
      value: QueryWrkChainStorageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainStorageRequest.typeUrl, QueryWrkChainStorageRequest);
function createBaseQueryWrkChainStorageResponse(): QueryWrkChainStorageResponse {
  return {
    wrkchainId: BigInt(0),
    owner: '',
    currentLimit: BigInt(0),
    currentUsed: BigInt(0),
    max: BigInt(0),
    maxPurchasable: BigInt(0)
  };
}
export const QueryWrkChainStorageResponse = {
  typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageResponse',
  is(o: any): o is QueryWrkChainStorageResponse {
    return o && (o.$typeUrl === QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchainId === 'bigint' && typeof o.owner === 'string' && typeof o.currentLimit === 'bigint' && typeof o.currentUsed === 'bigint' && typeof o.max === 'bigint' && typeof o.maxPurchasable === 'bigint');
  },
  isSDK(o: any): o is QueryWrkChainStorageResponseSDKType {
    return o && (o.$typeUrl === QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.owner === 'string' && typeof o.current_limit === 'bigint' && typeof o.current_used === 'bigint' && typeof o.max === 'bigint' && typeof o.max_purchasable === 'bigint');
  },
  isAmino(o: any): o is QueryWrkChainStorageResponseAmino {
    return o && (o.$typeUrl === QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchain_id === 'bigint' && typeof o.owner === 'string' && typeof o.current_limit === 'bigint' && typeof o.current_used === 'bigint' && typeof o.max === 'bigint' && typeof o.max_purchasable === 'bigint');
  },
  encode(message: QueryWrkChainStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    if (message.currentLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentLimit);
    }
    if (message.currentUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.currentUsed);
    }
    if (message.max !== BigInt(0)) {
      writer.uint32(40).uint64(message.max);
    }
    if (message.maxPurchasable !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxPurchasable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.wrkchainId = reader.uint64();
        break;
      case 2:
        message.owner = reader.string();
        break;
      case 3:
        message.currentLimit = reader.uint64();
        break;
      case 4:
        message.currentUsed = reader.uint64();
        break;
      case 5:
        message.max = reader.uint64();
        break;
      case 6:
        message.maxPurchasable = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWrkChainStorageResponse>): QueryWrkChainStorageResponse {
    const message = createBaseQueryWrkChainStorageResponse();
    message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
    message.owner = object.owner ?? '';
    message.currentLimit = object.currentLimit !== undefined && object.currentLimit !== null ? BigInt(object.currentLimit.toString()) : BigInt(0);
    message.currentUsed = object.currentUsed !== undefined && object.currentUsed !== null ? BigInt(object.currentUsed.toString()) : BigInt(0);
    message.max = object.max !== undefined && object.max !== null ? BigInt(object.max.toString()) : BigInt(0);
    message.maxPurchasable = object.maxPurchasable !== undefined && object.maxPurchasable !== null ? BigInt(object.maxPurchasable.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWrkChainStorageResponseAmino): QueryWrkChainStorageResponse {
    const message = createBaseQueryWrkChainStorageResponse();
    if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
      message.wrkchainId = BigInt(object.wrkchain_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.current_limit !== undefined && object.current_limit !== null) {
      message.currentLimit = BigInt(object.current_limit);
    }
    if (object.current_used !== undefined && object.current_used !== null) {
      message.currentUsed = BigInt(object.current_used);
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = BigInt(object.max);
    }
    if (object.max_purchasable !== undefined && object.max_purchasable !== null) {
      message.maxPurchasable = BigInt(object.max_purchasable);
    }
    return message;
  },
  toAmino(message: QueryWrkChainStorageResponse): QueryWrkChainStorageResponseAmino {
    const obj: any = {};
    obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.current_limit = message.currentLimit !== BigInt(0) ? message.currentLimit.toString() : undefined;
    obj.current_used = message.currentUsed !== BigInt(0) ? message.currentUsed.toString() : undefined;
    obj.max = message.max !== BigInt(0) ? message.max.toString() : undefined;
    obj.max_purchasable = message.maxPurchasable !== BigInt(0) ? message.maxPurchasable.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWrkChainStorageResponseAminoMsg): QueryWrkChainStorageResponse {
    return QueryWrkChainStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWrkChainStorageResponseProtoMsg): QueryWrkChainStorageResponse {
    return QueryWrkChainStorageResponse.decode(message.value);
  },
  toProto(message: QueryWrkChainStorageResponse): Uint8Array {
    return QueryWrkChainStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWrkChainStorageResponse): QueryWrkChainStorageResponseProtoMsg {
    return {
      typeUrl: '/mainchain.wrkchain.v1.QueryWrkChainStorageResponse',
      value: QueryWrkChainStorageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWrkChainStorageResponse.typeUrl, QueryWrkChainStorageResponse);