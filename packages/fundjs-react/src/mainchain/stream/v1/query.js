"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllStreamsForSenderResponse = exports.QueryAllStreamsForSenderRequest = exports.QueryStreamReceiverSenderCurrentFlowResponse = exports.QueryStreamReceiverSenderCurrentFlowRequest = exports.QueryStreamByReceiverSenderResponse = exports.QueryStreamByReceiverSenderRequest = exports.QueryAllStreamsForReceiverResponse = exports.QueryAllStreamsForReceiverRequest = exports.QueryStreamsResponse = exports.QueryStreamsRequest = exports.QueryCalculateFlowRateResponse = exports.QueryCalculateFlowRateRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.StreamResult = void 0;
//@ts-nocheck
const stream_1 = require("./stream");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const helpers_1 = require("../../../helpers");
function createBaseStreamResult() {
    return {
        receiver: "",
        sender: "",
        stream: undefined
    };
}
exports.StreamResult = {
    typeUrl: "/mainchain.stream.v1.StreamResult",
    is(o) {
        return o && (o.$typeUrl === exports.StreamResult.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StreamResult.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StreamResult.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.stream !== undefined) {
            stream_1.Stream.encode(message.stream, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamResult();
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
                    message.stream = stream_1.Stream.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamResult();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.stream = object.stream !== undefined && object.stream !== null ? stream_1.Stream.fromPartial(object.stream) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStreamResult();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = stream_1.Stream.fromAmino(object.stream);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.stream = message.stream ? stream_1.Stream.toAmino(message.stream) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StreamResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.StreamResult.decode(message.value);
    },
    toProto(message) {
        return exports.StreamResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.StreamResult",
            value: exports.StreamResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StreamResult.typeUrl, exports.StreamResult);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/mainchain.stream.v1.QueryParamsRequest",
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
            typeUrl: "/mainchain.stream.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/mainchain.stream.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/mainchain.stream.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryCalculateFlowRateRequest() {
    return {
        coin: "",
        period: 0,
        duration: BigInt(0)
    };
}
exports.QueryCalculateFlowRateRequest = {
    typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === "string" && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === "string" && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === "string" && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.coin !== "") {
            writer.uint32(10).string(message.coin);
        }
        if (message.period !== 0) {
            writer.uint32(16).int32(message.period);
        }
        if (message.duration !== BigInt(0)) {
            writer.uint32(24).uint64(message.duration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalculateFlowRateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = reader.string();
                    break;
                case 2:
                    message.period = reader.int32();
                    break;
                case 3:
                    message.duration = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalculateFlowRateRequest();
        message.coin = object.coin ?? "";
        message.period = object.period ?? 0;
        message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalculateFlowRateRequest();
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = object.coin;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = BigInt(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.coin = message.coin === "" ? undefined : message.coin;
        obj.period = message.period === 0 ? undefined : message.period;
        obj.duration = message.duration !== BigInt(0) ? message.duration.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalculateFlowRateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCalculateFlowRateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalculateFlowRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateRequest",
            value: exports.QueryCalculateFlowRateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalculateFlowRateRequest.typeUrl, exports.QueryCalculateFlowRateRequest);
function createBaseQueryCalculateFlowRateResponse() {
    return {
        coin: coin_1.Coin.fromPartial({}),
        period: 0,
        duration: BigInt(0),
        seconds: BigInt(0),
        flowRate: BigInt(0)
    };
}
exports.QueryCalculateFlowRateResponse = {
    typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateResponse.typeUrl || coin_1.Coin.is(o.coin) && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint" && typeof o.seconds === "bigint" && typeof o.flowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateResponse.typeUrl || coin_1.Coin.isSDK(o.coin) && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint" && typeof o.seconds === "bigint" && typeof o.flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCalculateFlowRateResponse.typeUrl || coin_1.Coin.isAmino(o.coin) && (0, helpers_1.isSet)(o.period) && typeof o.duration === "bigint" && typeof o.seconds === "bigint" && typeof o.flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== 0) {
            writer.uint32(16).int32(message.period);
        }
        if (message.duration !== BigInt(0)) {
            writer.uint32(24).uint64(message.duration);
        }
        if (message.seconds !== BigInt(0)) {
            writer.uint32(32).uint64(message.seconds);
        }
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(40).int64(message.flowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalculateFlowRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = reader.int32();
                    break;
                case 3:
                    message.duration = reader.uint64();
                    break;
                case 4:
                    message.seconds = reader.uint64();
                    break;
                case 5:
                    message.flowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalculateFlowRateResponse();
        message.coin = object.coin !== undefined && object.coin !== null ? coin_1.Coin.fromPartial(object.coin) : undefined;
        message.period = object.period ?? 0;
        message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
        message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalculateFlowRateResponse();
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = object.period;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = BigInt(object.duration);
        }
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = BigInt(object.seconds);
        }
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        obj.period = message.period === 0 ? undefined : message.period;
        obj.duration = message.duration !== BigInt(0) ? message.duration.toString() : undefined;
        obj.seconds = message.seconds !== BigInt(0) ? message.seconds.toString() : undefined;
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalculateFlowRateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCalculateFlowRateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalculateFlowRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateResponse",
            value: exports.QueryCalculateFlowRateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalculateFlowRateResponse.typeUrl, exports.QueryCalculateFlowRateResponse);
function createBaseQueryStreamsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryStreamsRequest = {
    typeUrl: "/mainchain.stream.v1.QueryStreamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryStreamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryStreamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryStreamsRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryStreamsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamsRequest",
            value: exports.QueryStreamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamsRequest.typeUrl, exports.QueryStreamsRequest);
function createBaseQueryStreamsResponse() {
    return {
        streams: [],
        pagination: undefined
    };
}
exports.QueryStreamsResponse = {
    typeUrl: "/mainchain.stream.v1.QueryStreamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.is(o.streams[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isSDK(o.streams[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isAmino(o.streams[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.streams) {
            exports.StreamResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streams.push(exports.StreamResult.decode(reader, reader.uint32()));
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
        const message = createBaseQueryStreamsResponse();
        message.streams = object.streams?.map(e => exports.StreamResult.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamsResponse();
        message.streams = object.streams?.map(e => exports.StreamResult.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.streams) {
            obj.streams = message.streams.map(e => e ? exports.StreamResult.toAmino(e) : undefined);
        }
        else {
            obj.streams = message.streams;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamsResponse",
            value: exports.QueryStreamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamsResponse.typeUrl, exports.QueryStreamsResponse);
function createBaseQueryAllStreamsForReceiverRequest() {
    return {
        receiverAddr: "",
        pagination: undefined
    };
}
exports.QueryAllStreamsForReceiverRequest = {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiverAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiver_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiver_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiverAddr !== "") {
            writer.uint32(10).string(message.receiverAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStreamsForReceiverRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiverAddr = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryAllStreamsForReceiverRequest();
        message.receiverAddr = object.receiverAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllStreamsForReceiverRequest();
        if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
            message.receiverAddr = object.receiver_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver_addr = message.receiverAddr === "" ? undefined : message.receiverAddr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllStreamsForReceiverRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllStreamsForReceiverRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllStreamsForReceiverRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverRequest",
            value: exports.QueryAllStreamsForReceiverRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllStreamsForReceiverRequest.typeUrl, exports.QueryAllStreamsForReceiverRequest);
function createBaseQueryAllStreamsForReceiverResponse() {
    return {
        receiverAddr: "",
        streams: [],
        pagination: undefined
    };
}
exports.QueryAllStreamsForReceiverResponse = {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiverAddr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.is(o.streams[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiver_addr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isSDK(o.streams[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiver_addr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isAmino(o.streams[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiverAddr !== "") {
            writer.uint32(10).string(message.receiverAddr);
        }
        for (const v of message.streams) {
            exports.StreamResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStreamsForReceiverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiverAddr = reader.string();
                    break;
                case 2:
                    message.streams.push(exports.StreamResult.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = createBaseQueryAllStreamsForReceiverResponse();
        message.receiverAddr = object.receiverAddr ?? "";
        message.streams = object.streams?.map(e => exports.StreamResult.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllStreamsForReceiverResponse();
        if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
            message.receiverAddr = object.receiver_addr;
        }
        message.streams = object.streams?.map(e => exports.StreamResult.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver_addr = message.receiverAddr === "" ? undefined : message.receiverAddr;
        if (message.streams) {
            obj.streams = message.streams.map(e => e ? exports.StreamResult.toAmino(e) : undefined);
        }
        else {
            obj.streams = message.streams;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllStreamsForReceiverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllStreamsForReceiverResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllStreamsForReceiverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverResponse",
            value: exports.QueryAllStreamsForReceiverResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllStreamsForReceiverResponse.typeUrl, exports.QueryAllStreamsForReceiverResponse);
function createBaseQueryStreamByReceiverSenderRequest() {
    return {
        receiverAddr: "",
        senderAddr: ""
    };
}
exports.QueryStreamByReceiverSenderRequest = {
    typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiverAddr === "string" && typeof o.senderAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiver_addr === "string" && typeof o.sender_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiver_addr === "string" && typeof o.sender_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiverAddr !== "") {
            writer.uint32(10).string(message.receiverAddr);
        }
        if (message.senderAddr !== "") {
            writer.uint32(18).string(message.senderAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamByReceiverSenderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiverAddr = reader.string();
                    break;
                case 2:
                    message.senderAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamByReceiverSenderRequest();
        message.receiverAddr = object.receiverAddr ?? "";
        message.senderAddr = object.senderAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamByReceiverSenderRequest();
        if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
            message.receiverAddr = object.receiver_addr;
        }
        if (object.sender_addr !== undefined && object.sender_addr !== null) {
            message.senderAddr = object.sender_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver_addr = message.receiverAddr === "" ? undefined : message.receiverAddr;
        obj.sender_addr = message.senderAddr === "" ? undefined : message.senderAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamByReceiverSenderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamByReceiverSenderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamByReceiverSenderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderRequest",
            value: exports.QueryStreamByReceiverSenderRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamByReceiverSenderRequest.typeUrl, exports.QueryStreamByReceiverSenderRequest);
function createBaseQueryStreamByReceiverSenderResponse() {
    return {
        stream: exports.StreamResult.fromPartial({})
    };
}
exports.QueryStreamByReceiverSenderResponse = {
    typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderResponse.typeUrl || exports.StreamResult.is(o.stream));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderResponse.typeUrl || exports.StreamResult.isSDK(o.stream));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStreamByReceiverSenderResponse.typeUrl || exports.StreamResult.isAmino(o.stream));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stream !== undefined) {
            exports.StreamResult.encode(message.stream, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamByReceiverSenderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stream = exports.StreamResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamByReceiverSenderResponse();
        message.stream = object.stream !== undefined && object.stream !== null ? exports.StreamResult.fromPartial(object.stream) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamByReceiverSenderResponse();
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = exports.StreamResult.fromAmino(object.stream);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream = message.stream ? exports.StreamResult.toAmino(message.stream) : exports.StreamResult.toAmino(exports.StreamResult.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamByReceiverSenderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamByReceiverSenderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamByReceiverSenderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderResponse",
            value: exports.QueryStreamByReceiverSenderResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamByReceiverSenderResponse.typeUrl, exports.QueryStreamByReceiverSenderResponse);
function createBaseQueryStreamReceiverSenderCurrentFlowRequest() {
    return {
        receiverAddr: "",
        senderAddr: ""
    };
}
exports.QueryStreamReceiverSenderCurrentFlowRequest = {
    typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiverAddr === "string" && typeof o.senderAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiver_addr === "string" && typeof o.sender_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiver_addr === "string" && typeof o.sender_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiverAddr !== "") {
            writer.uint32(10).string(message.receiverAddr);
        }
        if (message.senderAddr !== "") {
            writer.uint32(18).string(message.senderAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiverAddr = reader.string();
                    break;
                case 2:
                    message.senderAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
        message.receiverAddr = object.receiverAddr ?? "";
        message.senderAddr = object.senderAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
        if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
            message.receiverAddr = object.receiver_addr;
        }
        if (object.sender_addr !== undefined && object.sender_addr !== null) {
            message.senderAddr = object.sender_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver_addr = message.receiverAddr === "" ? undefined : message.receiverAddr;
        obj.sender_addr = message.senderAddr === "" ? undefined : message.senderAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamReceiverSenderCurrentFlowRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamReceiverSenderCurrentFlowRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamReceiverSenderCurrentFlowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest",
            value: exports.QueryStreamReceiverSenderCurrentFlowRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamReceiverSenderCurrentFlowRequest.typeUrl, exports.QueryStreamReceiverSenderCurrentFlowRequest);
function createBaseQueryStreamReceiverSenderCurrentFlowResponse() {
    return {
        configuredFlowRate: BigInt(0),
        currentFlowRate: BigInt(0)
    };
}
exports.QueryStreamReceiverSenderCurrentFlowResponse = {
    typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configuredFlowRate === "bigint" && typeof o.currentFlowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configured_flow_rate === "bigint" && typeof o.current_flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configured_flow_rate === "bigint" && typeof o.current_flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.configuredFlowRate !== BigInt(0)) {
            writer.uint32(8).int64(message.configuredFlowRate);
        }
        if (message.currentFlowRate !== BigInt(0)) {
            writer.uint32(16).int64(message.currentFlowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configuredFlowRate = reader.int64();
                    break;
                case 2:
                    message.currentFlowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
        message.configuredFlowRate = object.configuredFlowRate !== undefined && object.configuredFlowRate !== null ? BigInt(object.configuredFlowRate.toString()) : BigInt(0);
        message.currentFlowRate = object.currentFlowRate !== undefined && object.currentFlowRate !== null ? BigInt(object.currentFlowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
        if (object.configured_flow_rate !== undefined && object.configured_flow_rate !== null) {
            message.configuredFlowRate = BigInt(object.configured_flow_rate);
        }
        if (object.current_flow_rate !== undefined && object.current_flow_rate !== null) {
            message.currentFlowRate = BigInt(object.current_flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.configured_flow_rate = message.configuredFlowRate !== BigInt(0) ? message.configuredFlowRate.toString() : undefined;
        obj.current_flow_rate = message.currentFlowRate !== BigInt(0) ? message.currentFlowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStreamReceiverSenderCurrentFlowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStreamReceiverSenderCurrentFlowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStreamReceiverSenderCurrentFlowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse",
            value: exports.QueryStreamReceiverSenderCurrentFlowResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStreamReceiverSenderCurrentFlowResponse.typeUrl, exports.QueryStreamReceiverSenderCurrentFlowResponse);
function createBaseQueryAllStreamsForSenderRequest() {
    return {
        senderAddr: "",
        pagination: undefined
    };
}
exports.QueryAllStreamsForSenderRequest = {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderRequest.typeUrl || typeof o.senderAddr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderRequest.typeUrl || typeof o.sender_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderRequest.typeUrl || typeof o.sender_addr === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.senderAddr !== "") {
            writer.uint32(10).string(message.senderAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStreamsForSenderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddr = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryAllStreamsForSenderRequest();
        message.senderAddr = object.senderAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllStreamsForSenderRequest();
        if (object.sender_addr !== undefined && object.sender_addr !== null) {
            message.senderAddr = object.sender_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender_addr = message.senderAddr === "" ? undefined : message.senderAddr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllStreamsForSenderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllStreamsForSenderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllStreamsForSenderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderRequest",
            value: exports.QueryAllStreamsForSenderRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllStreamsForSenderRequest.typeUrl, exports.QueryAllStreamsForSenderRequest);
function createBaseQueryAllStreamsForSenderResponse() {
    return {
        senderAddr: "",
        streams: [],
        pagination: undefined
    };
}
exports.QueryAllStreamsForSenderResponse = {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderResponse.typeUrl || typeof o.senderAddr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.is(o.streams[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderResponse.typeUrl || typeof o.sender_addr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isSDK(o.streams[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAllStreamsForSenderResponse.typeUrl || typeof o.sender_addr === "string" && Array.isArray(o.streams) && (!o.streams.length || exports.StreamResult.isAmino(o.streams[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.senderAddr !== "") {
            writer.uint32(10).string(message.senderAddr);
        }
        for (const v of message.streams) {
            exports.StreamResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStreamsForSenderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddr = reader.string();
                    break;
                case 2:
                    message.streams.push(exports.StreamResult.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = createBaseQueryAllStreamsForSenderResponse();
        message.senderAddr = object.senderAddr ?? "";
        message.streams = object.streams?.map(e => exports.StreamResult.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllStreamsForSenderResponse();
        if (object.sender_addr !== undefined && object.sender_addr !== null) {
            message.senderAddr = object.sender_addr;
        }
        message.streams = object.streams?.map(e => exports.StreamResult.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender_addr = message.senderAddr === "" ? undefined : message.senderAddr;
        if (message.streams) {
            obj.streams = message.streams.map(e => e ? exports.StreamResult.toAmino(e) : undefined);
        }
        else {
            obj.streams = message.streams;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllStreamsForSenderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllStreamsForSenderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllStreamsForSenderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderResponse",
            value: exports.QueryAllStreamsForSenderResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllStreamsForSenderResponse.typeUrl, exports.QueryAllStreamsForSenderResponse);
