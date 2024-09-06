"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWrkChainStorageResponse = exports.QueryWrkChainStorageRequest = exports.QueryWrkChainsFilteredResponse = exports.QueryWrkChainsFilteredRequest = exports.QueryWrkChainBlockResponse = exports.QueryWrkChainBlockRequest = exports.QueryWrkChainResponse = exports.QueryWrkChainRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const wrkchain_1 = require("./wrkchain");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/mainchain.wrkchain.v1.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: wrkchain_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/mainchain.wrkchain.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || wrkchain_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || wrkchain_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || wrkchain_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            wrkchain_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = wrkchain_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? wrkchain_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = wrkchain_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? wrkchain_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryWrkChainRequest() {
    return {
        wrkchainId: BigInt(0)
    };
}
exports.QueryWrkChainRequest = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainRequest.typeUrl || typeof o.wrkchainId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainRequest.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainRequest.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseQueryWrkChainRequest();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainRequest();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainRequest",
            value: exports.QueryWrkChainRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainRequest.typeUrl, exports.QueryWrkChainRequest);
function createBaseQueryWrkChainResponse() {
    return {
        wrkchain: undefined
    };
}
exports.QueryWrkChainResponse = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryWrkChainResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryWrkChainResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryWrkChainResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchain !== undefined) {
            wrkchain_1.WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWrkChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchain = wrkchain_1.WrkChain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWrkChainResponse();
        message.wrkchain = object.wrkchain !== undefined && object.wrkchain !== null ? wrkchain_1.WrkChain.fromPartial(object.wrkchain) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainResponse();
        if (object.wrkchain !== undefined && object.wrkchain !== null) {
            message.wrkchain = wrkchain_1.WrkChain.fromAmino(object.wrkchain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain = message.wrkchain ? wrkchain_1.WrkChain.toAmino(message.wrkchain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainResponse",
            value: exports.QueryWrkChainResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainResponse.typeUrl, exports.QueryWrkChainResponse);
function createBaseQueryWrkChainBlockRequest() {
    return {
        wrkchainId: BigInt(0),
        height: BigInt(0)
    };
}
exports.QueryWrkChainBlockRequest = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockRequest.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseQueryWrkChainBlockRequest();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainBlockRequest();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainBlockRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockRequest",
            value: exports.QueryWrkChainBlockRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainBlockRequest.typeUrl, exports.QueryWrkChainBlockRequest);
function createBaseQueryWrkChainBlockResponse() {
    return {
        block: undefined,
        wrkchainId: BigInt(0),
        owner: ""
    };
}
exports.QueryWrkChainBlockResponse = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            wrkchain_1.WrkChainBlock.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(16).uint64(message.wrkchainId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWrkChainBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = wrkchain_1.WrkChainBlock.decode(reader, reader.uint32());
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
    fromPartial(object) {
        const message = createBaseQueryWrkChainBlockResponse();
        message.block = object.block !== undefined && object.block !== null ? wrkchain_1.WrkChainBlock.fromPartial(object.block) : undefined;
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainBlockResponse();
        if (object.block !== undefined && object.block !== null) {
            message.block = wrkchain_1.WrkChainBlock.fromAmino(object.block);
        }
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? wrkchain_1.WrkChainBlock.toAmino(message.block) : undefined;
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainBlockResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockResponse",
            value: exports.QueryWrkChainBlockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainBlockResponse.typeUrl, exports.QueryWrkChainBlockResponse);
function createBaseQueryWrkChainsFilteredRequest() {
    return {
        moniker: "",
        owner: "",
        pagination: undefined
    };
}
exports.QueryWrkChainsFilteredRequest = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWrkChainsFilteredRequest();
        message.moniker = object.moniker ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainsFilteredRequest();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainsFilteredRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainsFilteredRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainsFilteredRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest",
            value: exports.QueryWrkChainsFilteredRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainsFilteredRequest.typeUrl, exports.QueryWrkChainsFilteredRequest);
function createBaseQueryWrkChainsFilteredResponse() {
    return {
        wrkchains: [],
        pagination: undefined
    };
}
exports.QueryWrkChainsFilteredResponse = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || wrkchain_1.WrkChain.is(o.wrkchains[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || wrkchain_1.WrkChain.isSDK(o.wrkchains[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainsFilteredResponse.typeUrl || Array.isArray(o.wrkchains) && (!o.wrkchains.length || wrkchain_1.WrkChain.isAmino(o.wrkchains[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.wrkchains) {
            wrkchain_1.WrkChain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWrkChainsFilteredResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchains.push(wrkchain_1.WrkChain.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWrkChainsFilteredResponse();
        message.wrkchains = object.wrkchains?.map(e => wrkchain_1.WrkChain.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainsFilteredResponse();
        message.wrkchains = object.wrkchains?.map(e => wrkchain_1.WrkChain.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.wrkchains) {
            obj.wrkchains = message.wrkchains.map(e => e ? wrkchain_1.WrkChain.toAmino(e) : undefined);
        }
        else {
            obj.wrkchains = message.wrkchains;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainsFilteredResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainsFilteredResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainsFilteredResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse",
            value: exports.QueryWrkChainsFilteredResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainsFilteredResponse.typeUrl, exports.QueryWrkChainsFilteredResponse);
function createBaseQueryWrkChainStorageRequest() {
    return {
        wrkchainId: BigInt(0)
    };
}
exports.QueryWrkChainStorageRequest = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchainId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageRequest.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseQueryWrkChainStorageRequest();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWrkChainStorageRequest();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainStorageRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageRequest",
            value: exports.QueryWrkChainStorageRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainStorageRequest.typeUrl, exports.QueryWrkChainStorageRequest);
function createBaseQueryWrkChainStorageResponse() {
    return {
        wrkchainId: BigInt(0),
        owner: "",
        currentLimit: BigInt(0),
        currentUsed: BigInt(0),
        max: BigInt(0),
        maxPurchasable: BigInt(0)
    };
}
exports.QueryWrkChainStorageResponse = {
    typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.owner === "string" && typeof o.currentLimit === "bigint" && typeof o.currentUsed === "bigint" && typeof o.max === "bigint" && typeof o.maxPurchasable === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.owner === "string" && typeof o.current_limit === "bigint" && typeof o.current_used === "bigint" && typeof o.max === "bigint" && typeof o.max_purchasable === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWrkChainStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.owner === "string" && typeof o.current_limit === "bigint" && typeof o.current_used === "bigint" && typeof o.max === "bigint" && typeof o.max_purchasable === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.owner !== "") {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseQueryWrkChainStorageResponse();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.currentLimit = object.currentLimit !== undefined && object.currentLimit !== null ? BigInt(object.currentLimit.toString()) : BigInt(0);
        message.currentUsed = object.currentUsed !== undefined && object.currentUsed !== null ? BigInt(object.currentUsed.toString()) : BigInt(0);
        message.max = object.max !== undefined && object.max !== null ? BigInt(object.max.toString()) : BigInt(0);
        message.maxPurchasable = object.maxPurchasable !== undefined && object.maxPurchasable !== null ? BigInt(object.maxPurchasable.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.current_limit = message.currentLimit !== BigInt(0) ? message.currentLimit.toString() : undefined;
        obj.current_used = message.currentUsed !== BigInt(0) ? message.currentUsed.toString() : undefined;
        obj.max = message.max !== BigInt(0) ? message.max.toString() : undefined;
        obj.max_purchasable = message.maxPurchasable !== BigInt(0) ? message.maxPurchasable.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWrkChainStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWrkChainStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWrkChainStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageResponse",
            value: exports.QueryWrkChainStorageResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWrkChainStorageResponse.typeUrl, exports.QueryWrkChainStorageResponse);
