"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeaconExport = exports.BeaconTimestampGenesisExport = exports.GenesisState = void 0;
//@ts-nocheck
const beacon_1 = require("./beacon");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: beacon_1.Params.fromPartial({}),
        startingBeaconId: BigInt(0),
        registeredBeacons: []
    };
}
exports.GenesisState = {
    typeUrl: "/mainchain.beacon.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || beacon_1.Params.is(o.params) && typeof o.startingBeaconId === "bigint" && Array.isArray(o.registeredBeacons) && (!o.registeredBeacons.length || exports.BeaconExport.is(o.registeredBeacons[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || beacon_1.Params.isSDK(o.params) && typeof o.starting_beacon_id === "bigint" && Array.isArray(o.registered_beacons) && (!o.registered_beacons.length || exports.BeaconExport.isSDK(o.registered_beacons[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || beacon_1.Params.isAmino(o.params) && typeof o.starting_beacon_id === "bigint" && Array.isArray(o.registered_beacons) && (!o.registered_beacons.length || exports.BeaconExport.isAmino(o.registered_beacons[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            beacon_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingBeaconId !== BigInt(0)) {
            writer.uint32(16).uint64(message.startingBeaconId);
        }
        for (const v of message.registeredBeacons) {
            exports.BeaconExport.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = beacon_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startingBeaconId = reader.uint64();
                    break;
                case 3:
                    message.registeredBeacons.push(exports.BeaconExport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? beacon_1.Params.fromPartial(object.params) : undefined;
        message.startingBeaconId = object.startingBeaconId !== undefined && object.startingBeaconId !== null ? BigInt(object.startingBeaconId.toString()) : BigInt(0);
        message.registeredBeacons = object.registeredBeacons?.map(e => exports.BeaconExport.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = beacon_1.Params.fromAmino(object.params);
        }
        if (object.starting_beacon_id !== undefined && object.starting_beacon_id !== null) {
            message.startingBeaconId = BigInt(object.starting_beacon_id);
        }
        message.registeredBeacons = object.registered_beacons?.map(e => exports.BeaconExport.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? beacon_1.Params.toAmino(message.params) : undefined;
        obj.starting_beacon_id = message.startingBeaconId !== BigInt(0) ? message.startingBeaconId.toString() : undefined;
        if (message.registeredBeacons) {
            obj.registered_beacons = message.registeredBeacons.map(e => e ? exports.BeaconExport.toAmino(e) : undefined);
        }
        else {
            obj.registered_beacons = message.registeredBeacons;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
function createBaseBeaconTimestampGenesisExport() {
    return {
        id: BigInt(0),
        t: BigInt(0),
        h: ""
    };
}
exports.BeaconTimestampGenesisExport = {
    typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport",
    is(o) {
        return o && (o.$typeUrl === exports.BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BeaconTimestampGenesisExport.typeUrl || typeof o.id === "bigint" && typeof o.t === "bigint" && typeof o.h === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.t !== BigInt(0)) {
            writer.uint32(16).uint64(message.t);
        }
        if (message.h !== "") {
            writer.uint32(26).string(message.h);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeaconTimestampGenesisExport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.t = reader.uint64();
                    break;
                case 3:
                    message.h = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeaconTimestampGenesisExport();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.t = object.t !== undefined && object.t !== null ? BigInt(object.t.toString()) : BigInt(0);
        message.h = object.h ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBeaconTimestampGenesisExport();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.t !== undefined && object.t !== null) {
            message.t = BigInt(object.t);
        }
        if (object.h !== undefined && object.h !== null) {
            message.h = object.h;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.t = message.t !== BigInt(0) ? message.t.toString() : undefined;
        obj.h = message.h === "" ? undefined : message.h;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BeaconTimestampGenesisExport.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BeaconTimestampGenesisExport.decode(message.value);
    },
    toProto(message) {
        return exports.BeaconTimestampGenesisExport.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport",
            value: exports.BeaconTimestampGenesisExport.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BeaconTimestampGenesisExport.typeUrl, exports.BeaconTimestampGenesisExport);
function createBaseBeaconExport() {
    return {
        beacon: beacon_1.Beacon.fromPartial({}),
        inStateLimit: BigInt(0),
        timestamps: []
    };
}
exports.BeaconExport = {
    typeUrl: "/mainchain.beacon.v1.BeaconExport",
    is(o) {
        return o && (o.$typeUrl === exports.BeaconExport.typeUrl || beacon_1.Beacon.is(o.beacon) && typeof o.inStateLimit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || exports.BeaconTimestampGenesisExport.is(o.timestamps[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BeaconExport.typeUrl || beacon_1.Beacon.isSDK(o.beacon) && typeof o.in_state_limit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || exports.BeaconTimestampGenesisExport.isSDK(o.timestamps[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BeaconExport.typeUrl || beacon_1.Beacon.isAmino(o.beacon) && typeof o.in_state_limit === "bigint" && Array.isArray(o.timestamps) && (!o.timestamps.length || exports.BeaconTimestampGenesisExport.isAmino(o.timestamps[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.beacon !== undefined) {
            beacon_1.Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
        }
        if (message.inStateLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.inStateLimit);
        }
        for (const v of message.timestamps) {
            exports.BeaconTimestampGenesisExport.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeaconExport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beacon = beacon_1.Beacon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inStateLimit = reader.uint64();
                    break;
                case 3:
                    message.timestamps.push(exports.BeaconTimestampGenesisExport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeaconExport();
        message.beacon = object.beacon !== undefined && object.beacon !== null ? beacon_1.Beacon.fromPartial(object.beacon) : undefined;
        message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
        message.timestamps = object.timestamps?.map(e => exports.BeaconTimestampGenesisExport.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBeaconExport();
        if (object.beacon !== undefined && object.beacon !== null) {
            message.beacon = beacon_1.Beacon.fromAmino(object.beacon);
        }
        if (object.in_state_limit !== undefined && object.in_state_limit !== null) {
            message.inStateLimit = BigInt(object.in_state_limit);
        }
        message.timestamps = object.timestamps?.map(e => exports.BeaconTimestampGenesisExport.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.beacon = message.beacon ? beacon_1.Beacon.toAmino(message.beacon) : undefined;
        obj.in_state_limit = message.inStateLimit !== BigInt(0) ? message.inStateLimit.toString() : undefined;
        if (message.timestamps) {
            obj.timestamps = message.timestamps.map(e => e ? exports.BeaconTimestampGenesisExport.toAmino(e) : undefined);
        }
        else {
            obj.timestamps = message.timestamps;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BeaconExport.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BeaconExport.decode(message.value);
    },
    toProto(message) {
        return exports.BeaconExport.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.beacon.v1.BeaconExport",
            value: exports.BeaconExport.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BeaconExport.typeUrl, exports.BeaconExport);
