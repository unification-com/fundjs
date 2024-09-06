"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgPurchaseBeaconStateStorageResponse = exports.MsgPurchaseBeaconStateStorage = exports.MsgRecordBeaconTimestampResponse = exports.MsgRecordBeaconTimestamp = exports.MsgRegisterBeaconResponse = exports.MsgRegisterBeacon = void 0;
//@ts-nocheck
const beacon_1 = require("./beacon");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgRegisterBeacon() {
    return {
        moniker: "",
        name: "",
        owner: ""
    };
}
exports.MsgRegisterBeacon = {
    typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeacon.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeacon.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeacon.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterBeacon();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
        const message = createBaseMsgRegisterBeacon();
        message.moniker = object.moniker ?? "";
        message.name = object.name ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterBeacon();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.name = message.name === "" ? undefined : message.name;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterBeacon.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterBeacon.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterBeacon.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
            value: exports.MsgRegisterBeacon.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterBeacon.typeUrl, exports.MsgRegisterBeacon);
function createBaseMsgRegisterBeaconResponse() {
    return {
        beaconId: BigInt(0)
    };
}
exports.MsgRegisterBeaconResponse = {
    typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeaconResponse.typeUrl || typeof o.beaconId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeaconResponse.typeUrl || typeof o.beacon_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterBeaconResponse.typeUrl || typeof o.beacon_id === "bigint");
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
        const message = createBaseMsgRegisterBeaconResponse();
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
        const message = createBaseMsgRegisterBeaconResponse();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterBeaconResponse();
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
        return exports.MsgRegisterBeaconResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterBeaconResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterBeaconResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse",
            value: exports.MsgRegisterBeaconResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterBeaconResponse.typeUrl, exports.MsgRegisterBeaconResponse);
function createBaseMsgRecordBeaconTimestamp() {
    return {
        beaconId: BigInt(0),
        hash: "",
        submitTime: BigInt(0),
        owner: ""
    };
}
exports.MsgRecordBeaconTimestamp = {
    typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestamp.typeUrl || typeof o.beaconId === "bigint" && typeof o.hash === "string" && typeof o.submitTime === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestamp.typeUrl || typeof o.beacon_id === "bigint" && typeof o.hash === "string" && typeof o.submit_time === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestamp.typeUrl || typeof o.beacon_id === "bigint" && typeof o.hash === "string" && typeof o.submit_time === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        if (message.hash !== "") {
            writer.uint32(18).string(message.hash);
        }
        if (message.submitTime !== BigInt(0)) {
            writer.uint32(24).uint64(message.submitTime);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecordBeaconTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                case 2:
                    message.hash = reader.string();
                    break;
                case 3:
                    message.submitTime = reader.uint64();
                    break;
                case 4:
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
        const message = createBaseMsgRecordBeaconTimestamp();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.hash = object.hash ?? "";
        message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? BigInt(object.submitTime.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecordBeaconTimestamp();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = BigInt(object.submit_time);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.submit_time = message.submitTime !== BigInt(0) ? message.submitTime.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecordBeaconTimestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRecordBeaconTimestamp.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecordBeaconTimestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
            value: exports.MsgRecordBeaconTimestamp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecordBeaconTimestamp.typeUrl, exports.MsgRecordBeaconTimestamp);
function createBaseMsgRecordBeaconTimestampResponse() {
    return {
        beaconId: BigInt(0),
        timestampId: BigInt(0)
    };
}
exports.MsgRecordBeaconTimestampResponse = {
    typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beaconId === "bigint" && typeof o.timestampId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.timestamp_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecordBeaconTimestampResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.timestamp_id === "bigint");
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
        const message = createBaseMsgRecordBeaconTimestampResponse();
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
        const message = createBaseMsgRecordBeaconTimestampResponse();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.timestampId = object.timestampId !== undefined && object.timestampId !== null ? BigInt(object.timestampId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecordBeaconTimestampResponse();
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
        return exports.MsgRecordBeaconTimestampResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRecordBeaconTimestampResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecordBeaconTimestampResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse",
            value: exports.MsgRecordBeaconTimestampResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecordBeaconTimestampResponse.typeUrl, exports.MsgRecordBeaconTimestampResponse);
function createBaseMsgPurchaseBeaconStateStorage() {
    return {
        beaconId: BigInt(0),
        number: BigInt(0),
        owner: ""
    };
}
exports.MsgPurchaseBeaconStateStorage = {
    typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beaconId === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beacon_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorage.typeUrl || typeof o.beacon_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        if (message.number !== BigInt(0)) {
            writer.uint32(16).uint64(message.number);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurchaseBeaconStateStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                case 2:
                    message.number = reader.uint64();
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
        const message = createBaseMsgPurchaseBeaconStateStorage();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPurchaseBeaconStateStorage();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = BigInt(object.number);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPurchaseBeaconStateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPurchaseBeaconStateStorage.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPurchaseBeaconStateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
            value: exports.MsgPurchaseBeaconStateStorage.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPurchaseBeaconStateStorage.typeUrl, exports.MsgPurchaseBeaconStateStorage);
function createBaseMsgPurchaseBeaconStateStorageResponse() {
    return {
        beaconId: BigInt(0),
        numberPurchased: BigInt(0),
        numCanPurchase: BigInt(0)
    };
}
exports.MsgPurchaseBeaconStateStorageResponse = {
    typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beaconId === "bigint" && typeof o.numberPurchased === "bigint" && typeof o.numCanPurchase === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseBeaconStateStorageResponse.typeUrl || typeof o.beacon_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beaconId !== BigInt(0)) {
            writer.uint32(8).uint64(message.beaconId);
        }
        if (message.numberPurchased !== BigInt(0)) {
            writer.uint32(16).uint64(message.numberPurchased);
        }
        if (message.numCanPurchase !== BigInt(0)) {
            writer.uint32(24).uint64(message.numCanPurchase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurchaseBeaconStateStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beaconId = reader.uint64();
                    break;
                case 2:
                    message.numberPurchased = reader.uint64();
                    break;
                case 3:
                    message.numCanPurchase = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPurchaseBeaconStateStorageResponse();
        message.beaconId = object.beaconId !== undefined && object.beaconId !== null ? BigInt(object.beaconId.toString()) : BigInt(0);
        message.numberPurchased = object.numberPurchased !== undefined && object.numberPurchased !== null ? BigInt(object.numberPurchased.toString()) : BigInt(0);
        message.numCanPurchase = object.numCanPurchase !== undefined && object.numCanPurchase !== null ? BigInt(object.numCanPurchase.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPurchaseBeaconStateStorageResponse();
        if (object.beacon_id !== undefined && object.beacon_id !== null) {
            message.beaconId = BigInt(object.beacon_id);
        }
        if (object.number_purchased !== undefined && object.number_purchased !== null) {
            message.numberPurchased = BigInt(object.number_purchased);
        }
        if (object.num_can_purchase !== undefined && object.num_can_purchase !== null) {
            message.numCanPurchase = BigInt(object.num_can_purchase);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon_id = message.beaconId !== BigInt(0) ? message.beaconId.toString() : undefined;
        obj.number_purchased = message.numberPurchased !== BigInt(0) ? message.numberPurchased.toString() : undefined;
        obj.num_can_purchase = message.numCanPurchase !== BigInt(0) ? message.numCanPurchase.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPurchaseBeaconStateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPurchaseBeaconStateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPurchaseBeaconStateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse",
            value: exports.MsgPurchaseBeaconStateStorageResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPurchaseBeaconStateStorageResponse.typeUrl, exports.MsgPurchaseBeaconStateStorageResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: beacon_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
    aminoType: "mainchain/x/beacon/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && beacon_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && beacon_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && beacon_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            beacon_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? beacon_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = beacon_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? beacon_1.Params.toAmino(message.params) : beacon_1.Params.toAmino(beacon_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "mainchain/x/beacon/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/mainchain.beacon.v1.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
