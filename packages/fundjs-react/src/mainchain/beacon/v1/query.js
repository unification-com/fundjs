"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBeaconStorageResponse = exports.QueryBeaconStorageRequest = exports.QueryBeaconsFilteredResponse = exports.QueryBeaconsFilteredRequest = exports.QueryBeaconTimestampResponse = exports.QueryBeaconTimestampRequest = exports.QueryBeaconResponse = exports.QueryBeaconRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const beacon_1 = require("./beacon");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/mainchain.beacon.v1.QueryParamsRequest",
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
            typeUrl: "/mainchain.beacon.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: beacon_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/mainchain.beacon.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || beacon_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || beacon_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || beacon_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            beacon_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = beacon_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? beacon_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = beacon_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? beacon_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/mainchain.beacon.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryBeaconRequest() {
    return {
        beaconId: BigInt(0)
    };
}
exports.QueryBeaconRequest = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconRequest.typeUrl || typeof o.beaconId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconRequest.typeUrl || typeof o.beacon_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconRequest.typeUrl || typeof o.beacon_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeaconRequest();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconRequest();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest",
            value: exports.QueryBeaconRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconRequest.typeUrl, exports.QueryBeaconRequest);
function createBaseQueryBeaconResponse() {
    return {
        beacon: undefined
    };
}
exports.QueryBeaconResponse = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryBeaconResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryBeaconResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryBeaconResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beacon !== undefined) {
            beacon_1.Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beacon = beacon_1.Beacon.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeaconResponse();
        message.beacon = object.beacon !== undefined && object.beacon !== null ? beacon_1.Beacon.fromPartial(object.beacon) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconResponse();
        if (object.beacon !== undefined && object.beacon !== null) {
            message.beacon = beacon_1.Beacon.fromAmino(object.beacon);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon = message.beacon ? beacon_1.Beacon.toAmino(message.beacon) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse",
            value: exports.QueryBeaconResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconResponse.typeUrl, exports.QueryBeaconResponse);
function createBaseQueryBeaconTimestampRequest() {
    return {
        beaconId: BigInt(0),
        timestampId: BigInt(0)
    };
}
exports.QueryBeaconTimestampRequest = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampRequest.typeUrl || typeof o.beaconId === "bigint" && typeof o.timestampId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampRequest.typeUrl || typeof o.beacon_id === "bigint" && typeof o.timestamp_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampRequest.typeUrl || typeof o.beacon_id === "bigint" && typeof o.timestamp_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        if (message.timestampId !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestampId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconTimestampRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                case 2:
                    message.timestampId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeaconTimestampRequest();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconTimestampRequest();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        if (object.timestamp_id !== undefined && object.timestamp_id !== null) {
            message.timestampId = BigInt(object.timestamp_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.timestamp_id = message.timestampId !== BigInt(0) ? message.timestampId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconTimestampRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconTimestampRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconTimestampRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest",
            value: exports.QueryBeaconTimestampRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconTimestampRequest.typeUrl, exports.QueryBeaconTimestampRequest);
function createBaseQueryBeaconTimestampResponse() {
    return {
        timestamp: undefined,
        beaconId: BigInt(0),
        owner: ""
    };
}
exports.QueryBeaconTimestampResponse = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampResponse.typeUrl || typeof o.beaconId === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconTimestampResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            beacon_1.BeaconTimestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
        }
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(16).uint64(message.beaconId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconTimestampResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = beacon_1.BeaconTimestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.beaconId = reader.uint64();
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
        const message = createBaseQueryBeaconTimestampResponse();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? beacon_1.BeaconTimestamp.fromPartial(object.timestamp) : undefined;
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconTimestampResponse();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = beacon_1.BeaconTimestamp.fromAmino(object.timestamp);
        }
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? beacon_1.BeaconTimestamp.toAmino(message.timestamp) : undefined;
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconTimestampResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconTimestampResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconTimestampResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse",
            value: exports.QueryBeaconTimestampResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconTimestampResponse.typeUrl, exports.QueryBeaconTimestampResponse);
function createBaseQueryBeaconsFilteredRequest() {
    return {
        moniker: "",
        owner: "",
        pagination: undefined
    };
}
exports.QueryBeaconsFilteredRequest = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredRequest.typeUrl || typeof o.moniker === "string" && typeof o.owner === "string");
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
        const message = createBaseQueryBeaconsFilteredRequest();
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
        const message = createBaseQueryBeaconsFilteredRequest();
        message.moniker = object.moniker ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconsFilteredRequest();
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
        return exports.QueryBeaconsFilteredRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconsFilteredRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconsFilteredRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest",
            value: exports.QueryBeaconsFilteredRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconsFilteredRequest.typeUrl, exports.QueryBeaconsFilteredRequest);
function createBaseQueryBeaconsFilteredResponse() {
    return {
        beacons: [],
        pagination: undefined
    };
}
exports.QueryBeaconsFilteredResponse = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredResponse.typeUrl || Array.isArray(o.beacons) && (!o.beacons.length || beacon_1.Beacon.is(o.beacons[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredResponse.typeUrl || Array.isArray(o.beacons) && (!o.beacons.length || beacon_1.Beacon.isSDK(o.beacons[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconsFilteredResponse.typeUrl || Array.isArray(o.beacons) && (!o.beacons.length || beacon_1.Beacon.isAmino(o.beacons[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.beacons) {
            beacon_1.Beacon.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconsFilteredResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beacons.push(beacon_1.Beacon.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBeaconsFilteredResponse();
        message.beacons = object.beacons?.map(e => beacon_1.Beacon.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconsFilteredResponse();
        message.beacons = object.beacons?.map(e => beacon_1.Beacon.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.beacons) {
            obj.beacons = message.beacons.map(e => e ? beacon_1.Beacon.toAmino(e) : undefined);
        }
        else {
            obj.beacons = message.beacons;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconsFilteredResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconsFilteredResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconsFilteredResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse",
            value: exports.QueryBeaconsFilteredResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconsFilteredResponse.typeUrl, exports.QueryBeaconsFilteredResponse);
function createBaseQueryBeaconStorageRequest() {
    return {
        beaconId: BigInt(0)
    };
}
exports.QueryBeaconStorageRequest = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageRequest.typeUrl || typeof o.beaconId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageRequest.typeUrl || typeof o.beacon_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageRequest.typeUrl || typeof o.beacon_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeaconStorageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeaconStorageRequest();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconStorageRequest();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconStorageRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest",
            value: exports.QueryBeaconStorageRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconStorageRequest.typeUrl, exports.QueryBeaconStorageRequest);
function createBaseQueryBeaconStorageResponse() {
    return {
        beaconId: BigInt(0),
        owner: "",
        currentLimit: BigInt(0),
        currentUsed: BigInt(0),
        max: BigInt(0),
        maxPurchasable: BigInt(0)
    };
}
exports.QueryBeaconStorageResponse = {
    typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageResponse.typeUrl || typeof o.beaconId === "bigint" && typeof o.owner === "string" && typeof o.currentLimit === "bigint" && typeof o.currentUsed === "bigint" && typeof o.max === "bigint" && typeof o.maxPurchasable === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.owner === "string" && typeof o.current_limit === "bigint" && typeof o.current_used === "bigint" && typeof o.max === "bigint" && typeof o.max_purchasable === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBeaconStorageResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.owner === "string" && typeof o.current_limit === "bigint" && typeof o.current_used === "bigint" && typeof o.max === "bigint" && typeof o.max_purchasable === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
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
        const message = createBaseQueryBeaconStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
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
        const message = createBaseQueryBeaconStorageResponse();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.currentLimit = object.currentLimit !== undefined && object.currentLimit !== null ? BigInt(object.currentLimit.toString()) : BigInt(0);
        message.currentUsed = object.currentUsed !== undefined && object.currentUsed !== null ? BigInt(object.currentUsed.toString()) : BigInt(0);
        message.max = object.max !== undefined && object.max !== null ? BigInt(object.max.toString()) : BigInt(0);
        message.maxPurchasable = object.maxPurchasable !== undefined && object.maxPurchasable !== null ? BigInt(object.maxPurchasable.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeaconStorageResponse();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
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
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.current_limit = message.currentLimit !== BigInt(0) ? message.currentLimit.toString() : undefined;
        obj.current_used = message.currentUsed !== BigInt(0) ? message.currentUsed.toString() : undefined;
        obj.max = message.max !== BigInt(0) ? message.max.toString() : undefined;
        obj.max_purchasable = message.maxPurchasable !== BigInt(0) ? message.maxPurchasable.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBeaconStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBeaconStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeaconStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse",
            value: exports.QueryBeaconStorageResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeaconStorageResponse.typeUrl, exports.QueryBeaconStorageResponse);
